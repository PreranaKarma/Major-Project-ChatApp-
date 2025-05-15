import React from 'react'
import Message from './Message'
import UseGetMessage from '../../hooks/UseGetMessage'

const Messages = () => {
  const {messages, loading} = UseGetMessage();
  console.log("messages:",messages);
  return (
    <div className='px-5 flex-1 overflow-auto'>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
    </div>
  )
}

export default Messages