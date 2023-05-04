import jwt from 'jsonwebtoken';
import { userModel } from '../models';
import { User } from '../types/user';

const secretKey = process.env.JWT_SECRET;

async function createUser(user: User): Promise<string> {
  const id = await userModel.insert(user);
  const token = jwt.sign({ id, username: user.username }, secretKey as string);
  return token;
}

export default {
  createUser,
};