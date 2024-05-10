import { FastifyInstance } from "fastify";
import helmetApp from "./helmet";
import corsMiddleware from "./corsOption";
import cspPolicyMiddleware from "./cspPolicy";

const middleWares = (app: FastifyInstance) => {
  corsMiddleware(app);
  helmetApp(app);
  cspPolicyMiddleware(app);
};

export default middleWares;
