import { Expense } from "../models/Expense.model.js";
import errorHandler from "../utils/errorhandler.js";

const addExpense = async (req, res) => {
  try {
    // console.log(req.body);

    const { title, amount, category, description, date } = req.body;

    if (!title || !amount || !category || !description || !date) {
      console.log(1);

      return res.json(errorHandler(404, "All fields required"));
    }

    if (amount <= 0 || !amount === "Number") {
      return res.json(errorHandler(404, "Amount must be greater than 0"));
    }
    // function dateSplit(dateString) {
    //   const dateParts = dateString.split("-");
    //   return new Date(Date.UTC(dateParts[2], dateParts[1] - 1, dateParts[0]));
    // }
    // const tempDate = dateSplit(date);

    const newExpense = await Expense.create({
      title,
      amount,
      category,
      description,
      date,
    });

    if (!newExpense) {
      throw err;
    }
    console.log(newExpense);
    return res.status(200).json({ message: "Expense Added" });
  } catch (error) {
    console.log("error while creating movie ", error.message);
    return res.json(errorHandler(404, error.message));
  }
};

const getExpenses = async (req, res) => {
  try {
    const Expenses = await Expense.find().sort({ createdAt: -1 });
    return res.status(200).json(Expenses);
  } catch (error) {
    return res.json(
      errorHandler(500, { message: "error while fetching documents" })
    );
  }
};

const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    await Expense.findByIdAndDelete(id).then((expense) => {
      return res.status(201).json({ message: "deleted successfully" });
    });
    // return res.status(200).json(Expenses);
  } catch (error) {
    return res.json(
      errorHandler(500, { message: "error while deleting document" })
    );
  }
};

export { addExpense, getExpenses, deleteExpense };
