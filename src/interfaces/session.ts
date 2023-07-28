import { SessionData } from "express-session";
import { InterfaceUser } from "./user";

export interface SessionValue extends SessionData {
  user?: InterfaceUser["User"];
}
