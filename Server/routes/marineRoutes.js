import express from "express";
import { submitMarineQuote } from "../controllers/marineController.js";

const router = express.Router();

router.post("/request", submitMarineQuote);

export default router;
