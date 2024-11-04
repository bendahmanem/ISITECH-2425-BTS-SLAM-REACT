# Solutions des exercices sur les tableaux JavaScript

## Exercice 1 : Longueur d'un tableau

### Énoncé
Déclarez une fonction `longueurTableau` qui prend un tableau `arr` et retourne la longueur du tableau.

### Solution
```javascript
function longueurTableau(arr) {
    return arr.length;
}

// Tests
console.log(longueurTableau([1, 2, 3])); // 3
console.log(longueurTableau([])); // 0
console.log(longueurTableau(['a', 'b', 'c', 'd'])); // 4
```

### Explications
- La solution utilise la propriété `length` qui est disponible sur tous les tableaux JavaScript
- Cette propriété retourne le nombre d'éléments dans le tableau
- Elle fonctionne avec des tableaux de n'importe quel type d'éléments
- Pour un tableau vide, elle retourne 0

### Points clés
- La propriété `length` est accessible en lecture seule
- Elle retourne toujours un nombre entier
- C'est une opération O(1) en termes de complexité

## Exercice 2 : Recherche d'élément

### Énoncé
Déclarez une fonction générique `rechercherElement` qui :
- Prend un tableau `arr` et un élément `element` à rechercher
- Utilise la méthode `indexOf`
- Retourne la position de l'élément ou -1 si non trouvé

### Solution
```javascript
function rechercherElement(arr, element) {
    return arr.indexOf(element);
}

// Tests avec différents types
const nombres = [1, 2, 3, 4, 5];
console.log(rechercherElement(nombres, 3));  // 2
console.log(rechercherElement(nombres, 6));  // -1

const chaines = ['pomme', 'banane', 'orange'];
console.log(rechercherElement(chaines, 'banane'));  // 1
console.log(rechercherElement(chaines, 'kiwi'));    // -1

const mixte = [1, 'deux', true, null, undefined];
console.log(rechercherElement(mixte, true));        // 2
console.log(rechercherElement(mixte, null));        // 3
console.log(rechercherElement(mixte, 'inexistant')); // -1
```

### Explications détaillées
1. **Utilisation de indexOf**
   - `indexOf` parcourt le tableau de gauche à droite
   - Retourne l'index de la première occurrence trouvée
   - Retourne -1 si l'élément n'est pas trouvé

2. **Comportement avec différents types**
   - Fonctionne avec tous les types de données
   - Utilise une comparaison stricte (`===`)
   - Distingue entre `null` et `undefined`

3. **Points d'attention**
   - Ne trouve que la première occurrence
   - Sensible à la casse pour les chaînes
   - Ne trouve pas les objets similaires mais différents

### Variante avec dernière occurrence
```javascript
function rechercherDernierElement(arr, element) {
    return arr.lastIndexOf(element);
}

// Test avec doublons
const avecDoublons = [1, 2, 3, 2, 4];
console.log(rechercherDernierElement(avecDoublons, 2));  // 3
```

### Bonnes pratiques
1. **Validation des entrées**
```javascript
function rechercherElementSecurise(arr, element) {
    if (!Array.isArray(arr)) {
        throw new Error('Le premier argument doit être un tableau');
    }
    return arr.indexOf(element);
}
```

2. **Version avec message personnalisé**
```javascript
function rechercherElementAvecMessage(arr, element) {
    const index = arr.indexOf(element);
    return index !== -1 
        ? `L'élément ${element} a été trouvé à l'index ${index}`
        : `L'élément ${element} n'a pas été trouvé dans le tableau`;
}

// Test
console.log(rechercherElementAvecMessage([1, 2, 3], 2));
// "L'élément 2 a été trouvé à l'index 1"
```

### Pour aller plus loin
- Pour une recherche plus complexe, on peut utiliser `find()` ou `findIndex()`
- Pour vérifier juste la présence, `includes()` est plus approprié
- Pour plusieurs occurrences, `filter()` peut être utilisé

```javascript
// Exemple avec find
const nombres = [1, 2, 3, 4, 5];
const pair = nombres.find(n => n % 2 === 0); // 2

// Exemple avec includes
console.log(nombres.includes(3)); // true

// Exemple avec filter
const toutesOccurrences = nombres.filter(n => n % 2 === 0); // [2, 4]
```
