import { BsSend } from "react-icons/bs";
import React, { useState } from 'react'
import UseSendMessage from "../../hooks/UseSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const {loading, sendMessage} = UseSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
    setMessage("");
  }

  return (
    <form className='px-4 my-3' onSubmit={handleSubmit}>
      <div className='w-full flex items-center gap-2'>
       <input
        type="text"
        className='border text-sm rounded-lg w-full pl-3 bg-gray-700 border-gray-600 text-gray'
        style={{paddingLeft:"10px"}}
        placeholder='Send a message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        />

        <button
          type='submit'
          // className='text-white text-xl px-4 py-3 hover:text-blue-400 bg-blue-600 rounded-lg'
          className="absolute inset-y-0 end-0 flex items-center pe-3"
          >
          {loading ? <div className="loading loading-spinner"></div> : <BsSend/>}
        </button>
      </div>
    </form>
  )
}

export default MessageInput;

