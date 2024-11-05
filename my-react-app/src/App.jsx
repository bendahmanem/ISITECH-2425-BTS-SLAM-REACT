import { useState } from "react";
import "./App.css";
import Expenses from "./components/expenses/Expenses";
import Formulaire from "./components/formulaireExemple/Formulaire";
import ChildToParent from "./components/childToParent/childToParent";

const dummy_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  // const [count, setCount] = useState(0);
  const [expenses, setExpenses] = useState(dummy_expenses);
  const [Label, setLabel] = useState("test");

  return (
    <>
      {Label}
      <ChildToParent updater={setLabel} />
      <br />
      <Formulaire />
      {expenses.length > 0 && <Expenses items={expenses} />}
      {expenses.length === 0 && <p>No expenses found.</p>}
    </>
  );
}

export default App;
