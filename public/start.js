const path = require('path');
const express = require('express');
const app = express()
 
app.use(express.static(__dirname + '/styles'))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/Login.html' ));
   });


app.listen(3000);
 
console.log("Server listening on port 3000");
