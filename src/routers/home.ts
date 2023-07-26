import express, { Request, Response, Router } from "express";

export class HomeRouter {
	#router: Router;
	constructor() {
		this.#router = express.Router();
		this.initializeRouter();
	}

	initializeRouter() {
		//* routers For Handle Bank
		this.#router.get("/", this.#checkAuth);
	}

	#checkAuth = async (req: Request, res: Response) => {
		res.status(200).send("authorized");
	};
	getRouter() {
		return this.#router;
	}
}
