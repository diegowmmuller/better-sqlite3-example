import db from "../database.js";

import type { User } from "../types/User.js";

export const createUser = (user: User) => {
  const statement = db.prepare(`
    INSERT INTO users (name, email, password)
    VALUES (?, ?, ?)
  `);

  const response = statement.run(user.name, user.email, user.password);
  return response;
};

export const updateUser = (id: number, user: User) => {
  const statement = db.prepare(`
    UPDATE users
    SET name = ?, email = ?, password = ?
    WHERE id = ?
  `);

  return statement.run(user.name, user.email, user.password, id);
};

export const getUsers = (): User[] => {
  const statement = db.prepare(`
    SELECT * FROM users
  `);

  return statement.all() as User[];
};

export const getUser = (id: number): User | undefined => {
  const statement = db.prepare(`
    SELECT * FROM users
    WHERE id = ?
  `);

  return statement.get(id) as User | undefined;
};

export const deleteUser = (id: number) => {
  const statement = db.prepare(`
    DELETE FROM users
    WHERE id = ?
  `);

  return statement.run(id);
};
