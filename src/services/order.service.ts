import { orderModel } from '../models';
import { Order } from '../types/order';

async function findAll(): Promise<Order[]> {
  const orders = await orderModel.findAll();
  return orders;
}

export default {
  findAll,
};