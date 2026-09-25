import Database from "better-sqlite3";
import type { Database as DatabaseType } from "better-sqlite3";

const db: DatabaseType = new Database("database.db");

db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON"); // necessario para relacao N:N

export default db;
