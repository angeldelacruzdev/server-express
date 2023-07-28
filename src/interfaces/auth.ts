import { SessionValue } from "./session";

interface Auth {
  userName: string;
  password: string;
}

export interface InterfaceAuth {
  Auth: Auth;
  SessionValue: SessionValue;
}
