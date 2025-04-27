import React from 'react'
import { Link } from 'react-router-dom'

const LogIn = () => {
  return (
    <div className='flex flex-col items-center justify-center minw-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
            LogIn
            <span className='text-gray-600'> ChatX</span>
        </h1>
        <form action="">
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text text-gray-300 '>User Name</span>
                </label>
                <input type="text"
                placeholder='Enter UserName' 
                className='w-full input input-bordered rounded p-2 h-10 bg-black text-white rounded' 
                />
            </div>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text text-gray-300 '>Password</span>
                </label>
                <input type="password"
                placeholder='Enter Password'
                className='w-full input input-bordered rounded bg-black text-white p-2 h-10 rounded'
                 />
            </div>
            <Link to='/signup' className='text-sm text-gray-300 hover:text-blue-600 mt-2 inline-block'>
                Don't have an account ?
            </Link>
            <div>
                <button className='btn bg-black text-white p-2 rounded btn-block btn-sm mt-2'>LogIn</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default LogIn
