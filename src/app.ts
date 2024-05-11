import * as dotenv from "dotenv";
import { db } from "./config/db/dbConnection";
import fastify, { FastifyPluginOptions } from "fastify";
import middleWares from "./middlewares";
import router from "./routes";
import Swagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";

// Integration with .env
dotenv.config();

// Create a Fastify instance
const app = fastify();

// DB connection
db();

// Middleware registration
middleWares(app);

// Sagger doc
app.register(Swagger, {
  mode: "static",
  specification: {
    path: "./docs.yaml",
  },
  exposeRoute: true,
} as FastifyPluginOptions);

const swaggerUiOptions = {
  routePrefix: "/docs",
  exposeRoute: true,
  openapi: "3.0.0",
};

app.register(fastifySwaggerUi, swaggerUiOptions);

// Endpoint routes
app.register(router);

// Server port listening
const server_port: number = Number(process.env.SERVER_PORT) || 3001;

// Start the Fastify server
app.listen(server_port, "0.0.0.0", () => console.log(`Listening on port: http://localhost:${server_port}`));
