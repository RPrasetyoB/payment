import express from "express";
import { createPaymentAccount, deletePaymentAccount, getAllAccount } from "../../../controllers/paymentAccount";

const paymentAccount = express.Router();

paymentAccount.post("/", createPaymentAccount);
paymentAccount.get("/", getAllAccount);
paymentAccount.delete("/:id", deletePaymentAccount);

export default paymentAccount;
