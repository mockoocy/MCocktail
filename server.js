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
    url: `http://www.thecocktaildb.com/api/json/v2/${cocktailKey}/randomselection.php`
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

app.get('/urlPopular', (req,res) => {
  const options = {
    method: "GET",
    url: `http://www.thecocktaildb.com/api/json/v2/${cocktailKey}/popular.php`
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

// Some of the ingredients in the PAID version of the API had no marching drinks. WTF?
app.get('/urlName/:name', (req,res) => {
  const name = req.params.name;
  const options = {
    method: "GET",
    url: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
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
    url: `https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`
  }
  axios.request(options).then(response => {
    res.json(response.data)
  }).catch(error => {
    console.log(error)
  })
})

app.get('/urlListIngredientsV2', (req,res) => {
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

app.get('/multiIngredient/:ingredients', (req,res) => {
  const ingredients = req.params.ingredients
  const options = {
    method: "GET",
    url: `https://www.thecocktaildb.com/api/json/v2/${cocktailKey}/filter.php?i=${ingredients}`
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