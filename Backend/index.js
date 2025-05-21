// ---------------------- index.js ----------------------
import dotenv from "dotenv";
dotenv.config(); // ✅ Load .env first

console.log("JWT_SECRET:", process.env.JWT_SECRET); // ✅ SHOULD NOT BE UNDEFINED


import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

// ✅ Convert ES module paths
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// ✅ MongoDB connection
import connectToMongoDb from "./db/connectToMongoDb.js";

// ✅ Routes
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js";

// ✅ App setup
import { app, server } from "./socket/socket.js";
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();
// ✅ Middleware
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // if you use cookies or credentials
}));
app.use(express.json());
app.use(cookieParser());

// ✅ API routes
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);

// ✅ Static avatar route
// app.use("/avatars", express.static(path.join(__dirname, "public/avatars")));
app.use(express.static(path.join(__dirname,"/frontend/dist")))



app.get("*",(req,res) => {
    res.sendFile(path.join(__dirname,"frontend", "dist","index.html"))
})



// ✅ Optional: Fallback /girl and /boy routes (dynamic)
app.get("/girl", (req, res) => {
    const username = req.query.username;
    const filePath = path.join(__dirname, `public/avatars/girls/${username}.jpg`);

    if (!fs.existsSync(filePath)) {
        return res.status(404).send("Girl avatar not found");
    }

    res.sendFile(filePath);
});

app.get("/boy", (req, res) => {
    const username = req.query.username;
    const filePath = path.join(__dirname, `public/avatars/boys/${username}.jpg`);

    if (!fs.existsSync(filePath)) {
        return res.status(404).send("Boy avatar not found");
    }

    res.sendFile(filePath);
});

// ✅ Route debug logging
app.use("/api/message", (req, res, next) => {
    console.log("🛣️ Message route accessed");
    next();
});

app.use("/api/users", (req, res, next) => {
    console.log("🛣️ User route accessed");
    next();
});

// ✅ Start server after DB connection
const startServer = async () => {
    try {
        await connectToMongoDb();
        server.listen(PORT, () => {
            console.log(`🚀 Server running at http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error("❌ Failed to start server:", err.message);
    }
};

startServer();



