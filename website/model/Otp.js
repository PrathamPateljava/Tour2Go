const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const otpSchema= new Schema({
    mail:{
        type:String,
        required:true,
    },
    code:{
        type:String,
        required:true,
    },
    expireIn:{
        type:Number,
        required:true,
    }
},{
    timestamps:true
}
)
module.exports=mongoose.model("Otp",otpSchema)