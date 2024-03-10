import React from 'react'

import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Layout from './Layout.jsx'
import SignUp from './components/SignUp.jsx'
import HomePage from './components/HomePage.jsx';
import ValorantReg from './components/EventPages/ValorantReg.jsx';
import BgmiReg from './components/EventPages/BgmiReg.jsx';
import BpReg from './components/EventPages/BpReg.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element= {<HomePage/>}/>
      <Route path='signUp' element= {<SignUp/>}/>
      <Route path='valorantReg' element= {<ValorantReg/>}/>
      <Route path='bgmiReg' element= {<BgmiReg/>}/>
      <Route path='8bpReg' element= {<BpReg/>}/>
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
