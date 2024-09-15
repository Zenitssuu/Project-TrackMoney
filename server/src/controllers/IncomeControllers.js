import { Income } from "../models/Income.model.js";
import errorHandler from "../utils/errorhandler.js";
import dayjs from "dayjs";

const addIncome = async (req, res) => {
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

    const newIncome = await Income.create({
      title,
      amount,
      category,
      description,
      date,
    });

    if (!newIncome) {
      throw err;
    }
    console.log(newIncome);
    return res.status(200).json({ message: "Income Added" });
  } catch (error) {
    console.log("error while creating movie ", error.message);
    return res.json(errorHandler(404, error.message));
  }
};

const getIncomes = async (req, res) => {
  try {
    const incomes = await Income.find().sort({ createdAt: -1 });
    return res.status(200).json(incomes);
  } catch (error) {
    return res.json(
      errorHandler(500, { message: "error while fetching documents" })
    );
  }
};

const deleteIncome = async (req, res) => {
  try {
    const { id } = req.params;
    await Income.findByIdAndDelete(id).then((income) => {
      return res.status(201).json({ message: "deleted successfully" });
    });
    // return res.status(200).json(incomes);
  } catch (error) {
    return res.json(
      errorHandler(500, { message: "error while deleting document" })
    );
  }
};

export { addIncome, getIncomes, deleteIncome };
