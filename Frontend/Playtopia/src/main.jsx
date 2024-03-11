import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
import './index.css';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Layout from './Layout.jsx'
import SignUp from './components/SignUp.jsx'
import HomePage from './components/HomePage.jsx';
import ValorantReg from './components/EventPages/ValorantReg.jsx';
import BgmiReg from './components/EventPages/BgmiReg.jsx';
import BpReg from './components/EventPages/BpReg.jsx';
import TreasureHuntReg from './components/EventPages/TreasureHuntReg.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element= {<HomePage/>}/>
      <Route path='signUp' element= {<SignUp/>}/>
      <Route path='valorantReg' element= {<ValorantReg/>}/>
      <Route path='bgmiReg' element= {<BgmiReg/>}/>
      <Route path='8bpReg' element= {<BpReg/>}/>
      <Route path='photographyReg' element= {<TreasureHuntReg/>}/>
      <Route path='hackathonReg' element= {<TreasureHuntReg/>}/>
      <Route path='treasureHuntReg' element= {<TreasureHuntReg/>}/>
      <Route path='openMicReg' element= {<TreasureHuntReg/>}/>
      {/* <Route path='forgot-password' element= {<ForgotPassword/>}/> */}
    </Route>
  )
)

// import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
    <RouterProvider router={router}/>
    </div>
  </React.StrictMode>
);
