export default function ChildToParent({ updater }) {
  return (
    <div>
      <button onClick={() => updater("Value from child component")}>
        Update label in parent
      </button>
    </div>
  );
}
