import React from 'react'
import { IoSearchSharp } from 'react-icons/io5'

const SearchInput = () => {
  return (
    <form action="" className='flex items-center gap-2'>
        <input type="text"
        placeholder='Search....'
        className='input input-bordered p-2 mt-2 bg-black text-white rounded-full' />
        <button type='submit' className='btn btn-circle rounded-full bg-sky-500 text-white'>
          <IoSearchSharp className='w-6 h-6 outline-none' />
        </button>
    </form>
  )
}

export default SearchInput
