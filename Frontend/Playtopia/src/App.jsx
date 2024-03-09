import React from 'react'

import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import SignUp from './components/SignUp.jsx'
import HomePage from './components/HomePage.jsx';
import Aboutus from './components/Aboutus.jsx';
import Events2 from './components/Events2.jsx';
import Gallery from './components/Gallery.jsx'
import Footer from './components/Footer.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element= {<HomePage/>}/>
      <Route path='signUp' element= {<SignUp/>}/>
      <Route path='logIn' element= {<Login/>}/>
      {/* <Route path='forgot-password' element= {<ForgotPassword/>}/> */}
    </Route>
  )
)

export default function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}
