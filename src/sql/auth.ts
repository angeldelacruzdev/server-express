export class AuthQuery {
  //TODO search the record by username and then proceed to compare password  
	sqlGetUser = (userName: string) => {
		return `SELECT u.id AS userId,
        u.user_name AS userName,
        u.password AS pass,
        c.id AS companyId
    FROM USER u
        INNER JOIN company c ON u.company_id = c.id
    WHERE u.user_name = '${userName}'`;
	};
}
