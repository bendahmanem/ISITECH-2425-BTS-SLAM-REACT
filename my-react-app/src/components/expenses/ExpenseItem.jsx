export default function ExpenseItem({ title, amount, date }) {
  return (
    <>
      <div>{date.toString()}</div>
      <div>{title}</div>
      <div>{amount}</div>
    </>
  );
}
