// import React from 'react'

// const Conversation = () => {
//   return (
//     <>
//     <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'> 
//        <div className='avatar online'>
//           <div className='w-12 h-12 rounded-full'>
//             <img src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png" alt="user avatar" />
//           </div>  
//         </div>  
//         <div className='flex flex-col flex-1'>
//             <div className='flex gap-3 justify-between'>
//                 <p className='font-bold text-gray-200'>John Deo</p>
//                 <span className='text-xl'>🙄</span>
//             </div>
//             </div>   
//     </div>
//     <div className='divider my-0 py-0 h-1' />
//     </>
//   )
// }

// export default Conversation



import React from 'react'

const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer"> 
        <div className="rounded-circle overflow-hidden" style={{ width: "48px", height: "48px" }}>
          <img
            src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
            alt="user avatar"
            className="object-cover w-full h-full"
          />
        </div>  
        <div className="flex flex-col flex-1">
          <div className="flex justify-between text-gray-300 items-center gap-3">
            <p className="fw-bold text-gray-100 mb-0">John Deo</p>
            <span className="text-xl">🙄</span>
          </div>
        </div>   
      </div>
      <hr className="my-1" />
    </>
  )
}

export default Conversation










// import React from 'react'
// const Conversation = () => {
//   return (
//     <>
//       <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'> 
//         <div className='w-12 h-12 rounded-full overflow-hidden'>
//           <img
//             src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
//             alt="user avatar"
//             className="object-cover w-full h-full"
//           />
//         </div>  
//         <div className='flex flex-col flex-1'>
//           <div className='flex gap-3 justify-between'>
//             <p className='font-bold text-gray-200'>John Deo</p>
//             <span className='text-xl'>🙄</span>
//           </div>
//         </div>   
//       </div>
//       <div className='divider my-0 py-0 h-1' />
//     </>
//   )
// }

// export default Conversation