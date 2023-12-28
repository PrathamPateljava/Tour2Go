const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema1= new Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    mail:{
        type:String,
        required:true,
        unique:true,
    },
    phone:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    
    state:{
        type:String,
        required:true,
    },
    token:{
        type:String,
        
    }
});
module.exports=mongoose.model("User",userSchema1);
