import { useState, useEffect } from 'react';
import {TApiResponse} from "../types"


export const useApiGet = (url: string): TApiResponse => {
  const [status, setStatus] = useState<Number>(0);
  const [statusText, setStatusText] = useState<String>('');
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const getAPIData = async () => {
    setLoading(true);
    try {
      const apiResponse = await fetch(url);
      const json = await apiResponse.json();
      setStatus(apiResponse.status);
      setStatusText(apiResponse.statusText);
      setData(json);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    // react exhaustive deps fix; otherwise - empty deps and linter comment 
    if (loading || data) return; 
    getAPIData();
  }, [getAPIData, data, loading]);

  return { status, statusText, data, error, loading };
};