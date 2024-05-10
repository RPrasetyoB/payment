// import { Request, Response, NextFunction } from "express";
// import { getToken, loggedUser } from "../utils/decodedToken";
// import {
//   completedPaymentTransferService,
//   completedWithdrawService,
//   createPaymentTransferService,
//   createWithdrawService,
//   processingPaymentTransferService,
//   processingWithdrawService,
// } from "../services/paymentService";

// // ------ create payment transfer ------
// const createPaymentTransfer = async (req: Request, res: Response, next: NextFunction) => {
//   const { payment_account_id, amount, currency, to_address } = req.body;
//   const token = getToken(req);
//   try {
//     const result = await createPaymentTransferService(token, payment_account_id, amount, currency, to_address);
//     if (result?.success) {
//       res.status(200).json({
//         success: true,
//         message: result?.message,
//         data: result?.data,
//       });
//       setTimeout(async () => {
//         await processingPaymentTransferService(result.data.id);
//       }, 5000);
//       setTimeout(async () => {
//         await completedPaymentTransferService(result.data.id);
//       }, 30000);
//     }
//   } catch (error) {
//     next(error);
//   }
// };

// // ------ create withdrawal ------
// const createWithdrawal = async (req: Request, res: Response, next: NextFunction) => {
//   const { payment_account_id, amount, currency } = req.body;
//   const token = getToken(req);
//   try {
//     const result = await createWithdrawService(token, payment_account_id, amount, currency);
//     if (result?.success) {
//       res.status(200).json({
//         success: true,
//         message: result?.message,
//         data: result?.data,
//       });
//       setTimeout(async () => {
//         await processingWithdrawService(result.data.id);
//       }, 5000);
//       setTimeout(async () => {
//         await completedWithdrawService(result.data.id);
//       }, 30000);
//     }
//   } catch (error) {
//     next(error);
//   }
// };

// export { createPaymentTransfer, createWithdrawal };
