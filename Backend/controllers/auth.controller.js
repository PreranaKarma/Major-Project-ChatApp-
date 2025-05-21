import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../util/generatetoken.js";

// ------------------------ Signup ------------------------
export const signup = async (req, res) => {
    try {
        const { fullname, username, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords don't match" });
        }

        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: "Username already exists" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // ✅ Avatar URL (you can switch to local below if needed)
        const boyAvatar = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlAvatar = `https://avatar.iran.liara.run/public/girl?username=${username}`;
      
        

        const profilePic = gender === "male" ? boyAvatar : girlAvatar;

        // Create new user
        const newUser = new User({
            fullname,
            username,
            password: hashedPassword,
            gender,
            profilePic,
        });

        await newUser.save();

        // Generate JWT token and set it as cookie
        const token = generateTokenAndSetCookie(newUser._id, res);

        // Return response
        res.status(201).json({
            _id: newUser._id,
            fullname: newUser.fullname,
            username: newUser.username,
            profilePic: newUser.profilePic,
            token,
        });

    } catch (error) {
        console.error("❌ Error in signup controller:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// ------------------------ Login ------------------------
export const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });

        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        const token = generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullname: user.fullname,
            username: user.username,
            profilePic: user.profilePic,
            token,
        });

    } catch (error) {
        console.error("❌ Error in login controller:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// ------------------------ Logout ------------------------
export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.error("❌ Error in logout controller:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


