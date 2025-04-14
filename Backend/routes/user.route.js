import express from "express";
import protrectRoute from "../middeleware/protectRoute.js";
import getUserForSideBar from "../controllers/user.controller.js";
const router = express.Router();

router.get("/",protrectRoute,getUserForSideBar);

export default router;