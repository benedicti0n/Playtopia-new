import React from 'react'
import Countdown from './Countdown'


const Aboutus = () => {
  return (
    <div className='w-full h-screen bg-[url("/bgImg1.jpg")] bg-cover bg-center flex justify-end items-center flex-col px-[50-px] lg:pt-0 lg:px-[100px] relative'>
       <video src="/bg3.mp4" autoPlay loop muted className="absolute top-0 left-0 object-cover w-full h-full -z-10"/>
        
          <div className='w-full absolute top-[130px] md:top-[200px] lg:top-[130px] px-0'>
          <Countdown />
          </div>
          <div className='text-start lg:text-center bg-transparent md:w-[80%] lg:w-[80%]'>
            <h1 className='font-[Valorax] text-5xl md:text-7xl lg:text-7xl text-white my-[20px] md:my-[50px] lg:my-[50px] mx-[20px] md:mx-[10px] '>About <br /> Us</h1>
              <p className='font-[Kollektif] text-md md:text-2xl lg:text-2xl text-white mb-[50px] md:mb-[100px] lg:mb-[100px]  mx-[20px] md:mx-[10px] '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis quam itaque placeat optio corrupti iste. Nobis distinctio repellat molestiae aliquid esse quasi. Rem nulla quos omnis cum, ad voluptatem expedita. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint neque fuga eaque eligendi assumenda ab explicabo aliquid, quos adipisci itaque numquam quasi reiciendis veritatis alias nulla? Autem,</p>
          </div>



    </div>
  )
}

export default Aboutus