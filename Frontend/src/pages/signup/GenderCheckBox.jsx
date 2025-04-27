import React from 'react'

const GenderCheckBox = ({onCheckBoxChange, selectedGender}) => {
  return (
    <div className='flex'>
        <div className='form-control  bg-transparent border-none'>
            <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
                <span className='label-text text-gray-300  mr-2'>Male</span>
                <input type="checkbox"
            className='w-5 h-5 checkbox bg-transparent cursor-pointer'
            checked={selectedGender === "male"}
            onChange={() => onCheckBoxChange("male")}
            />
            </label>
        </div>
        <div className='form-control  bg-transparent border-none'>
        <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
                <span className='label-text text-gray-300  mr-2 ml-2'>Female</span>
                <input type="checkbox"
            className='w-5 h-5 bg-transparent checkbox cursor-pointer'
            checked={selectedGender === "female"}
            onChange={() => onCheckBoxChange("female")}
            />
            </label>
        </div>
        
    </div>
  )
}

export default GenderCheckBox


// import React from 'react';

// const GenderCheckBox = ({ gender, setInputs }) => {

//   const handleGenderChange = (selectedGender) => {
//     setInputs((prev) => ({ ...prev, gender: selectedGender }));
//   };

//   return (
//     <div className='flex'>
//       <div className='form-control bg-transparent border-none'>
//         <label className='label gap-2 cursor-pointer'>
//           <span className='label-text text-gray-300 mr-2'>Male</span>
//           <input 
//             type="checkbox"
//             checked={gender === 'male'}
//             onChange={() => handleGenderChange('male')}
//             className='w-5 h-5 bg-transparent cursor-pointer'
//           />
//         </label>
//       </div>

//       <div className='form-control bg-transparent border-none'>
//         <label className='label gap-2 cursor-pointer'>
//           <span className='label-text text-gray-300 mr-2 ml-2'>Female</span>
//           <input 
//             type="checkbox"
//             checked={gender === 'female'}
//             onChange={() => handleGenderChange('female')}
//             className='w-5 h-5 bg-transparent cursor-pointer'
//           />
//         </label>
//       </div>
//     </div>
//   );
// };

// export default GenderCheckBox;
