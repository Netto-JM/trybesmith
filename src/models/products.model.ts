import { ResultSetHeader } from 'mysql2/promise';
import { Product } from '../types/product';
import connection from './connection';

async function insert(name: string, amount: string): Promise<Product> {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );

  return { id: insertId, name, amount };
}

export default {
  insert,
};