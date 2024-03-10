import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Hamburger from './Hamburger';

import '../Styles/SignUpBtn.css'

const Navbar = () => {

  const [windowWidth, setWindowWidth] = useState ({windowWidth: window.innerWidth})

  const detectSize = () => {
    setWindowWidth({
      windowWidth: window.innerWidth
    })
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize)

    return() => {
      window.removeEventListener('resize', detectSize);
    }
  }), []

  return (
    <div className='w-[90%] h-[70px] md:h-[100px] lg:h-[100px] md:px-[10px] lg:pt-0 lg:px-[100px] sm:mx-[50px] flex justify-between items-center font-[Kollektif] fixed top-0 z-50'>
      {windowWidth.windowWidth < 550 ? (

        <header id="headSection" className='h-full w-full mx-2 mt-7 flex justify-between items-center z-3 '>
          <div>
            <img src="/Logo.svg" alt="" className='h-[70px]' />
          </div>
          <Hamburger />
        </header>

      ) : (

        <header id="headSection" className='h-full w-full flex justify-between items-center z-3 md:mt-[50px]'>
          <div>
            <img src="/Logo.svg" alt="" className='h-[100px] md:h-[100px]'/>
          </div>
          <div id="linksSection" className='flex justify-center items-center'>
            <Link to={'/'} className=' text-[20px] text-white m-[20px]'>Home</Link>
            <Link to={''} className=' text-[20px] text-white m-[20px]'>Events</Link>
            <Link to={''} className=' text-[20px] text-white m-[20px]'>Gallery</Link>
            <Link to={''} className=' text-[20px] text-white m-[20px]'>Contact Us</Link>
          </div>

          <Link to={'/signUp'}>
            <button>
              Sign up
              <div className="flex justify-center items-center">
                <div className="arrow"></div>
              </div>
            </button>
          </Link>
          
        </header>
      )}

    </div>
  );
      }

export default Navbar;
