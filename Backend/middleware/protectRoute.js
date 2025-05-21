// import jwt from 'jsonwebtoken';
// import User from '../models/user.model.js';

// const protectRoute = async (req,res,next) => {
//     try {
//         const token = req.cookies.jwt;

//         if (!token) {
//             return res.status(401).json({error:" Unauthorized - No Token Provided"});
//         }

//         const decoded = jwt.verify(token,process.env.JWT_SECRET);
        
//         if (!decoded) {
//             return res.status(401).json({error :"Unauthorized - Invalid Token"});
//         }

//         const user = await User.findById(decoded.userId).select("-password");

//         if (!user) {
//             return res.status(404).json({error: "User not found"});
//         } 

//         req.user = user;

//         next();

//     } catch (error) {
//         console.log("Error in protectRoute middeleware : ",error.message)
//         res.status(500).json({error:"Internal server error"});
//     }    
// }
// export default protectRoute;






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












// import jwt from "jsonwebtoken";

// const protectRoute = (req, res, next) => {
//     const authHeader = req.headers.authorization;

//     console.log("Received Auth Header:", req.headers.authorization);


//     if (!authHeader || !authHeader.startsWith("Bearer ")) {
//         return res.status(401).json({ error: "Unauthorized: no token provided" });
//     }

//     const token = authHeader.split(" ")[1];

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = decoded; // attach user info
//         next();
//     } catch (err) {
//         return res.status(401).json({ error: "Unauthorized: invalid token" });
//     }
// };

// export default protectRoute;
