import Users from "../models/UserModel";

class UserService {
  public async retrieveBalance(id: number) {
    const entry = await Users.findOne( { where: { id } });
    return { codCliente: entry?.id, balance: entry?.balance, }
  }

}

export default UserService;

