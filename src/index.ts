import express, { Express } from "express";
import { PORT } from "./config/envAccess";
import { corsConfig } from "./config/corsConfig";
import session from "express-session";
import AuthMiddleware from "./middleware/auth";
import { AuthRouter } from "./routers/auth";
import { HomeRouter } from "./routers/home";

//*config
const app: Express = express();
app.use(express.json());

//*Middleware
//?Configure CORS middleware
app.use(corsConfig);

//*session
app.use(
	session({
		secret: "your-secret-key",
		resave: false,
		saveUninitialized: true,
		cookie: { maxAge: 3600000 },
		// Set the expiration time to 1 hour (in milliseconds)
	})
);

//*class
const authRouter = new AuthRouter();
const homeRouter = new HomeRouter();


//*Router
app.use("/auth", authRouter.getRouter());
app.use("/home", AuthMiddleware, homeRouter.getRouter());

app.listen(PORT, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
