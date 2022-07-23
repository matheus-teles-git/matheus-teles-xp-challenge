import { Router } from "express";

import UserController from "../controllers/user.controller";
import userValidation from "../middlewares/user.middleware";

const user = new UserController();

const router = Router();

router.get('/:id', user.retrieveBalance);

router.post('/deposito', userValidation, user.deposit);

router.post('/saque', userValidation, user.withdraw);

export default router;