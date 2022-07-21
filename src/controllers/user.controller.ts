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
    if (payload.balance <= 0) {
      return response.status(422).json({ message: 'Deposit value must be higher than zero' });
    }
    const deposit = await this.userService.deposit(payload);
    return response.status(200).json({ message: `Account balance of client #${deposit?.clientCode} is R$${deposit?.balance}` });
  }

  public withdraw = async (request: Request, response: Response) => {
    const payload = request.body;
    if (payload.balance <= 0) {
      return response.status(422).json({ message: 'Withdraw value must be higher than zero' });
    }
    const deposit = await this.userService.withdraw(payload);
    if (deposit === null) {
      return response.status(422).json({ message: 'Not enough balance to complete that operation' });
    }
    return response.status(200).json({ message: `Account balance of client #${deposit?.clientCode} is R$${deposit?.balance}` });
  }

}

export default UserController;