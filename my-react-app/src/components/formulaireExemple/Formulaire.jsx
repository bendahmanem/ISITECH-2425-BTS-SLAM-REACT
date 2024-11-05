import { useState } from "react";

export default function Formulaire() {
  const [champ, setChamp] = useState("test");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Soumission du formulaire: ", champ);
    setChamp("");
  };

  return (
    <>
      <h1>Formulaire Exemple</h1>
      <p>Champ: {champ}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Champ: </label>
          <input
            type="text"
            value={champ}
            onChange={(e) => setChamp(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" name="Soumettre" />
        </div>
      </form>
    </>
  );
}
