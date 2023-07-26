import { SessionData } from "express-session";

interface Auth {
	userName: string;
	password: string;
}

interface SessionValue extends SessionData {
	user?: UserData | null;
}
interface SessionUser {
	userName: string;
	userId: number;
	companyId: number;
}

interface UserData {
	userId: number;
	userName: string;
	pass?: string;
	companyId: number;
}

export interface InterfaceAuth {
	Auth: Auth;
	SessionValue: SessionValue;
	SessionUser: SessionUser;
	UserData: UserData;
}
