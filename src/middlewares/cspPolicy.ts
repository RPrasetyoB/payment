import { Application } from "express";

const cspPolicyMiddleware = (app: Application) => {
  app.use((req, res, next) => {
    res.setHeader(
      "Content-Security-Policy",
      "script-src 'self' http://localhost:3000"
    );
    next();
  });
};

export default cspPolicyMiddleware;
