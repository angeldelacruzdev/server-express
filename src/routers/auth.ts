import express, { Request, Response } from "express";
import { AuthController } from "../controllers/AuthController";
import { InterfaceAuth } from "../interfaces/auth";

export class AuthRouter {
	#router = express.Router();
	constructor() {
		this.#router = express.Router();
		this.#initializeRouter();
	}

	#initializeRouter() {
		this.#router.post("/signIn", this.#getAuth);
		this.#router.post("/signOut", this.#signOut);
	}

	async #getAuth(req: Request, res: Response) {
		const { user, password } = req.body;
		try {
			const authController = new AuthController();
			const result = await authController.getAuth({
				userName: user,
				password: password,
			});

			if (result) {
				const sessionData = req.session as InterfaceAuth["SessionValue"];
				sessionData.user = {
					userName: result.userName,
					userId: result.userId,
					companyId: result.companyId,
				};
				res.status(202).json(sessionData.user);
			}
		} catch (error) {
			res.status(401).json("Unauthorized");
		}
	}

	async #signOut(req: Request, res: Response) {
		// Destroy the session
		req.session?.destroy((err) => {
			if (err) {
				console.log("Error destroying session:", err);
				return res.sendStatus(500);
			}
			// Redirect or send a response indicating successful logout
			res.status(200); // Replace '/login' with the appropriate route for your login page
		});
	}

	getRouter() {
		return this.#router;
	}
}
