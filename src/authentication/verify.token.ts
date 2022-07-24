import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express'

const { JWT_SECRET } = process.env;

async function verifyToken(request: Request, response: Response, next: NextFunction) {
  const { authorization } = request.headers;
  if (!authorization) {
    return response.status(401).json({ message: 'Token not found' });
  }
  try {
    jwt.verify(authorization, `${JWT_SECRET}`);
    next();
  } catch (error) {
    return response.status(401).json({ message: 'Expired or invalid token' });
  }
}

export default verifyToken;