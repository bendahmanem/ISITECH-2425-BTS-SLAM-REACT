// import d'un fichier CSS pour l'utilisation de classes
// import styles from "./MyComponent.module.css";

function MyComponent() {
  // css inline style a utiliser la prop style
  // const divStyle = {
  //   color: "blue",
  // };

  return (
    <div className="text-3xl font-bold underline text-blue-400">
      MyComponent
    </div>
  );
}

export default MyComponent;
