interface User {
	userId: number;
	userName: string;
	pass?: string;
	companyId: number;
}

export interface InterfaceUser {
	User: User;
}
