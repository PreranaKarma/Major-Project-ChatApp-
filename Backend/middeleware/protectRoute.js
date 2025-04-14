import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const protrectRoute = async (req,res,next) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            return res.status(401).json({error:" Unauthorized - No Token Provided"});
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        
        if (!decoded) {
            return res.status(401).json({error :"Unauthorized - Invalid Token"});
        }

        const user = await User.findById(decoded.userId).select("-password");

        if (!user) {
            return res.status(404).json({error: "User not found"});
        } 

        req.user = user;

        next();

    } catch (error) {
        console.log("Error in protectRoute middeleware : ",error.message)
        res.status(500).json({error:"Internal server error"});
    }    
}
export default protrectRoute;





// import jwt from 'jsonwebtoken';
// import User from '../models/user.model.js';

// const protectRoute = async (req, res, next) => {
//     let token;
//     if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
//         try {
//             token = req.headers.authorization.split(' ')[1];
//             const decoded = jwt.verify(token, process.env.JWT_SECRET);
//             req.user = await User.findById(decoded.id).select('-password');
//             next();
//         } catch (error) {
//             console.error('Token verification failed:', error.message);
//             res.status(401).json({ error: 'Not authorized, token failed' });
//         }
//     }
//     if (!token) {
//         res.status(401).json({ error: 'Not authorized, no token' });
//     }
   
//     // console.log('cookies : ',req.cookies);
// };
// // res.cookies('jwt',token,{
// //     httpOnly: true,
// //     secure : process.env.NODE_ENV === 'production',
// //     sameSite : 'strict'
// // });

// export default protectRoute;



