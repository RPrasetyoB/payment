import express from "express";
import { createPaymentAccount, getAllAccount } from "../../../controllers/paymentAccount";

const paymentAccount = express.Router();

paymentAccount.post("/", createPaymentAccount);
paymentAccount.get("/", getAllAccount);

export default paymentAccount;
