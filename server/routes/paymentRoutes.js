import express from "express";
import { checkout, paymentVerification } from "../controllers/paymentController.js";

const router = express.Router();

// Route to handle the checkout process
router.post("/checkout", checkout);

// Route to handle payment verification
router.post("/paymentverification", paymentVerification);

export default router;
