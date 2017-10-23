// importing modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const http = require('http');
const cors = require('cors');
const app = express();

const port = 3000;

const route = require('./routes/route');

const errorContext = require('error-context')
console.log(errorContext('foo\nbar\nbaz\nbash\nbing', 3, 2))

//connect to mongo db
mongoose.connect('mongodb://localhost:27017/contactlist');

//on connection

mongoose.connection.on('connected',()=>{
	console.log('connected to database mongodb # 27017');
});

mongoose.connection.on('error',(err)=>{
	if(err)
	{
		console.log('error is database connection'+err);
	}
});

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', route);

app.get('/',(req,res) => {
	res.send("foobar")
});


app.listen(port, ()=>{
	console.log('server started at port:' +port);
	})
