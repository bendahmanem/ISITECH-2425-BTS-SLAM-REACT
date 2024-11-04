# Guide des Imports/Exports en JavaScript Moderne

## Table des matières
- [Export](#export)
  - [Export nommé](#export-nommé)
  - [Export par défaut](#export-par-défaut)
  - [Réexportation](#réexportation)
- [Import](#import)
  - [Import nommé](#import-nommé)
  - [Import par défaut](#import-par-défaut)
  - [Import avec alias](#import-avec-alias)
  - [Import de tous les exports](#import-de-tous-les-exports)
  - [Import dynamique](#import-dynamique)

## Export

### Export nommé

L'export nommé permet d'exporter plusieurs valeurs depuis un module. Chaque export conserve son nom.

```javascript
// Export direct
export const maFonction = () => { /* ... */ };
export const maVariable = 42;
export class MaClasse { /* ... */ }

// Export groupé
const fonction1 = () => { /* ... */ };
const fonction2 = () => { /* ... */ };

export { fonction1, fonction2 };

// Export avec renommage
const maFonction = () => { /* ... */ };
export { maFonction as autreNom };
```

### Export par défaut

L'export par défaut permet d'exporter une valeur principale depuis un module. Un module ne peut avoir qu'un seul export par défaut.

```javascript
// Export par défaut d'une fonction
export default function() { /* ... */ }

// Export par défaut d'une classe
export default class { /* ... */ }

// Export par défaut d'une valeur
const maConfig = { /* ... */ };
export default maConfig;

// Export par défaut avec nom (moins courant)
const maFonction = () => { /* ... */ };
export { maFonction as default };
```

### Réexportation

La réexportation permet de regrouper des exports de différents modules dans un point d'entrée unique.

```javascript
// Réexporte tous les exports nommés
export * from './autreModule.js';

// Réexporte des exports spécifiques
export { fonction1, fonction2 } from './module1.js';

// Réexporte avec renommage
export { original as alias } from './module2.js';

// Réexporte un export par défaut
export { default as MonComposant } from './Composant.js';

// Combine réexportation et exports locaux
export * from './module1.js';
export const nouvelleFunction = () => { /* ... */ };
```

## Import

### Import nommé

L'import nommé permet d'importer des exports nommés spécifiques.

```javascript
// Import d'exports nommés spécifiques
import { fonction1, fonction2 } from './module.js';

// Import avec destructuration
import { fonction1 as f1, fonction2 as f2 } from './module.js';
```

### Import par défaut

L'import par défaut permet d'importer l'export par défaut d'un module.

```javascript
// Import par défaut
import MaFonction from './module.js';

// Import par défaut avec imports nommés
import MonComposant, { util1, util2 } from './module.js';
```

### Import avec alias

L'import avec alias permet de renommer les imports pour éviter les conflits.

```javascript
// Renommage d'imports nommés
import { longFunctionName as fn } from './module.js';

// Renommage d'import par défaut (moins courant)
import { default as MonAlias } from './module.js';
```

### Import de tous les exports

L'import avec namespace permet d'importer tous les exports sous un objet unique.

```javascript
// Import de tous les exports nommés
import * as MonModule from './module.js';

// Utilisation
MonModule.fonction1();
MonModule.fonction2();
```

### Import dynamique

L'import dynamique permet de charger des modules à la demande.

```javascript
// Import dynamique simple
import('./module.js')
  .then(module => {
    module.fonction1();
  })
  .catch(error => {
    console.error('Erreur de chargement:', error);
  });

// Import dynamique avec async/await
async function chargerModule() {
  try {
    const module = await import('./module.js');
    module.fonction1();
  } catch (error) {
    console.error('Erreur de chargement:', error);
  }
}
```

## Bonnes pratiques

1. **Nommage**
   - Utilisez des noms descriptifs et explicites
   - Suivez une convention cohérente (PascalCase pour les classes, camelCase pour les fonctions)

2. **Organisation**
   - Un export par défaut par fichier maximum
   - Préférez les exports nommés pour une meilleure maintenabilité
   - Regroupez les exports liés dans des modules cohérents

3. **Performance**
   - Utilisez l'import dynamique pour le code rarement utilisé
   - Évitez d'importer des modules entiers si vous n'avez besoin que de quelques fonctions

4. **Maintenance**
   - Documentez vos exports importants
   - Maintenez un point d'entrée clair (index.js) pour les grosses bibliothèques
   - Évitez les dépendances circulaires

## Configuration

Pour utiliser les modules ES en Node.js, ajoutez dans votre package.json :
```json
{
  "type": "module"
}
```

Pour le web, utilisez le type module dans vos balises script :
```html
<script type="module" src="main.js"></script>
```
