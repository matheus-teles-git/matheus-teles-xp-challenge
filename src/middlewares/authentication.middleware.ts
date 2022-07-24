import { Request, Response, NextFunction } from 'express';

function loginValidation(request: Request, response: Response, next: NextFunction) {
  const { email, password } = request.body;
  const emailRegExp  = /\S+@\S+\.\S+/;
  if (password.length < 6) {
    return response.status(422).json({ message: 'Password needs to be at least 6 characters long' });
  }
  if (!emailRegExp.test(email)) {
    return response.status(422).json({ message: 'Invalid email' });
  }
  next();
}

export default loginValidation;