const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const api = require('./server/routes/api');
const PORT = 3000;

const app = express();
app.use(express.static(path.join(__dirname, 'dist/AngularExpressDemo')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', api);

app.get('*', (req, res ) => {
    res.sendFile(path.join(__dirname, 'dist/AngularExpressDemo/index.html'));
});

app.listen(PORT, () => {
    console.log("Server now running on port ", PORT);
}) 