import { Router } from "express";

import InvestmentController from "../controllers/invesment.controller";

const invesment =  new InvestmentController();

const router = Router();

router.post('/comprar', invesment.buyAsset);

export default router;