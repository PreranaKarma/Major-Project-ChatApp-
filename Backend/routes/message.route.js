import express from 'express';
import {getMessage,sendMessage} from '../controllers/message.controller.js';
import protrectRoute from '../middeleware/protectRoute.js';
import getUserForSideBar from '../controllers/user.controller.js';

const router = express.Router();

router.get("/:id",protrectRoute, getMessage);

router.post("/send/:id",protrectRoute, sendMessage);

router.post("/users",protrectRoute, getUserForSideBar);




export default router;

