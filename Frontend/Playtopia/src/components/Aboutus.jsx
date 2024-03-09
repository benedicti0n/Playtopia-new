import React from 'react'
import Countdown from './Countdown'

const Aboutus = () => {
  return (
    <div className='w-full h-screen bg-[url("/bgImg1.jpg")] bg-cover bg-center flex justify-center items-center flex-col px-[50-px] lg:pt-0 lg:px-[100px] lg:pb-[40px] '>
        <Countdown/>

        <div className='mt-[20px] text-center'>
          <h1 className='font-[Valorax] text-3xl text-white my-[40px] lg:text-9xl '>About Us</h1>
          <p className='font-[Kollektif] text-md text-white lg:text-4xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis quam itaque placeat optio corrupti iste. Nobis distinctio repellat molestiae aliquid esse quasi. Rem nulla quos omnis cum, ad voluptatem expedita. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint neque fuga eaque eligendi assumenda ab explicabo aliquid, quos adipisci itaque numquam quasi reiciendis veritatis alias nulla? Autem,</p>
        </div>

    </div>
  )
}

export default Aboutus