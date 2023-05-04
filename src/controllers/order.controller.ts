import { Request, Response } from 'express';
import { orderService } from '../services';
import statusCodes from '../statusCodes';

async function listOrders(_req: Request, res: Response) {
  const orders = await orderService.findAll();
  return res.status(statusCodes.OK).json(orders);
}

export default {
  listOrders,
};