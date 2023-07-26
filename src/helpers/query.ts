import { ConnectDB } from "../config/db";

export class ExecutionQuery extends ConnectDB {
	select = async (query: string) => {
		const connection = await this.setConnection();
		if (connection) {
			try {
				const [result] = await connection.query(query);
				return result;
			} catch (error) {
				throw new Error(`Error executing query: ${error}`);
			} finally {
				if (connection) {
					connection.release(); // Release the pooled connection back to the pool
				}
			}
		}
	};

	update = async (
		sql: string,
		value: (string | number | Date)[]
	): Promise<string | boolean> => {
		const connection = await this.setConnection();
		if (connection) {
			try {
				await connection.query(sql, value);
				console.log("Data Updated successfully");
			} catch (err: any) {
				throw new Error(`Error updating data: ${err}`);
			} finally {
				if (connection) {
					connection.release(); // Release the pooled connection back to the pool
				}
			}
		}
		return true;
	};

	insert = async (sql: string, value: (string | number)[]): Promise<any> => {
		const connection = await this.setConnection();
		let result = undefined;
		if (connection) {
			try {
				return await connection.query(sql, value);
			} catch (err: any) {
				if (err.code === "ER_DUP_ENTRY") {
					return "duplicate";
				}
				throw new Error(`Error inserting data: ${err}`);
			} finally {
				if (connection) {
					connection.release(); // Release the pooled connection back to the pool
				}
			}
		}
		return result;
	};

	delete_ = async (
		sql: string,
		value: (string | number)[]
	): Promise<string | boolean> => {
		const connection = await this.setConnection();
		if (connection) {
			try {
				await connection.query(sql, value);
				console.log("Data deleted successfully");
			} catch (err: any) {
				throw new Error(`Error deleting data: ${err}`);
			} finally {
				if (connection) {
					connection.release(); // Release the pooled connection back to the pool
				}
			}
		}
		return true;
	};
}
