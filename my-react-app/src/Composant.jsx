import { useState } from "react";

export default function Label({ text, nombre }) {
  // Declaration d'une variable d'etat
  const [compteur, setCompteur] = useState(0);

  // const stateArray = useState(0);

  // const compteur = stateArray[0];
  // const setCompteur = stateArray[1];

  console.log("bonjour depuis composant");

  // Creation d'un event handler pour gerer le click
  function handleClick() {
    setCompteur(compteur + 1);
    console.log("compteur", compteur);
  }

  return (
    <div>
      Label: {text} <br />
      {compteur}
      <br />
      <button onClick={handleClick}>Cliquez!!!</button>
    </div>
  );
}
