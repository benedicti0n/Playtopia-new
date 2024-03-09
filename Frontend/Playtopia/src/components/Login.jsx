import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {auth} from '../Firebase/config.js'

const Login = () => {

  console.log(auth);

  return (
    <div className='flex flex-col items-center justify-center text-center h-screen'>
    <div className='border-2 border-sky-300 p-10 rounded-lg'>
    <h1 className='text-2xl'>Login Page</h1>
    <form  className='flex flex-col my-3'>
      <input
      type="email"
      placeholder='Enter Email'
      required
      // value={email}
      onChange={(e) => setEmail(e.target.value)}
      className='my-3'
      />

      <input
      type='password'
      placeholder='Enter Password'
      required
      // value={password}
      onChange={(e) => setPassword(e.target.value)}
      className='my-3'
      />

      <button type='submit' className='my-2 cursor-pointer bg-slate-300 rounded-full'>Login</button>
    </form>
    <p>Dont have an account? <Link to='/signUp' className='text-blue-500'>Register</Link> </p>
      </div>
  </div>
  )
}

export default Login
