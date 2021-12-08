const express = require('express')
const request = require('request')

app = express();
const port = 3000;

app.get("/", function(req, res){
    request("http://127.0.0.1:5000/", function (error, response, body) {
        console.error(error);
        console.log('statusCode :', response && response.statusCode )
        res.send(body);
    })
})

app.listen(port, function(){
    console.log(`Listening on http://127.0.0.1:${port}`)
})