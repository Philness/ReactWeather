var express = require("express");
var app = express();

// This lets express see folders that are in the directory listed in the argument
//Index.html goes here
app.use(express.static('public'));

//This tells the server to start
app.listen(3000,function(){console.log("We are LIVE on port 3000!");});
