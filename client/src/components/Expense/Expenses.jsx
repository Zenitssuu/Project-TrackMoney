import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layout.js";
import { useGlobalContext } from "../../context/GlobalContext.jsx";
import IncomeItem from "../Income/IncomeItem.jsx";
import { expenses } from "../../utils/icons.jsx";
import Form from "./ExpenseForm.jsx";

function Expense() {
  const { expenses, getExpenses, deleteExpense, totalExpense } = useGlobalContext();
  console.log(expenses);
  
 
  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <ExpenseStyled>
      <InnerLayout>
        <h1>Expenses</h1>
        <h2 className="total-income">
          Total Expense:
          <span>Rs. {totalExpense()}</span>
        </h2>

        <div className="income-content w-full">
          <div className="form-container scale-75 flex align-top">
            <Form />
          </div>

          <div className="incomes scale-75 flex-1 mr-2">
            {expenses?.map((expense) => {
              const { _id, title, amount, date, category, description, type } =
              expense;
              return (
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  type={type}
                  category={category}
                  indicatorColor="var(--color-red)"
                  deleteItem={deleteExpense}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </ExpenseStyled>
  );
}

const ExpenseStyled = styled.div`
  display: flex;
  overflow: auto;
  .total-income {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: 0.5rem;
    span {
      font-size: 2.5rem;
      font-weight: 800;
      color: red;
    }
  }
  .income-content {
    display: flex;
    gap: 2rem;
    .incomes {
      flex: 1;
    }
  }
`;

export default Expense;
