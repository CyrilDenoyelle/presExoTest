const express = require('express');
const connect = require('./connect');
const AllDogs = require('./all-dogs');
const CreateDog = require('./create-dog').f;

app = express();

connect.connectBdd()
const serverOn = (req, res)=>{
	console.log("serverOn");
};
const serverOff = (req, res)=>{
	console.log("serverOn");
};


const DogsByOwnerId = (req, res)=>{
	// envoi a la reponse(res.send) une recherche dans users(users.find) les utilisateurs dont l'id est identique a l'id du params
	// res.send(users.find(e=>e.id==req.params.id));
};

app
.get('/', (req, res)=>{res.redirect("/dogs")})
.get('/dogs', AllDogs)
.get('/create-dog', CreateDog)
// .get('/dogs/ownerid/:id', DogsByOwnerId())

app.listen(8000);