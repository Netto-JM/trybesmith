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
  const [rows] = await connection.execute<RowDataPacket[]>('SELECT * FROM Trybesmith.products');
  return rows as Product[];
}

export default {
  insert,
  findAll,
};