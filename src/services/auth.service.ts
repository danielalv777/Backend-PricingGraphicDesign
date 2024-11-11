import jwt from 'jsonwebtoken';
import { User } from '../models/user.interface';

const JWT_SECRET = process.env.JWT_SECRET || 'default_secret';

export const generateToken = (user: any): string => {
  return jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '8h' });
}