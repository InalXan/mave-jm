import {Router} from "express"
import { trackVisit, getStats } from "../controllers/visit.controller.js";
import cookieMiddleware from "../middlewares/cookie.middleware.js";
const router = Router();

router.get("/", cookieMiddleware, trackVisit);
router.get("/admin/stats", getStats);

export default router;
