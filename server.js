const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const PORT = 8000;

const app = express();

const cocktailKey = process.env.COCKTAIL_DB_API_KEY

app.use(cors())
app.get('/urlDefault', (req,res) => {
  const options = {
    method: "GET",
    url: `https://www.thecocktaildb.com/api/json/v2/${cocktailKey}/search.php?s=p`
  }
  axios.request(options).then(response => {
    res.json(response.data)
  }).catch(error => {
    console.log(error)
  })
})

app.get('/urlAlcoholic', (req,res) => {
  const options = {
    method: "GET",
    url: `https://www.thecocktaildb.com/api/json/v2/${cocktailKey}/filter.php?a=`
  }
  axios.request(options).then(response => {
    res.json(response.data)
  }).catch(error => {
    console.log(error)
  })
})

app.get('/urlIngredient', (req,res) => {
  const options = {
    method: "GET",
    url: `https://www.thecocktaildb.com/api/json/v2/${cocktailKey}/filter.php?i=`
  }
  axios.request(options).then(response => {
    res.json(response.data)
  }).catch(error => {
    console.log(error)
  })
})
app.get('/urlName/:name', (req,res) => {
  const name = req.params.name;
  const options = {
    method: "GET",
    url: `https://www.thecocktaildb.com/api/json/v2/${cocktailKey}/search.php?s=${name}`
  }
  axios.request(options).then(response => {
    res.json(response.data)
  }).catch(error => {
    console.log(error)
  })
})
app.get('/urlListIngredients', (req,res) => {
  const options = {
    method: "GET",
    url: `https://www.thecocktaildb.com/api/json/v2/${cocktailKey}/list.php?i=list`
  }
  axios.request(options).then(response => {
    res.json(response.data)
  }).catch(error => {
    console.log(error)
  })
})
app.get('/urlDetailsById/:drinkId', (req,res) => {
  const drinkId = req.params.drinkId;
  const options = {
    method: "GET",
    url: `https://www.thecocktaildb.com/api/json/v2/${cocktailKey}/lookup.php?i=${drinkId}`
  }
  axios.request(options).then(response => {
    res.json(response.data)
  }).catch(error => {
    console.log(error)
  })
})



app.listen(PORT, ()=>console.log(`running on ${PORT}`))