import Users from "../database/models/UserModel";
import IAuthenticationRequest from "../interfaces/authenticationRequest.interface";

class AuthenticationService {
  public async authenticate (payload: IAuthenticationRequest) {
    const verifyUser = await Users.findOne({ raw: true, where: { email: payload.email, password: payload.password } });
    if (verifyUser === null) return null;
    return verifyUser;
  }

}

export default AuthenticationService;