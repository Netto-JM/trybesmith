import { Request, Response } from 'express';
import { userService } from '../services';
import statusCodes from '../statusCodes';

async function createUser(req: Request, res: Response) {
  const { username, vocation, level, password } = req.body;
  const token = await userService.createUser({ username, vocation, level, password });
  return res.status(statusCodes.CREATED).json({ token });
}

export default {
  createUser,
};