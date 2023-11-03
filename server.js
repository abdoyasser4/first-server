const express=require('express');
const mongoose=require('mongoose');


//connect server to mongo server ==>local db

mongoose.connect("mongodb://0.0.0.0:27017/",(err)=>{
    if(!err) console.log("server connected");
    else console.log(err);
});

//student schema......///////////
const Studentschema=new mongoose.Schema({
    phone:String,
    name:String,
    age:Number,
    address:String,
    password:String
});

let Studentsmodel=new mongoose.model("student",Studentschema);

//courses schema........../////////
const coursesschema=new mongoose.Schema({
name:String,
price:String,
description:String
});

let coursesmodel=new mongoose.model("courses",coursesschema);

////////////students///////////
let Abdo=new Studentsmodel({
    phone:"01151403671",
    name:"Abdulrahman Yasser",
    age:21,
    address:"Tanta",
    password:"Abdo1512"
}).save();

let Ahmed=new Studentsmodel({
    phone:"01056739428",
    name:"Ahmed mohamed",
    age:24,
    address:"Alex",
    password:"Ahmed1234"
}).save();

let Mohamed=new Studentsmodel({
    phone:"01268617590",
    name:"Mohamed zeyad",
    age:23,
    address:"fayom",
    password:"mohamed1234"
}).save();

///////////courses////////////
let web=new coursesmodel({
    name:"web",
    price:"10$",
    description:"Learn all the basics of the web"
}).save();

let IS=new coursesmodel({
    name:"is",
    price:"20$",
    description:"Learn all the basics of the IS"
}).save();

let CS=new coursesmodel({
    name:"cs",
    price:"15$",
    description:"Learn all the basics of the CS"
}).save();

////////////endpoint_students///////////////
//////localhost:3000/student
let app=express();


app.get('/student', async(req,res)=>{
let allstudent=await Studentsmodel.find();
res.status(200);
console.log(allstudent.length)
res.json(allstudent);
});


////////////endpoint_courses///////////////

app.get('/courses', async(req,res)=>{
    let allcourses=await coursesmodel.find();
    res.status(200);
    console.log(allcourses.length)
    res.json(allcourses);
    });
    
////////////////////////////////
app.get('/',async(req,res)=>{
    res.send("welcome");
})
///////////////////////////////
app.listen(3000,function(){
    console.log("server is ready");
})

