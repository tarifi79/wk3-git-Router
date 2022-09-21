import { Router } from "express";
import { displayHomepage} from "../controllers/index.controller.server.js";

const router=Router();

router.get('/',displayHomepage);
export default router;