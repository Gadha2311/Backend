import { login, signUp } from "../controller/authController";
import { redirectURL, shortURL } from "../controller/shortUrl";
import { Router } from "express";
import { authenticateToken } from "../middleware/authentication";
const router = Router();

router.post("/signUp", signUp);
router.post("/login", login)
router.post("/shorten",authenticateToken, shortURL)
router.get("/:shortId",authenticateToken, redirectURL);

export default router;
