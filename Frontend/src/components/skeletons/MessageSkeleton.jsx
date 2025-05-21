// import React from 'react'
// const MessageSkeleton = () => {
//   return (
//     <>
//         <div className='flex gap-3 items-center'>
//             <div className="skeleton w-10 h-10 rounded-full shrink-0"></div>
//             <div className="flex flex-col gap-1">
//                 <div className="skeleton h-4 w-40"></div>
//                 <div className="skeleton h-4 w-40"></div>
//             </div>
//         </div>
//         <div className="flex gap-3 items-center justify-end">
//             <div className="flex flex-col gap-1">
//                 <div className="skeleton h-4 w-40"></div>
//             </div>
//             <div className="skeleton w-10 h-10 rounded-full shrink-0"></div>
//         </div>
//     </>
//   )
// }
// export default MessageSkeleton


import React from 'react';

const MessageSkeleton = () => {
  return (
    <>
      <div className='flex gap-3 items-center animate-pulse mb-4'>
        <div className="skeleton bg-gray-200 w-10 h-10 rounded-full"></div>
        <div className="flex flex-col gap-2">
          <div className="skeleton h-4 w-40 rounded"></div>
          <div className="skeleton h-4 w-32 rounded"></div>
        </div>
      </div>

      <div className="flex gap-3 items-center justify-end animate-pulse mb-4">
        <div className="flex flex-col gap-2">
          <div className="skeleton h-4 w-40 rounded"></div>
        </div>
        <div className="skeleton bg-gray-200 w-10 h-10 rounded-full"></div>
      </div>
    </>
  );
};

export default MessageSkeleton;

