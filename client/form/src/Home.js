import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import { useLocation } from 'react-router-dom';

function Home() {
    const location = useLocation();
    const { data } = location.state;
  return (
    <div>
      wecome to home
      <Header title={data}/>
      <Content title={data}/>
      <Footer/>
    </div>
  )
}

export default Home
