import jwt from 'jsonwebtoken';
import IAuthenticationRequest from '../interfaces/authenticationRequest.interface';

const { JWT_SECRET } = process.env;

function generateToken(data: IAuthenticationRequest) : string {
  const secret = { token: jwt.sign(
    { data },
    `${JWT_SECRET}`,
    { expiresIn: '7d', algorithm: 'HS256' },
  ) };
  return secret.token;
}

export default generateToken;