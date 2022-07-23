import { Request, Response, NextFunction } from 'express';

function userValidation (request: Request, response: Response, next: NextFunction) {
  const { balance } = request.body;
  if (balance <= 0) return response.status(422).json({ message: 'Value can\'t be equal or less than zero ' });
  next();

}

export default userValidation;