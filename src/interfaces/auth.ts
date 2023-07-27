import { SessionData } from "express-session";
import { UserData, UserSession } from "./user";

interface Auth {
  userName: string;
  password: string;
}

interface AuthValue extends SessionData {
  user?: UserData;
}

export interface InterfaceAuth {
  Auth: Auth;
  SessionValue: AuthValue;
  SessionUser: UserSession;
  UserData: UserData;
}
