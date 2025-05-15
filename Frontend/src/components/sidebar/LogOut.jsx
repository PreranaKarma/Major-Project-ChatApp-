import React from 'react'
import { BiLogOut } from 'react-icons/bi';
import UseLogOut from '../../hooks/UseLogOut';

const LogOut = () => {
  const {loading, logout} = UseLogOut()

  return (
    <div className='mt-auto'>
        {!loading ? (
          <BiLogOut className='w-6 h-6 text-white cursor-pointer' 
          onClick={logout}
          />
        ) : (
          <span className='loading loading-spinner'></span>
        )}
    </div>
  )
}

export default LogOut



