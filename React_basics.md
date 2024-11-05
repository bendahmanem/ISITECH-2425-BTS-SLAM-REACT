# Les bases de React

## Créer un composant

Un composant React est une fonction qui retourne un élément JSX. Il peut être créé de deux manières :

- **Fonctionnel** : une fonction fléchée qui retourne un élément JSX.
- **Classe** : une classe qui hérite de `React.Component` et qui implémente une méthode `render()`. Depuis React 16.8, il est recommandé d'utiliser les fonctions pour créer des composants.

### Composant fonctionnel

```jsx
import React from "react";

// Par convention les composants fonctionnels commencent par une majuscule
const MonComposant = () => {
  {
    /* A la racine du template il ne peut y avoir qu'un element */
  }
  return

  <div>Mon composant</div>
  <div>Mon composant</div>;
};

export default MonComposant; // obligatoire pour pouvoir importer le composant
```

### Les props

Pour passer des props vous pouvez les passer en tant qu'attributs de l'élément JSX.

```jsx
import React from "react";

const MonComposant = (props) => {
  return <div>{props.texte}</div>;
};
```

Dans le composant parent :

```jsx
import React from "react";

const Parent = () => {
  return <MonComposant texte="Hello world" />;
};
```

Dans le composant on utilise l'objet props pour accéder aux valeurs passées.

### Le state

Le state d'un composant est géré par la méthode `useState` de React. On dit que cette methode est un `hook`. Cette méthode retourne un tableau avec deux éléments : la valeur du state et une fonction pour la modifier.

```jsx
import React, { useState } from "react";

const MonComposant = () => {
  const [compteur, setCompteur] = useState(0);

  return (
    <div>
      <p>Compteur : {compteur}</p>
      <button onClick={() => setCompteur(compteur + 1)}>Incrémenter</button>
    </div>
  );
};
```
