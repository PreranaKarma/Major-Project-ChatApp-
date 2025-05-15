import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import UseLogin from '../../hooks/UseLogin';

const LogIn = () => {

  const [username , setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {loading, login} = UseLogin()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login (username, password)
  }

  return (
    <div className='flex flex-col items-center justify-center minw-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
            LogIn
            <span className='text-blue'> ChatX</span>
        </h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text text-gray-300 '>User Name</span>
                </label>
                <input type="text"
                placeholder='Enter UserName' 
                className='w-full input input-bordered rounded p-2 h-10 bg-black text-white rounded'
                value={username}
                onChange={(e) => setUsername(e.target.value)} 
                />
            </div>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text text-gray-300 '>Password</span>
                </label>
                <input type="password"
                placeholder='Enter Password'
                className='w-full input input-bordered rounded bg-black text-white p-2 h-10 rounded'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                 />
            </div>
            <Link to='/signup' className='text-sm text-gray-300 hover:text-blue-600 mt-2 inline-block'>
                Don't have an account ?
            </Link>
            <div>
                <button className='btn bg-black text-white p-2 rounded btn-block btn-sm mt-2'
                disabled={loading}
                >
                 {loading ? <span className='loading loading-spinner'></span>: "Login"}
                </button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default LogIn

