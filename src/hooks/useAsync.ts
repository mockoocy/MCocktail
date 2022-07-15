import { useCallback, useEffect, useState } from "react"

type ApiResponse = {
  drinks: undefined |object[]
}

export default function useAsync(callback : Function, dependencies: any[] = []) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | Error | undefined>()
  const [value, setValue] = useState<ApiResponse>()

  const callbackMemoized = useCallback(() => {
    setLoading(true)
    setError(undefined)
    setValue(undefined)
    callback()
      .then(setValue)
      .catch(setError)
      .finally(() => setLoading(false))
  }, dependencies)

  useEffect(() => {
    callbackMemoized()
  }, [callbackMemoized])

  return { loading, error, value }
}