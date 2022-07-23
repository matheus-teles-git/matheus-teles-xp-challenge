import { Router } from "express";

import AssetController from "../controllers/asset.controller";

const asset = new AssetController();

const router = Router();

router.get('/:id', asset.getByClient);

router.get('/assetinfo/:id', asset.getByAsset)

export default router;