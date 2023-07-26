# server-express
This server was created in Express with a typescript and authentication module.

##config database
Go to the path 'src\config\envAccess.js' and add your database credentials 

##to work validating the session in development mode
Go to the path 'src\middleware\auth.ts' and uncomment lines 13 to 17 to work in development mode and not lose the session for each request with tools like RapidAPI

### `npm run dev`
Runs the app in the development mode.\
Open [http://localhost:3030](http://localhost:3030) to view it in the browser.

! Don't forget to uncomment the session variable to access the paths in development mode!
