import { Request, Response } from 'express'
import UserService from '../services/user.service'

class UserController {
  constructor(private userService = new UserService()) {}

  public retrieveBalance = async (request: Request, response: Response) => {
    const { id } = request.params;
    const balance = await this.userService.retrieveBalance(Number(id));
    return response.status(200).json(balance);
  }

  public deposit = async (request: Request, response: Response) => {
    const payload = request.body;
    const deposit = await this.userService.deposit(payload);
    return response.status(200).json({ message: `Account balance of client #${deposit?.clientCode} is R$${deposit?.balance}` });
  }
}

export default UserController;