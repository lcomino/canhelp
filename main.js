var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.sendFile('index.html', {root : __dirname});
});

app.listen(3000, () => {
    console.log('Running on port 3000')
});