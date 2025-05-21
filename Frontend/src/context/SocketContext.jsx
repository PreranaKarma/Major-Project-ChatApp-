// import { createContext, useState, useEffect, useContext } from "react";
// import { useAuthContext } from "./AuthContext";
// import io from "socket.io-client";

// export const SocketContext = createContext();

// export const useSocketContext = () => {
//     return useContext(SocketContext);
// }

// export const SocketContextProvider = ({ children }) => {
//     const [socket, setSocket] = useState(null);
//     const [onlineUsers, setOnlineUsers] = useState([]);
//     const {authUser} = useAuthContext();

//     useEffect(() => {
//         if(authUser) {
//             const socket = io("http://localhost:5000",{
//                 query:{
//                     userId: authUser._id,
//                 }
//             });

//             setSocket(socket);

//     // socket.on() is used to listen to the events, can be used both on client and server side
//             socket.on("getOnlineUsers", (users) => {
//                 setOnlineUsers(users);
//             })

//             return () => socket.close();
//         } else {
//             if (socket) {
//                 socket.close();
//                 setSocket(null)
//             }
//         }
//     }, [authUser])
    
//     return ( 
//         <SocketContext.Provider value={{socket,onlineUsers}}>
//             {children}
//         </SocketContext.Provider>
//     )
// }



// ---------------------- SocketContext.js ----------------------
import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

// Create context
export const SocketContext = createContext();

// Custom hook to use context
export const useSocketContext = () => useContext(SocketContext);

// Context Provider component
export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { authUser } = useAuthContext();

    useEffect(() => {
        // If user is logged in, connect to socket
        if (authUser) {
            const newSocket = io("http://localhost:5000", {
                query: {
                    userId: authUser._id
                },
                withCredentials: true, // Optional: if backend uses cookies
                transports: ["websocket"] // Ensures reliable connection
            });

            setSocket(newSocket);

            newSocket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users);
            });

            // Cleanup on unmount
            return () => {
                newSocket.disconnect();
                setSocket(null);
            };
        } else {
            // If logged out, close socket
            if (socket) {
                socket.disconnect();
                setSocket(null);
            }
        }
    }, [authUser]);

    return (
        <SocketContext.Provider value={{ socket, onlineUsers }}>
            {children}
        </SocketContext.Provider>
    );
};




