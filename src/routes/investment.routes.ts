import { Router } from "express";
import verifyToken from "../authentication/verify.token";

import InvestmentController from "../controllers/invesment.controller";

const invesment =  new InvestmentController();

const router = Router();

router.post('/comprar', verifyToken, invesment.buyAsset);

router.post('/vender', verifyToken, invesment.sellAsset)

export default router;