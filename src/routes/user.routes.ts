import { Router } from "express";

import UserController from "../controllers/user.controller";

const user = new UserController();

const router = Router();

router.get('/:id', user.retrieveBalance);

router.post('/deposito', user.deposit)

export default router;