import { Request, Response } from 'express'
import UserService from '../services/user.service'

class UserController {
  constructor(private userService = new UserService()) {}

  public retrieveBalance = async (request: Request, response: Response) => {
    const { id } = request.params;
    const balance = await this.userService.retrieveBalance(Number(id));
    return response.status(200).json(balance);
  }
}

export default UserController;