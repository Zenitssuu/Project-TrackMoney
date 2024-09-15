import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layout.js";
import { useGlobalContext } from "../../context/GlobalContext.jsx";
import Form from "../Form/Form.jsx";
import IncomeItem from "./IncomeItem.jsx";

function Income() {
  const {
    incomes,
    getIncomes,
    deleteIncome,
    totalIncome,
  } = useGlobalContext();

  useEffect(() => {
    getIncomes();
  }, []);

  return (
    <IncomeStyled>
      <InnerLayout>
        <h1>Incomes</h1>
        <h2 className="total-income">
          Total Income:
          <span>Rs. {totalIncome()}</span>
        </h2>

        <div className="income-content w-full">
          <div className="form-container scale-75 flex align-top">
            <Form />
          </div>

          <div className="incomes scale-75 flex-1 mr-2">
            {incomes?.map((income) => {
              const { _id, title, amount, date, category, description, type } =
                income;
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
                  indicatorColor="var(--color-green)"
                  deleteItem={deleteIncome}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </IncomeStyled>
  );
}

const IncomeStyled = styled.div`
  display: flex;
  overflow: hidden;
  // border:2px red solid;

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
      color: var(--color-green);
    }
  }
  .income-content {
    display: flex;
    // gap: 2rem;
    width: 100%;
    .incomes {
      flex: 1;
    }
  }
`;

export default Income;
