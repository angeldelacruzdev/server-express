import mysql, { Pool } from "mysql2/promise";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from "./envAccess";

export class ConnectDB {
	#pool: Pool;
	constructor() {
		this.#pool = mysql.createPool({
			host: DB_HOST,
			user: DB_USER,
			password: DB_PASSWORD,
			database: DB_NAME,
			connectionLimit: 0, // Set the maximum number of connections
		});
	}
	setConnection = async () => {
		try {
			// Get a connection from the pool
			return await this.#pool.getConnection();
		} catch (error: any) {
			console.error("Error occurred:", error.message);
		}
	};
}
