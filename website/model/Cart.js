const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const CartSchema= new Schema({
    mail:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    pacid:{
        type:String,
        required:true,
    },
    packagename:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    count:{
        type:String,
        
    },
    date:{
        type:String,
        required:true,
    }
}
)
module.exports=mongoose.model("Cart",CartSchema)