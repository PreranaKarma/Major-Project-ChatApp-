import express from 'express';
import {getMessage,sendMessage} from '../controllers/message.controller.js';
import protectRoute from '../middleware/protectRoute.js';
import getUserForSideBar from '../controllers/user.controller.js';

const router = express.Router();

router.get("/:id",protectRoute, getMessage);

router.post("/send/:id",protectRoute, sendMessage);

router.post("/users",protectRoute, getUserForSideBar);




export default router;

