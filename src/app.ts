import fastify from "fastify";
import * as dotenv from "dotenv";
import { db } from "./config/db/dbConnection";
import errorCatchPlugin from "./middlewares/errorHandler";
import middleWares from "./middlewares";
import router from "./routes";

// Integration with .env
dotenv.config();

// Create a Fastify instance
const app = fastify();

// DB connection
db();

// Middleware registration
middleWares(app);

// Endpoint routes
app.register(router);

// Server port listening
const server_port: number = Number(process.env.SERVER_PORT) || 3001;
app.listen({ port: server_port }, () => {
  console.log(`listening at port: http://localhost:${server_port}`);
});
