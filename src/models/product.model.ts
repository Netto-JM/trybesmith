import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { Product } from '../types/product';
import connection from './connection';

async function insert(name: string, amount: string): Promise<Product> {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );

  return { id: insertId, name, amount };
}

async function findAll(): Promise<Product[]> {
  const [rows] = await connection.execute<RowDataPacket[]>(
    'SELECT id, name, amount, order_id as orderId FROM Trybesmith.products',
  );
  return rows as Product[];
}

async function findById(id: number): Promise<Product | undefined> {
  const [rows] = await connection.execute<RowDataPacket[]>(
    'SELECT id, name, amount, order_id as orderId FROM Trybesmith.products WHERE id = ?', 
    [id],
  );
  const [product] = rows;
  return product as Product | undefined;
}

export default {
  insert,
  findAll,
  findById,
};