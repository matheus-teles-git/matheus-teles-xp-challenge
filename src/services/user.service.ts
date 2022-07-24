import Users from "../database/models/UserModel"
import IUserRequest from "../interfaces/userRequest.interface";
import { evaluate } from 'mathjs';
//found this math library searching on google

class UserService {
  public async retrieveBalance(id: number) {
    const entry = await Users.findOne( { where: { id } });
    if (entry === null) return null;
    return { userId: entry?.id, balance: entry?.balance } as IUserRequest;
  }

  public async deposit(payload: IUserRequest) {
    const current = await Users.findOne( { where: { id: payload.userId } });
    if (current === null) return null;
    if (current?.balance != undefined) {
      const x  = current.balance;
      const y = payload.balance
      const newBalance = evaluate(`${x} + ${y}`);
      await Users.update( { balance: newBalance.toFixed(2) }, { where: { id: payload.userId }});
      return { userId: payload.userId, balance: newBalance.toFixed(2) } as IUserRequest;
    }
  }

  public async withdraw(payload: IUserRequest) {
    const current = await Users.findOne( { where: { id: payload.userId } });
    if (current === null) return null;
    if (current?.balance != undefined) {
      const x  = current.balance;
      const y = payload.balance
      const newBalance = evaluate(`${x} - ${y}`);
      if (newBalance < 0) return false;
      await Users.update( { balance: newBalance.toFixed(2) }, { where: { id: payload.userId }});
      return { userId: payload.userId, balance: newBalance.toFixed(2) } as IUserRequest;
    }
  }
}

export default UserService;

