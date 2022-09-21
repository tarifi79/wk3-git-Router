import { Router } from "express";
import { goodbyeWorld, helloWorld } from "../controllers/index.controller.server.js";

const router=Router();

router.use('/hello',helloWorld);
router.use('/goodbye',goodbyeWorld);
export default router;