import { useState } from "react";
import {Link} from 'react-router-dom'

import "../Styles/SignUp.css";


function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password, name)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ..
      });
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    // Reset the form fields after submission if needed
    setName("")
    setEmail("");
    setPassword("");
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-slate-100">
      <div className="flex h-full w-full mx-auto overflow-hidden shadow-lg bg-gray-800 ">

        <div className="hidden bg-cover bg-no-repeat lg:block lg:w-1/2">
          <img src="/bgImg1.jpg" className="object-cover w-full h-full"/>
        </div>

        <div className="w-full h-screen lg:h-screen lg:w-1/2 flex justify-center items-center">
        <form
          className="w-full px-[50px] md:px-[200px] lg:px-[60px] xl:px-[150px] py-8"
          onSubmit={handleSubmit}
        >
          <div className="md:h-[150px] flex justify-center mx-auto">
            <img src="/Logo.svg" className="h-full"/>
          </div>
          <p className="welcome mt-3 text-xl text-center text-gray-200">
            Welcome
          </p>
          <a
            href="#"
            className="flex items-center justify-center mt-4 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 text-gray-200 "
          >
            <div className="px-4 py-2">
              <img src="/public/google.svg" className="h-6" alt="" />
            </div>
            <span className="w-5/6 px-4 py-3 font-medium text-xl text-center">
              Sign in with Google
            </span>
          </a>
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4" />
            <p
              
              className="text-xs text-center uppercase text-gray-400"
            >
              or login with email
            </p>
            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4" />
          </div>
          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-200"
              htmlFor="LoggingEmailAddress"
            >
              Name
            </label>
            <input
              id="LoggingEmailAddress"
              className="block w-full px-4 py-2 text-slate-50 border rounded-lg bg-gray-800 border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-200"
              htmlFor="LoggingEmailAddress"
            >
              Email Address
            </label>
            <input
              id="LoggingEmailAddress"
              className="block w-full px-4 py-2 text-slate-50 border rounded-lg bg-gray-800 border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <label
                className="block mb-2 text-sm font-medium text-gray-200"
                htmlFor="loggingPassword"
              >
                Password
              </label>

              {/* TODO: Make a forgot password page and handle that with backend and connect the route */}
              <Link to={'/forgotPassword'}>
              <a
                className="block mb-2 text-xs text-gray-300 hover:underline"
              >
                Forget Password?
              </a>
              </Link>
            </div>
            <input
              id="loggingPassword"
              className="block w-full px-4 py-2 border rounded-lg bg-gray-800 text-slate-50 border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full flex justify-center items-center px-6 py-3 mb-3 text-xl font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            >
              Sign In
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
