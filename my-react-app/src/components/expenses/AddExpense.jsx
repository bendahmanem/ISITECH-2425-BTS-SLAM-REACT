import { useState } from "react";

export default function AddExpense({ adder }) {
  //   const [title, setTitle] = useState("inserez le titre");
  //   const [amount, setAmount] = useState(0);
  //   const [date, setDate] = useState(new Date());
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  const [newExpense, setNewExpense] = useState({
    title: "test",
    amount: 0,
    date: new Date()
      .toLocaleDateString("ko-KR", options)
      .replaceAll(". ", "-")
      .replace(".", ""),
  });

  const submitHandler = (e) => {
    e.preventDefault();
    // creer une nouvelle depense
    console.log("Nouvelle depense: ", newExpense);
    adder((prevExpenses) => {
      return [...prevExpenses, newExpense];
    });
  };

  return (
    <>
      <h1>Ajout d&apos;une nouvelle depense</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label>Titre: </label>
          <input
            type="text"
            value={newExpense.title}
            onChange={(e) =>
              setNewExpense({ ...newExpense, title: e.target.value })
            }
          />
        </div>
        <div>
          <label>Montant: </label>
          <input
            type="number"
            value={newExpense.amount}
            onChange={(e) =>
              setNewExpense({ ...newExpense, amount: e.target.value })
            }
          />
        </div>
        <div>
          <label>Date: </label>
          <input
            type="date"
            value={newExpense.date}
            onChange={(e) =>
              setNewExpense({ ...newExpense, date: e.target.value })
            }
          />
        </div>
        <div>
          <input type="submit" value="Ajouter" />
        </div>
      </form>
    </>
  );
}
