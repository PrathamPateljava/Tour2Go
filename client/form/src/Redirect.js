import React from 'react'
import { Route,Routes } from 'react-router-dom'
function Redirect() {
  return (
      <Routes>
      <Route path='/login/login1' element={"hello world"}/>
      </Routes>
    
  )
}

