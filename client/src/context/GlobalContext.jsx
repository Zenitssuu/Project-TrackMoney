import { createContext, useContext, useState } from "react";
import axios from "axios";

// Create GlobalContext
const GlobalContext = createContext();

// GlobalProvider component
export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [incomeError, setIncomeError] = useState(null);
  const [expenseError, setExpenseError] = useState(null);

  // Function to add income
  const addIncome = async (income) => {
    try {
      const resp = await axios.post("/income/add-income", income);
      // You can handle the response here if needed
      console.log(resp.data);
      if(resp.data.statusCode===404){
        setIncomeError(resp.data.message)
      }
      getIncomes();
    } catch (err) {
      console.log(err);
      setIncomeError(err.message); // Fix: Access `err.response`
    }
  };

  const getIncomes = async () => {
    try {
      const resp = await axios.get("/income/get-incomes");
      // You can handle the response here if needed
      console.log(resp.data);
      setIncomes(resp.data);
    } catch (err) {
      setIncomeError(err.message); // Fix: Access `err.response`
    }
  };

  const deleteIncome = async (id) => {
    try {
      const res = await axios.delete(`/income/delete-income/${id}`);
      getIncomes();
    } catch (error) {
      console.log(error);
      setIncomeError(error.message);
    }
  };
  const totalIncome = () => {
    let totalIncome = 0;
    incomes.forEach((income) => {
      totalIncome = totalIncome + income.amount;
    });

    return totalIncome;
  };

  const addExpense = async (expense)=>{
    try {
      const resp = await axios.post("/expense/add-expense", expense);
      // You can handle the response here if needed
      console.log(resp.data);
      if(resp.data.statusCode===404){
        setExpenseError(resp.data.message)
      }
      getExpenses();
    } catch (err) {
      setExpenseError(err.message); // Fix: Access `err.response`
    }
  }

  const getExpenses = async () => {
    try {
      const resp = await axios.get("/expense/get-expenses");
      // You can handle the response here if needed
      console.log(resp.data);
      setExpenses(resp.data);
    } catch (err) {
      setExpenseError(err.message); // Fix: Access `err.response`
    }
  }

  const deleteExpense = async(id)=>{
    try {
      const res = await axios.delete(`/expense/delete-expense/${id}`);
      getExpenses();
    } catch (error) {
      console.log(error);
      setExpenseError(error.message);
    }
  }

  const totalExpense = ()=>{
    let totalExpense = 0;
    expenses.forEach((expense) => {
      totalExpense = totalExpense + expense.amount;
    });

    return totalExpense;
  }

  const totalBalance = () => {
    return totalIncome() - totalExpense();
  }

  const transactionHistory = ()=>{
    const history = [...incomes,...expenses];

    history.sort((a,b) => {
      return new Date(b.createdAt) - new Date(a.createdAt)
    })

    return history.slice(0,3);
  }

  // console.log(incomes);
  // console.log(expenses);  
  

  // Return context provider with value
  return (
    <GlobalContext.Provider
      value={{
        addIncome,
        setIncomes,
        incomes,
        getIncomes,
        deleteIncome,
        totalIncome,
        expenses,
        addExpense,
        deleteExpense,
        totalExpense,
        getExpenses,
        totalBalance,
        transactionHistory,
        incomeError,
        expenseError,
        setExpenseError,
        setIncomeError,

      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Hook to use the global context
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
