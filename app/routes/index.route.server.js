import { Router } from "express";
import { displayAboutpage, displayContactpage, displayHomepage, displayProjectspage, displayServicespage} from "../controllers/index.controller.server.js";

const router=Router();

router.get('/',displayHomepage);
router.get('/home',displayHomepage);
router.get('/about',displayAboutpage);
router.get('/projects',displayProjectspage);
router.get('/services',displayServicespage);
router.get('/contact',displayContactpage);
export default router;