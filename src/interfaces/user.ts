export interface UserData {
  userId: number;
  userName: string;
  pass?: string;
  companyId: number;
}


export interface UserSession {
	userName: string;
	userId: number;
	companyId: number;
}
