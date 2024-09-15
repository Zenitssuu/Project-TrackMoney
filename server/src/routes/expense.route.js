import { Router } from "express";
import {
  addExpense,
  deleteExpense,
  getExpenses,
} from "../controllers/ExpenseControllers.js";

const router = Router();

router
  .post("/add-expense", addExpense)
  .get("/get-expenses", getExpenses)
  .delete("/delete-expense/:id", deleteExpense);

export default router;
