import { Router } from "express";

import AuthenticationController from "../controllers/authentication.controller";
import loginValidation from "../middlewares/authentication.middleware";

const authentication = new AuthenticationController();

const router = Router();

router.post('/login', loginValidation, authentication.login);

export default router;