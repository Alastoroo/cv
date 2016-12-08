var express = require("express");
var path = require("path");
var app = express();



app.set("port",3000);


app.use(express.static(__dirname,"public");

var server = app.listen(app.get("port"),function(){
	console.log("Server up");
});
