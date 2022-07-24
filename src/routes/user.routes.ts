import { Router } from "express";
import verifyToken from "../authentication/verify.token";

import UserController from "../controllers/user.controller";
import userValidation from "../middlewares/user.middleware";

const user = new UserController();

const router = Router();

router.get('/:id', user.retrieveBalance);

router.post('/deposito', verifyToken, userValidation, user.deposit);

router.post('/saque', verifyToken, userValidation, user.withdraw);

export default router;