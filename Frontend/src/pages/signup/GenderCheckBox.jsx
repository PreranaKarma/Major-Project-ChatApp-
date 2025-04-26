import React from 'react'

const GenderCheckBox = () => {
  return (
    <div className='flex'>
        <div className='form-control  bg-transparent border-none'>
            <label className='label gap-2 cursor-pointer'>
                <span className='label-text text-gray-300  mr-2'>Male</span>
                <input type="checkbox"
            className='w-5 h-5 bg-transparent cursor-pointer'/>
            </label>
        </div>
        <div className='form-control  bg-transparent border-none'>
        <label className='label gap-2 cursor-pointer'>
                <span className='label-text text-gray-300  mr-2 ml-2'>Female</span>
                <input type="checkbox"
            className='w-5 h-5 bg-transparent cursor-pointer'/>
            </label>
        </div>
        
    </div>
  )
}

export default GenderCheckBox
