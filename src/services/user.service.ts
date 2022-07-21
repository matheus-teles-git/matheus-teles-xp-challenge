import Users from "../database/models/UserModel"
import IUserRequest from "../interfaces/userRequest.interface";



class UserService {
  public async retrieveBalance(id: number) {
    const entry = await Users.findOne( { where: { id } });
    return { clientCode: entry?.id, balance: entry?.balance } as IUserRequest;
  }

  public async deposit(payload: IUserRequest) {
    const current = await Users.findOne( { where: { id: payload.clientCode } });
    if (current?.balance != undefined) {
      const newBalance = current?.balance + payload.balance;
      await Users.update( { balance: newBalance }, { where: { id: payload.clientCode }});
      return { clientCode: payload.clientCode, balance: newBalance } as IUserRequest;
    }
  }
}

export default UserService;

