import bcrypt from "bcrypt";
import { AuthModel } from "../models/AuthModel";
import { InterfaceAuth } from "../interfaces/auth";

export class AuthController extends AuthModel {
	async getAuth({ userName, password }: InterfaceAuth["Auth"]) {
		const user = await this.getUser(userName);
		if (user[0].pass) {
			const checkPassword = this.comparePassword(password, user[0].pass);
			if (checkPassword) {
				return {
					userId: user[0].userId,
					userName: user[0].userName,
					companyId: user[0].companyId,
				};
			}
			throw new Error("Unauthorized");
		}
	}

	comparePassword(currentPassword: string, password: string) {
		return bcrypt.compareSync(currentPassword, password);
	}

	//TODO Hash the password
	async encryptPassword(password: string) {
		const saltRounds = 10; // The cost factor for bcrypt (higher is more secure but slower)
		return await bcrypt.hash(password, saltRounds);
	}
}
