const express = require('express');
const mongoose = require('mongoose');
const cors=require("cors")
const bodyparser=require('body-parser')
const router2=require("./routes/login-routes");
const cookieParser = require('cookie-parser');

const app=express();
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.use(cors())
app.use(express.json());
app.use(cookieParser())
app.use("/login",router2);

mongoose.connect("mongodb+srv://adminr:Rameshwar@cluster0.vbigzwv.mongodb.net/bookStore?retryWrites=true&w=majority")
.then(()=>console.log("Connected to Database"))
.then(() => {
    app.listen(5000);
}).catch((err)=>console.log(err));
