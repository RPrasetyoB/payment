import { Express } from "express";
import helmetApp from "./helmet";
import corsMiddleware from "./corsOption";
import cspPolicyMiddleware from "./cspPolicy";

const middleWares = (app: Express) => {
  corsMiddleware(app);
  helmetApp(app);
  cspPolicyMiddleware(app);
};

export default middleWares;
