import ExpenseItem from "./ExpenseItem";

const Expenses = ({ items }) => {
  console.log("je suis dans expenses: ", items);

  return (
    <div>
      <h1>Expenses</h1>
      {items.map((el) => (
        <>
          <ExpenseItem title={el.title} amount={el.amount} date={el.date} />
          <br />
        </>
      ))}
    </div>
  );
};

export default Expenses;
