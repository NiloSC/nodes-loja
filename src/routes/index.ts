import { Router } from "express";
import * as PageController from "../controllers/pageController";
import * as SearchController from "../controllers/searchController";

const router = Router();

router.get("/", PageController.home);
router.get("/vestidos",PageController.Vestidos);
router.get("/sapatos",PageController.Sapatos);
router.get("/joias",PageController.Joias);

router.get("/search", SearchController.search);




export default router;


