import { SessionData } from "express-session";
import { InterfaceUser } from "./user";

interface Auth {
	userName: string;
	password: string;
}

interface SessionValue extends SessionData {
	user?: InterfaceUser["User"];
}

export interface InterfaceAuth {
	Auth: Auth;
	SessionValue: SessionValue;
}
