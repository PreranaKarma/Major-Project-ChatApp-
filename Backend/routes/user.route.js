import express from "express";
import User from "../models/user.model.js";
import protectRoute from "../middleware/protectRoute.js"; // ✅ Make sure spelling is correct: 'middleware'

const router = express.Router();

router.get("/", protectRoute, async (req, res) => {
    try {
        const users = await User.find({ _id: { $ne: req.user.id } }); // ✅ Exclude current user
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch users" });
    }
});

export default router;




