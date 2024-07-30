import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Start from './commpont/start/Start'
import Layout from './commpont/layout/Layout'
import Contact from './commpont/contact/Contact'
import Portfolio from './commpont/portfolio/Portfolio'
import About from './commpont/about/About'
import Notfound from './commpont/notfound/Notfound'

let x=createBrowserRouter([{path:'' ,element:<Layout/>,children:[
  {index:true,element:<Start/>},
  {path:'contact',element:<Contact/>},
  {path:'portfolio',element:<Portfolio/>},
  {path:'about',element:<About/>},
  {path:'*',element:<Notfound/>}
]}])

function App() {

  return (
    <>
      
      <RouterProvider router={x}></RouterProvider>
    </>
  )
}

export default App
