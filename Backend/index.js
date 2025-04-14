// import express from "express";
// import dotenv from "dotenv";
// import cookieParser from 'cookie-parser';


// import authRoutes from "./routes/auth.route.js";
// import messageRoutes from "./routes/message.route.js";
// import userRoutes from "./routes/user.route.js";


// import connectToMongoDb from "./db/connectToMongoDb.js";


// const app = express();
// const Port = process.env.Port || 2000;

// dotenv.config();
// app.use(express.json()); //to parse the incoming requests with JSON payloads (from req.body)
// app.use(cookieParser()); //to parse cookies

// app.use("/api/auth",authRoutes);

// app.use("/api/message",messageRoutes);
// console.log("/api/message/receiver id-------/api/message/send/sender id")
// app.use("/api/users",userRoutes);
// console.log("getting all users");


// // app.get("/",(req,res) => {
// //     // root route http://localhost:2000/
// //     res.send("Hello world!...");
// // });


// app.listen(Port,() => {
//     connectToMongoDb();
//     console.log(`server running on port ${Port}!!!`)
// });




// ---------------------- index.js ----------------------
import dotenv from "dotenv";
dotenv.config(); // ✅ Load .env first

import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js";
import connectToMongoDb from "./db/connectToMongoDb.js";

const app = express();
const PORT = process.env.PORT || 2000;

// DEBUG: check if env is loading properly
console.log("✅ MONGO_DB_URI:", process.env.MONGO_DB_URI); // This must print the full URI

// ✅ Middleware
app.use(express.json());
app.use(cookieParser());

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
console.log("/api/message/receiver id-------/api/message/send/sender id");
app.use("/api/users", userRoutes);
console.log("getting all users");

// ✅ Connect to DB first, then start server
const startServer = async () => {
    await connectToMongoDb(); // Wait for DB to connect
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}!!!`);
    });
};

startServer(); // 🔥 Now DB connects first
