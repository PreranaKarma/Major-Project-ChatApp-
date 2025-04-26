// import React from 'react'

// const Message = () => {
//   return (
//     <div className='chat chat-end'>
//         <div className='chat-image avatar'>
//           <div className='w-10 rounded-full'> 
//             <img src={
//               "https://cdn0.iconfinder.com/data/icons/communication-line-10/24/            account_profile_user_contact_person_avatar_placeholder-512.png"
//             }
//             alt="Tailwind css chat bubble component" />
//           </div>
//         </div>
//         <div className={`chat-bubble text-white bg-blue-500`}>
//             Hey! What's upp ?
//         </div>
//         <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center`}>
//            12:42
//         </div>
//     </div>
//   )
// }

// export default Message


import React from 'react'

const Message = () => {
  return (
    <div className="chat chat-end w-10">
      <div className="chat-image w-10 h-10 avatar">
      <div className="rounded-full overflow-hidden" style={{ width: "48px", height: "48px" }}>
          <img
            src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
            alt="Tailwind css chat bubble component"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="chat-bubble text-white bg-blue-500">
        Hey! What's upp ?
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        12:42
      </div>
    </div>
  )
}

export default Message

