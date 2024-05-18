import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setSignInForm] = useState(true)
 
    const toggleSignInForm =()=>{
        setSignInForm(!isSignInForm )
    }

    return (
        <div className="z-0">
            <Header />

            <div className='login_container flex justify-center items-center'>

                <form className='w-[400px] h-fit p-12 flex justify-center items-start flex-col bg-black bg-opacity-70'>
                    <h1 className='text-4xl font-bold text-white mb-8'>{isSignInForm ? "Sign In" : "Signup"}</h1>

                    {!isSignInForm && <input type='text' placeholder='Full Name' className='w-full bg-black border border-white border-opacity-30 rounded-md p-3 bg-opacity-50 mb-5' /> }


                    <input type='email' placeholder='Email Address' className='w-full bg-black border border-white border-opacity-30 rounded-md p-3 bg-opacity-50 mb-5' />

                    <input type='password' placeholder='Password' className='w-full bg-black border border-white border-opacity-30 rounded-md p-3 bg-opacity-50 mb-5' />

                    <button className='w-full py-2 bg-red-700 text-white rounded-md'>{isSignInForm ? "Sign In" : "Signup"}</button>

                    <p className='text-[#bbbbbb] mt-2 cursor-pointer text-[14px] font-normal hover:text-white' onClick={toggleSignInForm}>{isSignInForm ? "New To Netflix? Sign Up Now" : "Already Registered? Sign In Now"}</p>

                </form>


            </div>



        </div>
    )
}

export default Login
