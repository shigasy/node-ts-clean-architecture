import mysql, { Pool } from "mysql";

import dotenv from "dotenv";
import { IDBConnection } from "../interface_adapter/database/MySQL/IDBConnection";

export class MysqlConnection extends IDBConnection {
  private pool: Pool;

  constructor() {
    super();
    dotenv.config();
    this.pool = mysql.createPool({
      connectionLimit: 5,
      host: process.env.HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      port: Number(process.env.DB_PORT),
      timezone: process.env.TIMEZONE,
      insecureAuth: false,
    });
  }

  public execute() {}
}
