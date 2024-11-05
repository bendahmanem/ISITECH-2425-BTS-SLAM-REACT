// import { useState } from "react";
import "./App.css";
import Label from "./Composant";
// Creeer un composant dans un fichier js different
// l'importer avec la syntaxe import default

// utilser la balise <Composant /> pour afficher le composant

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Label text="bonjour" nombre={3} />
    </>
  );
}

export default App;
