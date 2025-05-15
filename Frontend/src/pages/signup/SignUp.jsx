import React, { useState } from 'react';
import GenderCheckBox from './GenderCheckBox';
import { Link } from 'react-router-dom';
import UseSignup from '../../hooks/UseSignup';

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullname: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: '',
    });

    const { loading, signup } = UseSignup();

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        await signup(inputs);
    }
    

    const handleCheckBoxChange = (gender) => {
        setInputs({...inputs, gender})
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Sign Up
                    <span className='text-blue'> ChatX</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-gray-300'>Full Name</span>
                        </label>
                        <input type="text" 
                        placeholder='Enter Full Name' 
                        className='w-full text-white rounded bg-black p-2 input-bordered h-10'
                        value={inputs.fullname}
                        onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-gray-300'>User Name</span>
                        </label>
                        <input type="text" 
                        placeholder='Enter UserName' 
                        className='w-full text-white bg-black rounded p-2 input-bordered h-10'
                        value={inputs.username}
                        onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-gray-300 '>Password</span>
                        </label>
                        <input type="password"
                        placeholder='Enter Password'
                        className='w-full input input-bordered bg-black text-white p-2 h-10 rounded'
                        value={inputs.password}
                        onChange={(e) => setInputs({ ...inputs, password: e.target.value })} 
                        />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-gray-300 '>Confirm Password</span>
                        </label>
                        <input type="password"
                        placeholder='Confirm Password'
                        className='w-full input input-bordered bg-black text-white p-2 h-10 rounded'
                        value={inputs.confirmPassword}
                        onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                    </div>

                    <GenderCheckBox onCheckBoxChange = {handleCheckBoxChange} selectedGender={inputs.gender} />

                    <Link to='/login' className='text-sm text-gray-300 hover:text-blue-600 mt-2 inline-block'>
                        Already have an account?
                    </Link>

                    <div>
                        <button type="submit" className='btn bg-black text-white p-2 rounded btn-block btn-sm mt-2'
                        disabled={loading}
                        >
                            {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
