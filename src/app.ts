import express from 'express';
import * as dotenv from 'dotenv';
import { db } from './config/db/dbConnection';
import errorCatch from './middlewares/errorHandler';
import middleWares from './middlewares';
import router from './routes';

// integration with .env
dotenv.config();
const app = express()
// DB connection
db();
// body parser
app.use(express.json());
// server port
const server_port = process.env.SERVER_PORT || 3000;
// security middleware
middleWares(app)
// endpoint routes
app.use(router)
// middleware for catch error
app.use(errorCatch)
// server port listening
app.listen(server_port, ()=> {
  console.log(`server listening at http://localhost:${server_port}`)
});

