const APIRouters = require('./routes');
const express = require('express');
const app = express();
const port = 3000;
//const axios = require('axios').default;

app.use(express.json());

APIRouters(app);

app.listen(port, () => {
    console.log('My port ' + port)
});