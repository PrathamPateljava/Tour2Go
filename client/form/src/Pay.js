
import React, { useState, useEffect } from 'react';
import "./cs.css"
import Header from './Header';
import Footer from './Footer';
import { useNavigate,useLocation } from 'react-router-dom';
import { Card, CardBody,  CardTitle } from 'reactstrap';
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'


function Pay() {
  const location = useLocation();
  const { data4,data1,data2,data7,data3,data,data10} = location.state;
if(data10==="")
{
  var a=1
}else
{
  if(data10==="0.8"){
    var a=0.8
  }
  else{
    var a=0.9
  }
}
  const data89=data1*a
const navigate = useNavigate();
// const[error,seterror]=useState();
const [product]=useState({
   name:data2,
   price:data89,
   mail:data3,
   id:data4,
   username:data,
   promocode:data10,
   description:'this is sample'
})  


async function handleToken(token,address){
  const response = await axios.post('http://localhost:5000/login/checkout',{token,product,data1,data,data2,data3,data7,data4,data10})
 console.log(response.status)
 if(response.status===200)
 {
   navigate("/home/cart",{state:{data}})
 }
 else{
  navigate("/home/cart")
 }
}
  return (
    
    <div className='content'>
      <div>
      <Header title={"trail"} />
     
      
          <Card >
            <CardBody>
              <CardTitle>Package Name   : {data2}</CardTitle>
              <CardTitle>Email.Id   : {data3}</CardTitle>
              <CardTitle>Date   : {data7}</CardTitle>
              
              <CardTitle>username  : {data}</CardTitle>
              <CardTitle>Package ID     : {data4}</CardTitle>
              <CardTitle>Package Price  :{data89}</CardTitle>
              
              <CardTitle>Promocode  :{data10?<label>Yes</label>:<label>No</label>}</CardTitle>
              
              <CardTitle>Promocode  :FIRST100</CardTitle>
              
            </CardBody>
          </Card>
        
      <div className="content1">
      <StripeCheckout  stripeKey='pk_test_51MmzI1SJ843d9xD0s4UbWOGcdDXzDHr36SQArR7mXCw5pwgoBj3W39syFfxMmz5Pe7znfmwLb0eLWo3xivOUbnlv00xI2eY3bm'
      token={handleToken}
      amount={product.price}
      name={product.name}
      mail={product.mail}
      id={product.id}
username={product.username}
promocode={product.promocode}
      />
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Pay
