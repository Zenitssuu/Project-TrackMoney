import React, { useState, useMemo } from "react";
import styled from "styled-components";
import bg from "./img/bg.png";
import { MainLayout } from "./styles/Layout.js";
import Ball from "./components/BgBall/ball.jsx";
import Navigation from "./components/navigation/Navigation.jsx";
import Income from "./components/Income/Income.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Transactions from "./components/Transactions/Transactions.jsx";
import Expenses from "./components/Expense/Expenses.jsx";
import { useGlobalContext } from "./context/GlobalContext.jsx";

function App() {
  const [active, setActive] = useState(1);
  const orbMemo = useMemo(() => {
    return <Ball />;
  }, []);

  const global = useGlobalContext();
  // console.log(global);
  

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;

      // case 2:
      //   return <Transactions />;

      case 2:
        return <Income />;

      case 3:
        return <Expenses />;

      default:
        return <Dashboard />;
    }
  };

  return (
    <AppStyle bg={bg} className="App">
      {orbMemo}
      <MainLayout>
        {/* <h1>Hellow</h1> */}
        <Navigation active={active} setActive={setActive} />
        <main>{displayData()}</main>
      </MainLayout>
    </AppStyle>
  );
}

const AppStyle = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
  main {
    flex:1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;
