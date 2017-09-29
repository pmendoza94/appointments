const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path'); 

app.use(bodyParser.urlencoded({extends:true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/public/dist')));

require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)

app.listen(4200, function() {
	console.log('Listening on port 4200');
});