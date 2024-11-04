# Les bases de React

Nous allons utiliser un outil appelé Vite pour créer notre application React. Vite est un outil de développement rapide pour les applications web modernes. Il est conçu pour être rapide et facile à utiliser.

Concretement :

- notre runtime JS : Node
- outil de build : Vite
- notre bibliothèque : React
- notre IDE : VSCode
- notre gestion de paquets : npm (pré installé avec Node)
  ```sh
   npm --version
  ```

Pour creer l'application :

```
npm create vite@latest my-react-app -- --template react
```

Il faut utiliser Node et npm pour installer Vite et React. Node est un environnement d'exécution JavaScript côté serveur. npm est un gestionnaire de paquets pour Node.

La commande :

```sh
npm install
```

va installer les dépendances de notre projet.

Pour démarrer l'application :

```sh
npm run dev
```

`npm run` permet d'exécuter des scripts définis dans le fichier package.json dans la section "scripts".

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "serve": "vite preview"
}
```

Il y a une exception pour le script `start` qui est exécuté par défaut avec `npm start`.

## JSX

JSX (JavaScript XML) est une extension de la syntaxe JavaScript. Il permet d'écrire du HTML dans du JavaScript. JSX produit des composants React.

```jsx
const element = <h1>Hello, world!</h1>;

const monComposant = () => {
  return <h1>Hello, world!</h1>;
}; //
```
