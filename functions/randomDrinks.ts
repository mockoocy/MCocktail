import {Handler} from '@netlify/functions';
import axios from 'axios';


const handler: Handler = async (event, context) => {

  const cocktailKey = process.env.COCKTAIL_DB_API_KEY;

  const url = `http://www.thecocktaildb.com/api/json/v2/${cocktailKey}/randomselection.php`

  const bodyContent = await axios.get(url).then(response => response.data);
  console.log(bodyContent)

  return {
    statusCode: 200, 
    body: JSON.stringify(bodyContent)
  };
};

export { handler };