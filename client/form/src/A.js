import React from 'react'
import { json, Route,Routes ,Navigate } from 'react-router-dom'
import App from './App'
import Login1 from './Login1'
import Otp from './Otp'
import Fpassword from './Fpassword'
import Home from './Home'
import Cart from './Cart'
import Pac1 from './Pac1'
import Pac2 from './Pac2'
import Pac3 from './Pac3'
import Pay from './Pay'
import Orders from './Orders'
function A() {
  const isloggedin =JSON.parse(window.localStorage.getItem("loggedin"))
  return (
    <div>
     <Routes>
     <Route path='/' element={<App/>}/>
     
     <Route path='/login1' element={<Login1/>}/>
     <Route path='/fpassword/otp' element={<Otp/>}/>
     <Route path='/fpassword/otp/login1' element={<Login1/>}/>
     <Route path='/fpassword' element={<Fpassword/>}/>
     <Route path='/login1/home' element={<Home/>}/>
     <Route path='/home/cart' element={<Cart/>}/>
     <Route path='/home/order' element={<Orders/>}/>
     
     <Route path='/home/pac1' element={<Pac1/>}/>
     <Route path='/home/cart/pay' element={<Pay/>}/>
     <Route path='/home/pac2' element={<Pac2/>}/>
     
     <Route path='/home/pac3' element={<Pac3/>}/>

      </Routes>
    </div>
  )
}

export default A
