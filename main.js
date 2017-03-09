var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.sendFile('index.html', {root : __dirname});
});

app.listen(port, () => {
    console.log('Running on port '+ port)
});