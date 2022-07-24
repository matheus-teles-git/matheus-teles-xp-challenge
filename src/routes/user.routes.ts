import { Router } from "express";
import verifyToken from "../authentication/verify.token";

import UserController from "../controllers/user.controller";
import userValidation from "../middlewares/user.middleware";

const user = new UserController();

const router = Router();

/**
 * @swagger
 *  tags:
 *    name: Users
 *    description: Endpoints de conta de usuário
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      UserRequest:
 *        type: object
 *        required:
 *          - userId
 *          - balance
 *        properties:
 *          userId:
 *            type: number
 *          balance:
 *            type: number
 *        example:
 *            userId: 1
 *            balance: 1000
 *          
 *      
 */

/**
 * @swagger
 * /conta/{id} :
 *   get:
 *     tags: [Users]
 *     description: Esse endpoint retorna o saldo disponível na conta do usuario com o id informado
 *     parameters: 
 *       - in: path
 *         name: id
 *         type: number
 *         required: true
 *     responses:
 *       200:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Users'
 */

router.get('/:id', verifyToken, user.retrieveBalance);

/**
 * @swagger
 * /conta/deposito:
 *   post:
 *     tags: [Users]
 *     description: Esse endpoint deposita o valor informado a conta do usuário informado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Users'
 *      responses:
 *         200:
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 $ref: '#/components/schemas/Users'
 *         
 */

router.post('/deposito', verifyToken, userValidation, user.deposit);

router.post('/saque', verifyToken, userValidation, user.withdraw);

export default router;