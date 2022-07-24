import { Router } from "express";
import verifyToken from "../authentication/verify.token";

import AssetController from "../controllers/asset.controller";

const asset = new AssetController();

const router = Router();

router.get('/:id', verifyToken, asset.getByClient);

router.get('/assetinfo/:id', verifyToken, asset.getByAsset)

export default router;