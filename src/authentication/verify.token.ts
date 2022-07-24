import jwt, { SignOptions } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express'

const config: SignOptions = {
  expiresIn: '3d',
  algorithm: 'HS256',
}

const secret = process.env.JWT_SECRET || 'xpincbackend';

async function verifyToken(request: Request, response: Response, next: NextFunction) {
  const { authorization } = request.headers;
  if (!authorization) {
    return response.status(401).json({ message: 'Token not found' });
  }
  try {
    jwt.verify(authorization, secret, config);
    next();
  } catch (error) {

    return response.status(401).json({ message: 'Expired or invalid token' });
  }
}

export default verifyToken;