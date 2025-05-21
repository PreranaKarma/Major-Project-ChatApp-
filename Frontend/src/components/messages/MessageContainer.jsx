// import React from 'react'
// import Messages from './Messages'
// import MessageInput from './MessageInput'
// import { TiMessages } from 'react-icons/ti'
// import useConversation from '../../zustand/UseConversation'
// import { useEffect } from 'react'

// const MessageContainer = () => {
//   // const noChatSelected = false ;

//   const {selectedConversation, setSelectedConversation} = useConversation()

//   useEffect(() => {
//     // cleanup function (unmount)
//     return () => setSelectedConversation(null)
//   }, [setSelectedConversation])

//   return (
//     <div className='w-[450px] flex flex-col'>
//        { !selectedConversation ? (
//         <NoChatSelected/> 
//       ):(
//          <>
//          <div className='px-4 py-2 mb-2' style={{ backgroundColor: '#d7ced0' }}>
//              <span className='label-text text-gray-500'>To:</span>{" "}
//              <span className='text-gray-200 font-bold'>{selectedConversation.fullname}</span>
//          </div>
//          <Messages />
//          <MessageInput />
//          </>
//        )}
//     </div>
//   )
// }

// export default MessageContainer ;



// const NoChatSelected = () => {
//   return (
//     <div className='flex items-center justify-center w-full h-full'>
//       <div className='px-4 text-center sm:text-lg md:text-xl text-gray-300 font-semibold flex flex-col items-center gap-2'>
//         <p>Welcome 👋👋 </p>
//         <p>Select a chat to start messaging</p>
//         <TiMessages className='text-3xl md:text-6xl text-center' />
//       </div>
//     </div>
//   )
// }




import React, { useEffect } from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';
import { TiMessages } from 'react-icons/ti';
import useConversation from '../../zustand/UseConversation';

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    // Cleanup on unmount
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="w-[450px] flex flex-col h-full">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="px-4 py-2 mb-2" style={{ backgroundColor: '#d7ced0' }}>
            <span className="label-text text-gray-500">To:</span>{" "}
            <span className="text-gray-700 font-bold">
              {selectedConversation.fullname}
            </span>
          </div>

          {/* Message list wrapper */}
          <div className="flex-1 overflow-y-auto px-2">
            <Messages />
          </div>

          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-300 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋👋 </p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};




