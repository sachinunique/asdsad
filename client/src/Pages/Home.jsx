import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Componants/Header'
const Home = () => {
  return (
  <>
   <Header/>
    <Outlet/>
   
  </>
    
  )
}

export default Home