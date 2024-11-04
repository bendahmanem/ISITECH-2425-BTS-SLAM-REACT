# Pre requis React

## Le DOM

Le DOM : Cette notion importante s’applique dans l’environnement d’un navigateur web. Le DOM est l’interface de programmation qui permet de modifier un document web. Il s’agit d’un arbre dans lequel nous retrouvons les éléments présents dans une page. Chaque élément de cet arbre est un nœud, nous parlons également de DOM tree. Le nœud racine dans le contexte d’une page web est la balise `<html>`et elle possède deux enfants directs `<head>` et `<body>`.

Le DOM nous permet d'interagir avec les elements d'une page web avec son API :

```javascript
document.getElementById("id"); // Retourne un élément par son id
```

## Definir une variable en JavaScript

```js
var maVariable = "Hello World";
```

Une variable déclarée avec `var` a une porteé globale ou de fonction. Elle peut être modifiée n'importe où dans le script.

```js
const maConstante = "Hello World";
```

Une variable déclarée avec `const` a une portée de bloc. Elle ne peut pas être modifiée.

```js
let maVariable = "Hello World";
```

Une variable déclarée avec `let` a une portée de bloc. Elle peut être modifiée.

## Les types en javascript

Les types sont : number, string, boolean, undefined et null.

Ce sont des types primitifs ils sont passés en valeur.

### Les chaines de caractères (string)

```js
"".length; // 0
"Hello World".length; // 11

"Hello World".toUpperCase(); // HELLO WORLD
"Hello World".toLowerCase(); // hello world

"Hello World".charAt(0); // H
"Hello World"[0]; // H

"Hello World".substring(0, 5); // Hello

"Hello World".split(" "); // ["Hello", "World"]

"Hello World".replace("Hello", "Bonjour"); // Bonjour World

"Hello World".indexOf("World"); // 6

"Hello World".includes("World"); // true
```

### Les tableaux (array)

Ils servent a stocker des données de manière ordonnée.

```js
let tableau = [];

let tableauDeNoms = ["Jean", "Paul", "Marie"];

// ajout d'un élément
tableauDeNoms.push("Pierre");

// suppression du dernier élément et renvoie de l'élément supprimé
const pierrot = tableauDeNoms.pop(); // Pierre
console.log(pierrot); // Pierre
```

#### La fonction map

```js
let tableauDeNombres = [1, 2, 3, 4, 5];

let tableauDeNombresDoubles = tableauDeNombres.map((nombre) => nombre * 2);
```

### Les objets

Un objet en JavaScript est une collection de propriétés, où chaque propriété est composée d’une paire clé-valeur. La clé (ou nom de propriété) est une chaîne de caractères qui identifie la propriété, et la valeur est la donnée associée à cette propriété. La valeur peut être de n’importe quel type de données, y compris des nombres, des chaînes de caractères, des tableaux, d’autres objets, ou même des fonctions.

```js
const user = {
  lastname: "Doe",
  firstname: "John",
  email: "mail@mail.com",
};
```

### Les classes

```js
class MaClasse {
  uneMethode() {
    console.log("hello from maClasse!");
  }
}

const objet = new MaClasse();
objet.uneMethode(); // "hello from maClasse!"
```

### Les fonctions

Ceci est une fonction javascript:

```js
function maFonction() {
  return "une fonction!";
}

const maFonction = () => {
  return "une chaine";
};

// la fonction retourne test * 2, ci-dessous le mot cle return est implicite
const maFonction = (test) => test * 2;

// equivalent a
function maFonction(test) {
  return test * 2;
}

const monTableau = [1, 2, 4];

monTableau.map(function (el) {
  return el * 2;
});
monTableau.map((el) => el * 2);
```

En js on appelle `callback` une fonction de rappel, une fonction passée en paramètre
d'une autre fonction.

### Les modules en JS

Les modules permettent de découper le code en plusieurs fichiers. Chaque fichier est un module.

```js

```
