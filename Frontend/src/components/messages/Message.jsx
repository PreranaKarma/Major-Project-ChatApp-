// import { useAuthContext } from '../../context/AuthContext'
// import { ExtractTime } from '../../utils/ExtractTime';
// import useConversation from '../../zustand/UseConversation';

// const Message = ({message}) => {
//   const {authUser} = useAuthContext();
//   const {selectedConversation} = useConversation();
//   const fromMe = message.senderId === authUser._id;
//   // const formattedTime = ExtractTime(message.createdAt);
//   const chatClassName = fromMe ? 'chat-end' : 'chat-start';
//   const profilePic = fromMe ? authUser.profilePic: selectedConversation?.profilePic;
//   const bubbleBgColor = fromMe ? 'bg-blue-500' : "";
//     const timeAlign = fromMe ? 'text-right' : 'text-left';

//   // Format the timestamp
//   const formattedTime = new Date(message.createdAt).toLocaleTimeString([], {
//     hour: '2-digit',
//     minute: '2-digit',
//   });


//   return (
//     <div className={`chat ${chatClassName}`}>
//       <div className="chat-image avatar">
//       <div className="rounded-full w-10"
//        style={{
//         width: "48px", height: "48px",
//         // marginLeft:"285px", 
//         // marginRight:"-43px" 
//         }}
//         >
//           <img src={profilePic} alt="Tailwind css chat bubble component"/>
//         </div>
//       </div>
//       <div className={`chat-bubble text-white ${bubbleBgColor}`}>{message.message}</div>
//       {/* <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center`}>{formattedTime}</div> */}
//       <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center ${timeAlign}`}>{formattedTime}</div>
//     </div>
//   )
// }
// export default Message








import { useAuthContext } from '../../context/AuthContext';
import { ExtractTime } from '../../utils/ExtractTime';
import useConversation from '../../zustand/UseConversation';

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic || '/default-profile.png';

  const bubbleBgColor = fromMe ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black';
  const timeAlign = fromMe ? 'text-right' : 'text-left';

  const formattedTime = new Date(message.createdAt).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className={`chat ${chatClassName}`}>
      <div
        className="rounded-full w-10"
        style={{ width: '48px', height: '48px' }}
      >
        <img src={profilePic} alt="Tailwind css chat bubble component" />
      </div>

      <div className={`chat-bubble text-white pb-2 ${bubbleBgColor}`}>
        {message.message}
      </div>

      <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center ${timeAlign}`}>
        {formattedTime}
      </div>
    </div>



  );
};

export default Message;






