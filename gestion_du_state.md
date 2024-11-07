# <u>Gestion du State avec React</u>

## Introduction

La gestion du state concerne la façon dont on va gérer les données dans notre application. En React, le state est un objet qui contient les données de notre application. Il est propre à un composant et peut être modifié par ce composant. Lorsque le state est modifié, React met à jour le DOM pour refléter ces changements.

La gestion de l’état est l’un des aspects cruciaux de toute application React et front-end en général. Il s’agit de déterminer comment stocker, mettre à jour et partager les données au sein de l’application. Dans ce chapitre, nous explorerons les différentes solutions de gestion de l’état disponibles dans le contexte de React.

## Les différentes solutions de gestion de l’état

Il existe plusieurs approches pour gérer l’état dans une application React, chacune ayant ses avantages et ses cas d’utilisation spécifiques. Une idée qui revient souvent est de regrouper l’ensemble des données dans un état global qui peut lui même être découpé en sous-états.

On parle ici d’un état qui doit être partagé dans toute l’application, à ne pas confondre avec l’état local d’un composant qui reste, lui, spécifique à un composant (avec useState par exemple). React fournit une API appelée Context qui permet de partager un état entre différents composants, mais cette approche rencontre parfois ses limites et on peut avoir besoin d’une librairie de gestion d’état. Là encore, de nombreuses solutions existent, les plus connues sont Redux et MobX.

Faisons d’abord un tour des différentes solutions qui existent et que vous pourrez explorer dans vos différents projets. Puis, nous nous attarderons un peu plus sur Redux et MobX.

### 1. L’état serveur (server state) et l’état client (client state)

Quand on dispose d’un store ou d’un objet global pour stocker l’état de l’application, on peut être tenté de tout stocker à cet endroit, qu’il s’agisse de l’état de l’interface utilisateur, de la liste des derniers articles remontés par une API, ou encore de données métier. C’est ce qu’ont fait beaucoup de développeurs React pendant longtemps, mais ceci est aujourd’hui considéré comme une mauvaise pratique.

Les notions d’état serveur et d’état client ont fait leur apparition. Pour l’état serveur, on fait souvent référence à ce qui vient du back-end et qui doit potentiellement être mis en cache pour une durée déterminée. L’état client concerne, lui, toutes les informations qui n’ont pas besoin d’être stockées sur le serveur, mais qui sont nécessaires pour l’interaction utilisateur actuelle. Cela pourrait inclure des éléments tels que l’élément actuellement sélectionné dans une liste déroulante, si un menu est ouvert ou fermé, ou la valeur actuelle d’un champ de saisie.

### 2. Le Context API

Le Context API est une fonctionnalité de React qui permet de partager l’état entre des composants qui ne sont pas directement liés par une relation parent-enfant. Il est souvent utilisé pour partager des données globales qui doivent être accessibles à différents niveaux de l’arborescence des composants.

### 3. Redux

Redux est une bibliothèque de gestion d’état qui offre une approche centralisée pour stocker et gérer l’état de l’application. Il est particulièrement utile pour les applications de grande taille avec un état complexe et partagé entre de nombreux composants.

### 4. MobX

MobX est une autre bibliothèque de gestion d’état qui permet de rendre les composants réactifs aux changements d’état : elle les suit de manière fine. Ces états sont observables et n’importe quelle partie de votre UI qui observe cet état est automatiquement mise à jour lorsqu’il change. MobX offre une approche plus intuitive et moins rigide que Redux, mais le choix d’utiliser l’une ou l’autre dépend des besoins et préférences du projet.

### 5. Recoil

Recoil est une bibliothèque de gestion d’état pour React qui offre une approche fondée sur des « atomes » et des « sélecteurs ». Les atomes représentent des unités individuelles d’état, tandis que les sélecteurs permettent la dérivation de l’état ou la transformation de cet état. Recoil permet une gestion d’état plus locale et modulaire que d’autres solutions. Cela peut rendre les applications plus performantes et maintenables, surtout lorsqu’elles deviennent complexes. La conception de Recoil vise à fournir cohérence et flexibilité tout en s’intégrant étroitement avec les fonctionnalités de React.

6. Zustand
   Zustand est une petite bibliothèque de gestion d’état pour JavaScript et React qui privilégie une approche minimaliste et simple. Au lieu d’une architecture lourde comme d’autres solutions, Zustand offre un store léger avec une API concise, permettant de créer et de gérer l’état avec quelques fonctions. On peut définir et mettre à jour l’état dans un store central sans avoir besoin de réducteurs ou d’actions explicites. Grâce à sa simplicité et sa légèreté, Zustand est souvent choisi pour des projets qui recherchent rapidité de mise en place et performance, sans la complexité d’autres solutions plus robustes.

## L'association du contexte et des hooks d'état

Pour creer un contexte :

```jsx
import { createContext } from "react";

export const myContext = createContext();
```

A la creation du contexte, ce dernier se voit doter de deux composants : le Provider et le Consumer.

Le Provider permet de fournir des données à l'ensemble de l'application:

```jsx
export default const MyContextProvider = ({ children }) => {
  const [state, setState] = useState("Hello World");
  return (
    <myContext.Provider value={{ state, setState }}>
      {children}
    </myContext.Provider>
  );
};
```

La prop children permet de passer des composants enfants au composant parent:

```jsx
const Somecomponent = () => {
  return (
    <>
      <Navbar />
      <AnotherComponent>
        <YetAnotherComponent />
      </AnotherComponent>
      <Outlet />
      <Footer />
    </>
  );
};
// Au sein du composant AnotherComponent, on peut afficher le composant YetAnotherComponent en utilisant la prop children:
const AnotherComponent = ({ children }) => {
  return (
    <>
      <h1>Another Component</h1>
      {children}
    </>
  );
};
```

Il suffit dans le fichier main.jsx:

```jsx
createRoot(document.getElementById("root")).render(
    <StrictMode>
    <MyContextProvider>
        <RouterProvider router={router}/>
    </MyContextProvider>
        </StrictMode>
```
