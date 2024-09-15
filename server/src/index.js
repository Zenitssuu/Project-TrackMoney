import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/index.js";
import {IncomeRoute,ExpenseRoute} from "./routes/routes.js";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

//routes
app.use("/api/income", IncomeRoute);
app.use("/api/expense", ExpenseRoute);


//connection
connectDB()
  .then(() => {
    app.listen(PORT, (err) => {
        if(err) {
            console.log(err);
            return;            
        }
      console.log("app is running on port ", PORT);
    });
    // app.on(err,())
  })
  .catch((err) => {
    console.log("error while running app");
  });
