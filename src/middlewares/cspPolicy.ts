import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

const cspPolicyMiddleware = (app: FastifyInstance) => {
  app.addHook("onRequest", (req: FastifyRequest, res: FastifyReply, done) => {
    res.header("Content-Security-Policy", "script-src 'self' http://localhost:3000");
    done();
  });
};

export default cspPolicyMiddleware;
