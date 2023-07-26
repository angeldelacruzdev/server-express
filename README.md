# server-express

This server was created in Express with a typescript and authentication module.

## config database

Go to the path 'src\config\envAccess.js' and add your database credentials

### Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`,
`DB_HOST`,
`DB_USER`,
`DB_PASSWORD`,
`DB_NAME`,
`DB_PORT`

## To test authentication

I am using the library bcrypt for encrypt password.

To test the authentication with the database use this password:
"$2b$10$WDL.DzJlnJKRvYlcDrEqt.yOuyMpzmgJyqTCUY1o/itjy.EvfZuQO"

and send it this "123456" for return true otherwise it will return false

Request type POST:

```javascript
{
  "user": "userName",
  "password": "123456"
}
```

or encrypt your own password using this method which is in `src\controllers\AuthController.ts` line 26

```javascript
	async encryptPassword(password: string) {
		const saltRounds = 10; // The cost factor for bcrypt (higher is more secure but slower)
		return await bcrypt.hash(password, saltRounds);
	}
```

## change the query to find the user

Go to the path 'src\sql\auth.ts'

## To work validating the session in development mode

Go to the path 'src\middleware\auth.ts' and uncomment lines 13 to 17 to work in development mode and not lose the session for each request with tools like RapidAPI

## npm run dev

Runs the app in the development mode.\
Open http://localhost:3030/home to view it in the browser.

!Don't forget to uncomment the session variable to access the paths in development mode!
