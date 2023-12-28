const User = require("../model/User")
const Otp = require("../model/Otp")
const Cart = require("../model/Cart")

const Booking = require("../model/Booking")
var nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser');
const { default: Stripe } = require("stripe");
// const Stripe =require('stripe')("sk_test_51MmzI1SJ843d9xD0Fc1L1boI6Y5lFWroNDptD1CWjB8kuD6f0Yr9tVFT0rHgisbhcAnuDLmT43JB5Jk0dEpqthvI004jPbqpij");
const uuid = require('uuid').v4




const getUsers = async (req, res) => {
    let user
    try {
        user = await User.find()
    } catch (err) {
        console.log(err)
    }
    if (!user) {
        return res.status(404).json({ message: "No user found" })
    }
    return res.status(200).json({ user })
}





const addUsers = async (req, res) => {
    const { name, mail, phone, password, state } = req.body;
    let user
    const epassword = await bcrypt.hash(password, 10)
    try {
        user = new User({
            name,
            mail,
            phone,
            password: epassword,
            state,
        });

        const token = jwt.sign(
            { id: user._id, mail },
            'shhhh',//process.env.jwtsecret
            {
                expiresIn: "4h"
            }
        )
        user.token = token
        await user.save()
        user.password - undefined

    } catch (err) {
        console.log(err);
        if (err.name == "MongoServerError" && err.code == 11000) {
            return res.status(404).json({ message: "Already hai bhoiii kya kar rhe ho" })
        }
    }
    if (!user) {
        return res.status(404).json({ message: "nahi huaa" })
    }
    await mail1(mail);
    return res.status(200).json({ message: "done" })
    


}





async function mail1(mail) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: true,
        auth: {
            user: 'jsnode377@gmail.com',
            pass: 'qcrisslvykcdzfog'
        }
    });

    console.log("hello1");
    const mailOptions = {
        from: "jsnode377@gmail.com",
        to: mail,
        subject: "sending email using node.js",
        text: "u hav registered"
    };

    console.log("hello1");
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    } catch (err) {
        console.error(err);
    }

    console.log("hello1");
}

const validate = async (req, res) => {
    // var bcrypt = require('bcryptjs');
    const { mail1, password1 } = req.body;
    const user = await User.findOne({ mail:mail1 });
    if (user && await bcrypt.compare(password1, user.password)) {
      
        console.log("hhhhhhhh")
        const token = jwt.sign(
            { mail: user.mail },

            'shhhh',//process.env.jwtsecret
            {
                expiresIn: "4h"
            }
        );
        user.token = token
        user.password = undefined
        //cookie section
        const options = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            httpOnly: true
        };
        // return res.status(200).cookiep("token",token,options).json({
        //             success:true,
        //             token,
        //             user
        // });

        return res.status(200).json({ message: "done",token, success: true, t: user.name });

    }
    else {
        return res.status(400).json({ message: "User not found" });

    }

    // if (!validPassword) {
    //     return res.status(400).json({ message: "Invalid Password" });
    // }
    


}




const emailSend = async (req, res) => {
    const { mail } = req.body;
    let data = await User.findOne({ mail: req.body.mail });
    if (!data) {
        return res.status(400).json({ message: "enter email" });
    }
    const responseType = {};
    if (data) {
        var otpcode = Math.floor((Math.random() * 100000) + 1);

        let otpData = new Otp({
            mail: mail,
            code: otpcode,
            expireIn: new Date().getTime() + (1000 * 1000)
        })
        await otpData.save();

    } else {
        return res.status(400).json({ message: "email id doesnt exist" });
    }
    console.log("hello");
    await mailer(mail, otpcode);
    console.log("hello1");

}





async function mailer(mail, otp) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: true,
        auth: {
            user: 'jsnode377@gmail.com',
            pass: 'qcrisslvykcdzfog'
        }
    });

    console.log("hello1");
    const mailOptions = {
        from: "jsnode377@gmail.com",
        to: mail,
        subject: "sending email using node.js",
        text: otp.toString()
    };

    console.log("hello1");
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    } catch (err) {
        console.error(err);
    }

    console.log("hello1");
}




const changePassword = async (req, res) => {
    let data1 = await Otp.find({ code: req.body.otp, mail: req.body.mail });
    console.log(data1);
    const response = {}
    if (data1) {
        let currentTime = new Date().getTime();
        let diff = data1.expireIn - currentTime;
        if (diff < 0) {
            response.message = 'Token expire'
            response.statusText = 'error'
        }
        else {
            console.log(req.body.mail);
            console.log(req.body.npassword);
            let user = await User.findOne({ mail: req.body.mail });

            user.password = await bcrypt.hash(req.body.npassword, 10);
            await user.save();

            response.message = 'password changed succefuly'
            response.statusText = 'Success'

        }
    } else {

        response.message = 'invalid otp'
        response.statusText = 'error'
    }
    res.status(200).json(response);
}




const delitem = async (req, res) => {
    const { name, pacid } = req.body;
    let del = await Cart.deleteMany({ name: name, pacid: pacid });
    if (del) {
        return res.status(404).json({ message: "deleetd" })
    }
}




const getitem = async (req, res) => {
    const name = req.params.userId;
    console.log(name)
    try {  
        const cartItems = await Cart.find({ name: name });
        var g = cartItems.pacid   
        res.json(cartItems)
    } catch (err) {    
    console.log(err);
        return res.status(500).json({ message: "Server error" });
    }
};




const additem = async (req, res) => {
    const { pacid, name, packagename,price } = req.body;
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString();
    let item
    console.log("hello")
   
    let person = await User.find({ name: name });
    if (person.length > 0) {
        let mail = person[0].mail;
    console.log("hehe")
    try {
        item = new Cart({

            mail,
            name,
            pacid,
            packagename,
            price,
            date: formattedDate
        });
        await item.save()
    } catch (err) {
        console.log(err);
        if (err.name == "MongoServerError" && err.code == 11000) {
            return res.status(404).json({ message: "Already hai bhoiii kya kar rhe ho" })
        }
    }
    if (!item) {
        return res.status(404).json({ message: "nahi huaa" })
    }
    return res.status(200).json({ message: "done" })
        
      } else {
        console.log('No matching documents found');
      }
    
}





const checkout = async(req,res)=>{
console.log("request:",req.body)

let error,status
const key =uuid()
try{
const {product,token,data,data1,data2,data3,data4,data7,data10}= req.body
console.log("addnahi")
if(data10==="")
{ var a=1
}else{
  if(data10==="0.8")
  {
    var a=0.8
  }
  else{
    var a=0.9
  }
}
    const data89=data1*a
const item4 = new Booking({

    mail:data3,
    name:data,
    pacid:data4,
    packagename:data2,
    price:data89,
    count:1,
     date:data7,
     key:key,
     promocode:data10
});await item4.save()
await mail2(data3,data2,data89,data7)

console.log("add")
const customer = await Stripe.customer.create({
    email: product.email
});

const charge = await Stripe.chargesResource.create({
    amount:(product.price*100),
    currency: "usd",
    customer: customer.email,
    receipt_email:token.email,
    description:'purchased the {data2}',
    shipping:{
        name: token.card.name,
       
    },

}

);
console.log(key)

console.log("done")

console.log("charge:",{charge});
status = "success";
}
catch(error){
    console.log(error);
    status = " failure";
}
res.json({error,status});
}



async function mail2(mail,packagename,price,date) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: true,
        auth: {
            user: 'jsnode377@gmail.com',
            pass: 'qcrisslvykcdzfog'
        }
    });
        const tr="Your Booking is confirmed for package"
        const tr1="on date:"
        const tr2="and amount is"
        const tr3="Rs"
        const tr4={packagename}
    console.log("hello1");
    const mailOptions = {
        from: "jsnode377@gmail.com",
        to: mail,
        subject: "Booking confirmation Mail",
        text: tr+ tr4+tr1+ {date}+tr2+  {price}+tr3 
    };

    console.log("hmailgone");
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    } catch (err) {
        console.error(err);
    }

    console.log("hello1");
}




const display=async (req,res)=>{
    const pacid = req.params.data;
    console.log("fjdfjdf")
    console.log(pacid)
    try {
        console.log("fjdfjdf")
        const cartItems = await Cart.find({ pacid: pacid});
        console.log()
        res.json(cartItems)
        console.log("done")
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Server error" });
    }
}



const displayorder = async (req, res) => {
    const name = req.params.data;
    console.log(name)
    try {     
        const cartItems = await Booking.find({ name: name});
        var g = cartItems.pacid     
        res.json(cartItems)
    } catch (err) 
    {     
    console.log(err);
        return res.status(500).json({ message: "Server error" });
    } 
};


const deleteorder = async (req, res) => {
    const {  pacid,name } = req.body;
    let del = await Booking.deleteOne({name,pacid });
    console.log("done")
    if (del) {
        return res.status(404).json({ message: "deleetd" })
    }
}

const deletecart = async (req, res) => {
    const {  pacid,name } = req.body;
    let del = await Cart.deleteOne({name,pacid });
    console.log("done")
    if (del) {
        return res.status(404).json({ message: "deleetd" })
    }
}

exports.deleteorder=deleteorder
exports.deletecart=deletecart

exports.displayorder=displayorder
exports.display=display
exports.checkout=checkout
exports.getitem = getitem
exports.delitem = delitem

exports.additem = additem

exports.getUsers = getUsers
exports.validate = validate
exports.addUsers = addUsers
exports.emailSend = emailSend
exports.changePassword = changePassword
