
const express = require('express');
const bodyParser = require('body-parser');
const mysqlConection = require("./config/connection");

const routerPages = require('./routes/pages');
const routerMenu = require('./routes/menu');

const port = 5000;
const app = express()
app.use(bodyParser.json());

app.get('/api/', (req, res) => res.send('CMS API'));
app.use("/api/pages",routerPages);
app.use("/api/menu",routerMenu);

app.listen(port);
