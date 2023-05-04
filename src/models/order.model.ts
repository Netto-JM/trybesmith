import { RowDataPacket } from 'mysql2/promise';
import { Order } from '../types/order';
import connection from './connection';

async function findAll(): Promise<Order[]> {
  const [rows] = await connection.execute<RowDataPacket[]>(
    `SELECT od.id, od.user_id as userId, JSON_ARRAYAGG(pd.id) AS productsIds
    FROM Trybesmith.orders AS od
    JOIN Trybesmith.products AS pd ON od.id = pd.order_id
    GROUP BY od.id;`,
  );
  return rows as Order[];
}

export default {
  findAll,
};