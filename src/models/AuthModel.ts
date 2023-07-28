import { ExecutionQuery } from "../helpers/query";
import { InterfaceUser } from "../interfaces/user";
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
		)) as InterfaceUser["User"][];

		if (result.length === 0) throw new Error("Error with query result");

		return result;
	}
}
