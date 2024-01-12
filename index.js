var express = require(‘express’);
var bodyParse = require("body-parser");
var mongoose = require ("mongoose");

const app =express()

app.use(bodyParse.json())
app.use(express.static("public"))
app.use(bodyParse.urlencoded({
    extended:true
}))


// connect database

mongoose.connect('mongodb://0.0.0.0:27017/mydb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

var db = mongoose.connection;

// check connection

db.on('error',()=>console.log("eror in connecting database"));
db.once('open',()=>console.log(connected to Database"));

//data upload

app.post("/sign_up",(req.res)=>(
    var name =req.body.name;
    var email =req.body.email;
    var password=req.body.password;


    //create object

    var data={
        "name": name,
        "email": email,
        "password" : password
    }

//sent database

db.collection('users').insertOne(data,(err,collection) => {
    if(err) throw err;
    console.log("Record insert Successfully");

});
    
return res.redirect("signup_success.html");


app.get"/",(req,res)=>(

    res.set({
        "Allow-access-Allow-Origin":'.'
    })

    return res.redirect('index.html');

)).listen (3000);