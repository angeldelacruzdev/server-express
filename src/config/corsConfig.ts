import cors from "cors";

// Define the list of allowed origins
const allowedOrigins = ["http://localhost:3030/"]; // Add your domain here
export const corsConfig = cors({
	origin: (origin, callback) => {
		if (!origin || allowedOrigins.includes(origin)) {
			callback(null, true);
		} else {
			callback(new Error("Access denied by CORS"));
		}
	},
});

