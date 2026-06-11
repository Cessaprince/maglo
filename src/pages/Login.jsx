import React from 'react'

import loginImage from "../assets/images/login-img.jpg";
import logoImage from "../assets/images/logo.jpg";

const Login = () => {
  return (
    <div>
      <div className="auth-grid grid h-screen grid-cols-2 overflow-hidden">

        {/* left side */}
        <div className="auth-left flex h-full flex-col bg-white py-10 px-[100px]">
          <div className="auth-logo flex gap-2 items-center">
            <div className="auth-logo-img overflow-hidden h-9 rounded-xl">
              <img src={ logoImage } alt="" className='object-cover h-full w-full'/>
            </div>

            <p className='font-bold'>Maglo.</p>
          </div>

          <div className="auth-form mt-[65px]">
            <h1 className="title text-2xl font-medium mb-[9px]">Welcome back</h1>
            <p className='text-sm font-normal text-gray-500'>Welcome back! Please, enter your details.</p>

            <form action="" className='flex flex-col gap-5 mt-[25px] w-[400px]'>
              <div className="auth-input flex flex-col gap-1">
                <label htmlFor="email" className='text-xs font-normal'>Email</label>
                <input type="email" name="email" id="email" placeholder="Enter your email" className='w-full border-solid border-1 p-[7px] text-sm rounded-[5px] border-gray-300 outline-none'/>
              </div>

              <div className="auth-input flex flex-col gap-1 w-[400px]">
                <label htmlFor="password" className='text-xs font-normal'>Password</label>
                <input type="password" name="password" id="password" placeholder="●●●●●●●" className='w-full border-solid border-1 p-[7px] text-sm rounded-[5px] border-gray-300 outline-none'/>
              </div>

              <div className="forgotPwd flex items-center justify-between">
                <div className="check flex gap-2">
                  <input type="checkbox" name="check" id="check" />
                  <p className='text-xs font-normal'>Remember for 30 days</p>
                </div>

                <a href="" className='text-xs font-normal hover:text-red-400'>Forgot password?</a>
              </div>

              <button className='sign-in-btn w-full border-solid border-1 p-[10px] text-sm rounded-[5px] border-gray-300 outline-none bg-lime-400 hover:bg-lime-600 font-semibold'>Sign in</button>
              <button className='google-btn w-full border-solid border-1 p-[10px] rounded-[5px] border-gray-300 outline-none hover:bg-gray-400 text-sm'>
                <i className="devicon-google-plain colored px-2"></i>
                <span className='text-black-300 font-normal'>Sign in with google</span>
              </button>

              <div className="flex sign-up items-center justify-center gap-2 text-sm">
                  <span className='text-gray-500 text-sm'>Don't have an account?</span><a className='font-semibold hover:text-red-400 cursor-pointer'>Sign up for free</a>
              </div>
            </form>

          </div>
        </div>
        
        {/* right side */}
        <div className="auth-right h-full w-full min-h-0 ohttp://localhost:5173/src/assets/images/login-img.jpgverflow-hidden">
          <img src={loginImage} alt="" className='block h-full w-full object-cover' />
        </div>
      </div>
    </div>
  )
}

export default Login