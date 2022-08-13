import { Handler } from "@netlify/functions";
import axios from "axios";

const handler: Handler = async (event, context) => {

  const type = event.queryStringParameters?.type;

  const arg = event.queryStringParameters?.arg;

  const cocktailKey = process.env.COCKTAIL_DB_API_KEY;

  let urlSnippet = ""

  switch (type){
    case "random":
      urlSnippet = "randomselection.php";
      break;
    case "alcoholic":
      urlSnippet = "filter.php?a=";
      break;
    case "popular":
      urlSnippet = "popular.php";
      break;
    case "ingredientInfo":
      urlSnippet = "filter.php?i=";
      break;
    case "name": 
      urlSnippet = "search.php?s=";
      break;
    case "listIngredients":
      urlSnippet = "list.php?i=list";
      break;
    case "multiIngredient":
      urlSnippet = "filter.php?i=";
      break;
      //Now I have noticed, that it's the same as single ingredient, cool
    case "drinkDetailsById":
      urlSnippet = "lookup.php?i=";
      break;
    case "ingredientByName":
      urlSnippet= "search.php?i="
      break;
  }

  const baseUrl = `https://www.thecocktaildb.com/api/json/v2/${cocktailKey}/`
  
  const url = `${baseUrl}${urlSnippet}${arg ? arg : ''}`


  const bodyContent = await axios.get(url).then(res=>res.data)


  return {
    statusCode: 200,
    body: JSON.stringify(bodyContent),
  };
};

export { handler };
