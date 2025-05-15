import React from 'react';
import useConversation from '../../zustand/UseConversation';

const Conversation = ({ conversation, lastIdx, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  // Check if this conversation is the selected one
  const isSelected = selectedConversation?._id === conversation._id;

  const handleClick = () => {
    // Set the clicked conversation as the selected one
    setSelectedConversation(conversation);
  };

  return (
    <>
      <div
        className={`flex gap-2 items-center transition-colors duration-200 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-sky-500" : ""}`}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0369a1'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        onClick={handleClick}
      >
        <div className="rounded-circle overflow-hidden" style={{ width: "48px", height: "48px" }}>
          <img
            src={conversation.profilePic}
            alt="user avatar"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between text-gray-300 items-center gap-3">
            <p className="fw-bold text-gray-100 mb-0">{conversation.fullname}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>
      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;



