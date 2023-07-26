import { NextFunction, Request, Response } from "express";
import { InterfaceAuth } from "../interfaces/auth";

export default function AuthMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {
	//* Check for authentication token or any other authentication logic
	const sessionData = req.session as InterfaceAuth["SessionValue"]; //? Cast the session object to your custom interface

	// ! comment this code if it is in production mode
	// sessionData.user = {
	// 	userName: "jean",
	// 	userId: 1,
	// 	companyId: 1,
	// };

	if (
		!sessionData.user?.companyId ||
		!sessionData.user?.userId ||
		!sessionData.user?.userName
	) {
		return res.status(401).json({ error: "Unauthorized" });
	}
	next();
}
