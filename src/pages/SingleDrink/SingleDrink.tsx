import React from "react";
import StyledSingleDrink from "./styles/StyledSingleDrink";
import { useParams } from "react-router-dom";
import { useApiGet } from "../../hooks/useApiGet";
import { TApiResponse } from "../../types";
import urls from "../../data/urls.json"

export default function SingleDrink(){
  const {drinkId} = useParams();
  const {urlDetailsById} = urls;
  console.log(urlDetailsById)
  return (
    <StyledSingleDrink>
      <h1>
        Hello! {drinkId}
      </h1>
    </StyledSingleDrink>
  )
}