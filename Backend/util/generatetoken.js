// import jwt from 'jsonwebtoken';

// const generateTokenAndSetCookie = (userId, res) => {
//     if (!process.env.JWT_SECRET) {
//         console.log("Inside generateTokenAndSetCookie - JWT_SECRET:", process.env.JWT_SECRET);

//         console.error("JWT_SECRET is missing!");
//         throw new Error("JWT_SECRET must be defined in .env file");
//     }

//     console.log("JWT_SECRET:", process.env.JWT_SECRET); // Debugging

//     const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
//         expiresIn: "365d",
//     });

 

//     res.cookie("jwt", token, {
//         maxAge: 365 * 24 * 60 * 60 * 1000, // 365 days in milliseconds
//         httpOnly: true, 
//         sameSite: "strict",
//         secure: process.env.NODE_ENV === "production", // Ensure correct secure setting
//     });
// };

// export default generateTokenAndSetCookie;


// util/generatetoken.js
import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
    if (!process.env.JWT_SECRET) {
        console.log("Inside generateTokenAndSetCookie - JWT_SECRET:", process.env.JWT_SECRET);
        console.error("JWT_SECRET is missing!");
        throw new Error("JWT_SECRET must be defined in .env file");
    }

    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "365d",
    });

    res.cookie("jwt", token, {
        maxAge: 365 * 24 * 60 * 60 * 1000, // 365 days
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production", 
    });
};

export default generateTokenAndSetCookie;
