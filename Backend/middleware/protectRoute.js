import jwt from "jsonwebtoken";

const protectRoute = (req, res, next) => {
    const authHeader = req.headers.authorization;

    console.log("🛡️ Received Auth Header:", authHeader); // DEBUG

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Unauthorized: no token provided" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // ✔️ Verify token
        req.user = decoded; // ✔️ Save decoded user in request
        console.log("✅ Token decoded:", decoded); // DEBUG
        next(); // ✔️ Continue to the next middleware
    } catch (err) {
        console.error("❌ JWT error:", err.message); // 🔍 Error log
        return res.status(401).json({ error: "Unauthorized: invalid token" });
    }
};

export default protectRoute;
