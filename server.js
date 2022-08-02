const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const PORT = 8000;

// 90 -> code for "Z", 65 -> code for "A"
const randomCharCode = Math.floor(Math.random() * (90-65)) + 65

const app = express();

const cocktailKey = process.env.COCKTAIL_DB_API_KEY

app.use(cors())
app.get('/urlDefault', (req,res) => {
  const options = {
    method: "GET",
    url: `https://www.thecocktaildb.com/api/json/v2/${cocktailKey}/search.php?s=${String.fromCharCode(randomCharCode)}`
  }
  axios.request(options).then(response => {
    res.json(response.data)
  }).catch(error => {
    console.log(error)
  })
})

app.get('/urlAlcoholic/:alcoholic', (req,res) => {
  const options = {
    method: "GET",
    url: `https://www.thecocktaildb.com/api/json/v2/${cocktailKey}/filter.php?a=${req.params.alcoholic}`
  }
  axios.request(options).then(response => {
    res.json(response.data)
  }).catch(error => {
    console.log(error)
  })
})

app.get('/urlIngredient/:ingredient', (req,res) => {
  const options = {
    method: "GET",
    url: `https://www.thecocktaildb.com/api/json/v2/${cocktailKey}/filter.php?i=${req.params.ingredient}`
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



app.listen(PORT, ()=>console.log(`server running on ${PORT}`))