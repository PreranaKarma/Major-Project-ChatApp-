// import React from 'react'
// import SearchInput from './SearchInput'
// import Conversations from './Conversations'
// import LogOut from './LogOut'

// const SideBar = () => {
//   return (
//     <div className="flex flex-col h-screen border-r border-slate-500">
//       <div className="p-4">
//           <SearchInput />
//       </div>

//       <div>
//           <div className="flex-1 overflow-y-auto px-4">
//             <Conversations />
//           </div>

//           <div>
//             <LogOut />
//           </div>
//       </div>      
//     </div>
//   )
// }
// export default SideBar



import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogOut from './LogOut'

const SideBar = () => {
  return (
    <div className="flex flex-col border-r border-slate-500">
      {/* Top: Search Input */}
      <div className="p-4">
        <SearchInput />
      </div>

      {/* Middle: Conversations */}
      <div className="flex-1 overflow-y-auto px-4">
        <Conversations />
      </div>

      {/* Bottom: Logout button */}
      <div className="p-4">
        <LogOut />
      </div>
    </div>
  )
}

export default SideBar

