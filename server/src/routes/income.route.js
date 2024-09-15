import express, { Router } from "express";
import {
  addIncome,
  deleteIncome,
  getIncomes,
} from "../controllers/IncomeControllers.js";

const router = Router();

router
  .post("/add-income", addIncome)
  .get("/get-incomes", getIncomes)
  .delete("/delete-income/:id", deleteIncome);

export default router;
