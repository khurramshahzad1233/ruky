"use client";
import React, { useState, Fragment } from 'react';

const page = () => {
  const [isOpen, setIsOpen] = useState(true);

  const togglePopup = () => {
    console.log("helloe")
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      {/* <button
        className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={togglePopup}
      >
        Toggle
      </button> */}
      <div
        className={`fixed inset-0 bg-black opacity-50 ${isOpen ? 'block' : 'hidden'}`}
        onClick={togglePopup}
      ></div>
      <div className='flex justify-center items-center'>



        <div className={`relative bg-white rounded-md  ${isOpen ? 'block' : 'hidden'}`} >
         
              <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <h1 className="mb-8 text-3xl text-center">Login</h1>
                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="fullname"
                  placeholder="Full Name" />

                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="email"
                  placeholder="Email" />

                <input
                  type="password"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="password"
                  placeholder="Password" />
                <input
                  type="password"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="confirm_password"
                  placeholder="Confirm Password" />

                <button
                  type="submit"
                  className="bg-primary w-full rounded-md"
                >Login</button>


              </div>

              <div className="text-grey-dark mt-6">
                Don' have an account?
                <a className="no-underline border-b border-blue text-blue" href="/signup">
                  Sign Up
                </a>.
              </div>
           



          <button
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={togglePopup}
          >
            Close
          </button>
        </div>

      </div>


    </Fragment>


  );
};

export default page;

