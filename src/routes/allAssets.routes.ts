import { Router } from "express";
import verifyToken from "../authentication/verify.token";

import AssetController from "../controllers/asset.controller";

const asset = new AssetController();

const router = Router();

router.get('/', verifyToken, asset.getAllAssets);

export default router;