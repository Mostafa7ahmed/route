import React from 'react'
import Navbar from '../navbar/Navbar'
import Contact from '../contact/Contact'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'

export default function Layout() {
  return (
    <>
    <Navbar/>
   <Outlet></Outlet>
    <Footer/>
    </>

   
  )
}
