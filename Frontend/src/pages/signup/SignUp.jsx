import React from 'react'
import GenderCheckBox from './GenderCheckBox'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-atuo'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
            Sign Up
            <span className='text-gray-600'> ChatX</span>
        </h1>
        <form action="">
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text text-gray-300'>Full Name</span>
                </label>
                <input type="text" 
                placeholder='Enter Full Name' 
                className='w-full text-white rounded bg-black p-2 input-bordered h-10' />
            </div>

            <div>
                <label className='label p-2'>
                    <span className='text-base label-text text-gray-300'>User Name</span>
                </label>
                <input type="text" 
                placeholder='Enter UserName' 
                className='w-full text-white bg-black rounded p-2 input-bordered h-10' />
            </div>

            <div>
                <label className='label p-2'>
                    <span className='text-base label-text text-gray-300 '>Password</span>
                </label>
                <input type="password"
                placeholder='Enter Password'
                className='w-full input input-bordered  bg-black text-white p-2 h-10 rounded'
                 />
            </div>

            <div>
                <label className='label p-2'>
                    <span className='text-base label-text text-gray-300 '>Confirm Password</span>
                </label>
                <input type="password"
                placeholder='Confirm Password'
                className='w-full input input-bordered  bg-black text-white p-2 h-10 rounded'
                 />
            </div>

            <GenderCheckBox/>

            <a href="#" className='text-sm text-gray-300 hover:text-blue-600 mt-2 inline-block'>
                Already have an account ?
            </a>

            <div>
                <button className='btn bg-black text-white p-2 rounded btn-block btn-sm mt-2'>Sign Up</button>
            </div>

        </form>
        </div>
    
    </div>
  )
}

export default SignUp
  