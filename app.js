var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
express.static(public, [allow]);
app.use(express.static('public'));

app.get("/", function(req, res){
    res.render("index");
});

app.get("*", function(req, res){
    res.send("Page does not exist");
});
  
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});
  