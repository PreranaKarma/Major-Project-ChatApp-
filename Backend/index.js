// // ---------------------- index.js ----------------------
// import dotenv from "dotenv";
// dotenv.config(); // ✅ Load .env first

// import express from "express";
// import cookieParser from "cookie-parser";
// import authRoutes from "./routes/auth.route.js";
// import messageRoutes from "./routes/message.route.js";
// import userRoutes from "./routes/user.route.js";
// import connectToMongoDb from "./db/connectToMongoDb.js";

// const app = express();
// const PORT = process.env.PORT || 2000;

// // DEBUG: check if env is loading properly
// console.log("✅ MONGO_DB_URI:", process.env.MONGO_DB_URI); // This must print the full URI

// // ✅ Middleware
// app.use(express.json());
// app.use(cookieParser());

// // ✅ Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/message", messageRoutes);
// console.log("/api/message/receiver id-------/api/message/send/sender id");
// app.use("/api/users", userRoutes);
// console.log("getting all users");

// // ✅ Connect to DB first, then start server
// const startServer = async () => {
//     await connectToMongoDb(); // Wait for DB to connect
//     app.listen(PORT, () => {
//         console.log(`🚀 Server running on port ${PORT}!!!`);
//     });
// };

// startServer(); // 🔥 Now DB connects first



// ---------------------- index.js ----------------------
import dotenv from "dotenv";
dotenv.config(); // ✅ Load .env first

import express from "express";
import cookieParser from "cookie-parser";

import connectToMongoDb from "./db/connectToMongoDb.js";

// ✅ Import Routes
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js";

// ✅ App Config
const app = express();
const PORT = process.env.PORT || 2000;

// DEBUG: Confirm env is loading
console.log("✅ MONGO_DB_URI from .env:", process.env.MONGO_DB_URI);

// ✅ Middleware
app.use(express.json());
app.use(cookieParser());

// ✅ API Routes
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);

// Log route usage only when routes are mounted
app.use("/api/message", (req, res, next) => {
    console.log("🛣️ Message route accessed");
    next();
});

app.use("/api/users", (req, res, next) => {
    console.log("🛣️ User route accessed");
    next();
});

// ✅ Start Server After DB Connection
const startServer = async () => {
    try {
        await connectToMongoDb(); // Wait until DB is connected
        app.listen(PORT, () => {
            console.log(`🚀 Server running at http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error("❌ Failed to start server:", err.message);
    }
};

startServer();
