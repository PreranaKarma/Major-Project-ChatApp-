// ---------------------- index.js ----------------------
import dotenv from "dotenv";
dotenv.config(); // ✅ Load .env first

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"; // ✅ IMPORT CORS

import connectToMongoDb from "./db/connectToMongoDb.js";

// ✅ Import Routes
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js";

// ✅ App Config
const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware
app.use(cors({ 
    origin: "http://localhost:3000", // ✅ Allow frontend URL
    credentials: true, // ✅ Allow sending cookies if needed
    allowedHeaders: ["Content-Type", "Authorization"]  // ✅ ALLOW AUTH HEADER
}));
app.use(express.json());
app.use(cookieParser());

// ✅ API Routes
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);

// ✅ Debug logs for routes
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
        await connectToMongoDb();
        app.listen(PORT, () => {
            console.log(`🚀 Server running at http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error("❌ Failed to start server:", err.message);
    }
};

startServer();

