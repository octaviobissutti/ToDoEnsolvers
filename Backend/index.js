const express = require('express');

const routers = require('./routers');
const path = require('path');
require('dotenv').config({path: '.env'})


const db = require('./db');

require('./models/Folder');
require('./models/Todo');

db.sync()
    .then(() => console.log('Conectado al Servidor'))
    .catch(error => console.log(error));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routers());

app.listen(3000);