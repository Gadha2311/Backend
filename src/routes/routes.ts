import { login, signUp } from "../controller/authController";
import { shortURL } from "../controller/shortUrl";
import { Router } from "express";
import { authenticateToken } from "../middleware/authentication";
const router = Router();

router.post("/signUp", signUp);
router.post("/login", login)
router.post("/shorten",authenticateToken, shortURL)

export default router;
