const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');




const app = express();

//Port Number
const port = 3000;

const cities = require('./routes/cities');

//CORS Middleware
app.use(cors());

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

//Routes
app.use('/cities', cities);

//Index Route
app.get('/', (req, res)=>{
	res.send('invailid endpoint');
})

//Start Server
app.listen(port, ()=>{
	console.log('server started on port '+ port);
});