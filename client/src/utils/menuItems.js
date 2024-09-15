import { dashboard,expenses, transactions, trend} from "../utils/icons.jsx";

export const menuItems = [
  {
    id: 1,
    title: "Dashboard",
    icon: dashboard,
    link: "/dashboard",
  },
  // {
  //   id: 2,
  //   title: "View Transactions",
  //   icon: transactions,
  //   link: "/dashboard",
  // },
  {
    id: 2,
    title: "Incomes",
    icon: trend,
    link: "/dashboard",
  },
  {
    id: 3,
    title: "Expenses",
    icon: expenses,
    link: "/dashboard",
  },
];
