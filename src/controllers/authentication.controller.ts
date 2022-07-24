import { Request, Response } from 'express'
import generateToken from '../authentication/generate.token';
import AuthenticationService from '../services/authentication.service';

class AuthenticationController {
  constructor(private authenticationService = new AuthenticationService()) {}

  public login = async (request: Request, response: Response) => {
    const payload = request.body;
    const login = await this.authenticationService.authenticate(payload);
    if (login === null) {
      return response.status(403).json({ message: 'Incorrect Email or Password' });
    }
    const token = generateToken(login);
    return response.status(200).json({ token });
  }

}

export default AuthenticationController;