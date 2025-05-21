import User from '../models/user.model.js'

export const getUserForSideBar = async (req,res) => {
    try {
        
        const loggedInUserId = req.user.userId;

        const filteredUsers = await User.find({ _id: {$ne : loggedInUserId}}).select("-password");

        return res.status(200).json(filteredUsers);

    } catch (error) {
        console.log("Error in getUserForSideBar : ", error.message);
        return res.status(500).json({error:"invalid server error"});
    }
};

export default getUserForSideBar; 