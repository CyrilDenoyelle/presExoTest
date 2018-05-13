const express = require('express');
const init = require('./init');
const AllDogs = require('./all-dogs');
const CreateDog = require('./create-dog');

app = express();

init.initBdd();

app
.get('/', (req, res)=>{res.redirect("/dogs")})
.get('/dogs', AllDogs)
.get('/create/dog', CreateDog)
// .get('/dogs/ownerid/:id', DogsByOwnerId())

app.listen(8000);