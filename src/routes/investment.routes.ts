import { Router } from "express";

import InvestmentController from "../controllers/invesment.controller";

const invesment =  new InvestmentController();

const router = Router();

router.post('/comprar', invesment.buyAsset);

router.post('/vender', invesment.sellAsset)

export default router;