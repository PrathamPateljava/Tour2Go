const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const bookSchema= new Schema({
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
    },
    
    key:{
        type:String,
        required:true,
    },
    promocode:{
        type:String,
    }
}
)
module.exports=mongoose.model("Booking",bookSchema)