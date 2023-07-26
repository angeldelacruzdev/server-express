import { ExecutionQuery } from "../helpers/query";
import { InterfaceAuth } from "../interfaces/auth";
import { AuthQuery } from "../sql/auth";

export class AuthModel extends AuthQuery {
	#setQuery: ExecutionQuery;
	constructor() {
		super();
		this.#setQuery = new ExecutionQuery();
	}

	async getUser(userName: string) {
		const result = (await this.#setQuery.select(
			this.sqlGetUser(userName)
		)) as InterfaceAuth["UserData"][];

		if (result.length === 0) throw new Error("Error with query result");

		return result;
	}
}
