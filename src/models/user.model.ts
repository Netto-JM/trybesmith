import { ResultSetHeader } from 'mysql2/promise';
import { User } from '../types/user';
import connection from './connection';

async function insert(user: User): Promise<number> {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [user.username, user.vocation, user.level, user.password],
  );

  return insertId;
}

export default {
  insert,
};