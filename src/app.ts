import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
const app = express();
const server_port = process.env.SERVER_PORT || 3000;

app.listen(server_port, () => {
  console.log(`server listening at http://localhost:${server_port}`);
});
