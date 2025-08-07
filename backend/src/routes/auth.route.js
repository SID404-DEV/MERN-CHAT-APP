import express from "express";
import { checkAuth, login, logout, signup, updateProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { deleteAccount } from "../controllers/auth.controller.js";
import { getOnlineUsers } from "../controllers/user.controller.js";

const router = express.Router();

router.delete("/delete-account", protectRoute, deleteAccount);


router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.put("/update-profile", protectRoute, updateProfile);

router.get("/check", protectRoute, checkAuth);
router.get("/online", getOnlineUsers);

export default router;
