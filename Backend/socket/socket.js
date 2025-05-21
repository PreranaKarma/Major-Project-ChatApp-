// import { Server } from "socket.io";
// import http from 'http' ;
// import express from 'express';

// const app = express();

// const server = http.createServer(app);
// const io = new Server(server,{
//     cors:{
//         origin:["http://localhost:3000"],
//         methods:["GET","POST"]
//     }
// })


// export const getReceiverSocketId = (receiverId) => {
//     return userSocketMap[receiverId];
// }

// const userSocketMap = {}; //{userId: socketId}

// io.on('connection',(socket) => {
//     console.log("a user connected", socket.id)

//     const userId = socket.handshake.query.userId;
//     if(userId != "undefined") userSocketMap[userId] = socket.id;

//     //io.emit() is used to send events to all the connected clients
//     io.emit("getOnlineUseres",Object.keys(userSocketMap));


//     // socket.on() is used to listen to the events, can be used both on client and server side
//     socket.on("disconnect",()=>{
//         console.log("user disconnected",socket.id)
//         delete userSocketMap[userId];
//         io.emit("getOnlineUseres",Object.keys(userSocketMap));  
//     })
// })


// export {app,io,server};

// ---------------------- socket.js ----------------------
import { Server } from "socket.io";
import http from 'http';
import express from 'express';

const app = express();
const server = http.createServer(app);

// ✅ In-memory mapping of userId to socketId
const userSocketMap = {}; // { userId: socketId }

// ✅ Helper to get receiver's socket ID
export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
};

// ✅ Setup socket server with proper CORS
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000"], // 🔧 FIXED HERE
        methods: ["GET", "POST"],
        credentials: true
    }
});

// ✅ Socket connection handler
io.on('connection', (socket) => {
    console.log("🟢 A user connected:", socket.id);

    const userId = socket.handshake.query.userId;
    if (userId && userId !== "undefined") {
        userSocketMap[userId] = socket.id;
    }

    // 🔄 Notify all clients about current online users
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    // ❌ Handle disconnect
    socket.on("disconnect", () => {
        console.log("🔴 A user disconnected:", socket.id);
        if (userId) {
            delete userSocketMap[userId];
        }
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
});

// ✅ Export required modules
export { app, io, server };
