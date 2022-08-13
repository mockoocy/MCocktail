import {Handler} from '@netlify/functions';
import axios from 'axios';

const handler: Handler = async (event, context) => {
  console.log(event)
  return {
    statusCode: 200, 
    body: JSON.stringify({message: "Hello World!"})
  };
};

export { handler };