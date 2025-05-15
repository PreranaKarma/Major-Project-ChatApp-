import React from 'react'
import Conversation from './Conversation'
import UseGetConversations from '../../hooks/UseGetConversations'
import { getRandomEmoji } from '../../utils/emojis';

const Conversations = () => {
  const {loading, conversations} = UseGetConversations();
  console.log("CONVERSATIONS:", conversations)
  return (

    <div className="flex flex-col space-y-2 scrollbar-thin scrollbar-thumb-sky-500 scrollbar-track-transparent">
  {conversations.map((conversation, idx) => (
    <Conversation 
      key={conversation._id}
      conversation={conversation}
      emoji={getRandomEmoji()}
      lastIdx={idx === conversations.length - 1}
    />
  ))}
  {loading && <span className="loading loading-spinner mx-auto"></span>}
</div>


// {/* <div className="py-2 flex flex-col overflow-y-auto max-h-[480px] scrollbar-thin scrollbar-thumb-sky-500 scrollbar-track-transparent"> 
//   {conversations.map((conversation, idx) => (
//     <Conversation 
//       key={conversation._id}
//       conversation={conversation}
//       emoji={getRandomEmoji()}
//       lastIdx={idx === conversations.length - 1}
//     />
//   ))}
//   {loading && <span className="loading loading-spinner mx-auto"></span>}
// </div> */}
   
  )
}
export default Conversations
