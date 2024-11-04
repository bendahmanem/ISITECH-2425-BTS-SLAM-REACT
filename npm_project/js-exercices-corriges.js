// Exercice 1: Variables et Strings
// Solution utilisant la concaténation de strings avec template literals
function salutation(prenom, nom) {
    return `Bonjour ${prenom} ${nom}!`;
}

// Tests
console.log(salutation("Jean", "Dupont")); // Affiche: "Bonjour Jean Dupont!"

// Exercice 2: Manipulation de Strings
// Solution utilisant une regex pour compter les voyelles
function compterVoyelles(texte) {
    const voyelles = texte.toLowerCase().match(/[aeiouy]/g);
    return voyelles ? voyelles.length : 0;
}

// Tests
console.log(compterVoyelles("bonjour")); // Affiche: 3

// Exercice 3: Tableaux - Somme
// Solution utilisant la méthode reduce
function sommeTableau(nombres) {
    return nombres.reduce((acc, curr) => acc + curr, 0);
}

// Tests
console.log(sommeTableau([1, 2, 3, 4, 5])); // Affiche: 15

// Exercice 4: Tableaux - Filtrage
// Solution utilisant la méthode filter
function filtrerPairs(nombres) {
    return nombres.filter(nombre => nombre % 2 === 0);
}

// Tests
console.log(filtrerPairs([1, 2, 3, 4, 5, 6])); // Affiche: [2, 4, 6]

// Exercice 5: Strings - Palindrome
// Solution en comparant la string avec sa version inversée
function estPalindrome(texte) {
    const texteNettoye = texte.toLowerCase().replace(/[^a-z0-9]/g, '');
    const texteInverse = texteNettoye.split('').reverse().join('');
    return texteNettoye === texteInverse;
}

// Tests
console.log(estPalindrome("kayak")); // Affiche: true
console.log(estPalindrome("bonjour")); // Affiche: false

// Exercice 6: Fonctions - Factorial
// Solution avec une approche récursive
function factoriel(n) {
    if (n <= 1) return 1;
    return n * factoriel(n - 1);
}

// Tests
console.log(factoriel(5)); // Affiche: 120

// Exercice 7: Tableaux et Strings
// Solution utilisant split, reverse et join
function inverserPhrase(phrase) {
    return phrase.split(' ').reverse().join(' ');
}

// Tests
console.log(inverserPhrase("Bonjour le monde")); // Affiche: "monde le Bonjour"

// Exercice 8: Manipulation de Tableaux
// Solution avec une boucle pour comparer les éléments consécutifs
function plusGrandEcart(nombres) {
    let maxEcart = 0;
    for (let i = 1; i < nombres.length; i++) {
        const ecart = Math.abs(nombres[i] - nombres[i-1]);
        maxEcart = Math.max(maxEcart, ecart);
    }
    return maxEcart;
}

// Tests
console.log(plusGrandEcart([1, 5, 8, 15, 17])); // Affiche: 7

// Exercice 9: Strings et Tableaux
// Solution utilisant un objet pour compter les occurrences
function compterMots(phrase) {
    return phrase.split(' ').reduce((acc, mot) => {
        acc[mot] = (acc[mot] || 0) + 1;
        return acc;
    }, {});
}

// Tests
console.log(compterMots("le chat le chien chat")); // Affiche: { le: 2, chat: 2, chien: 1 }

// Exercice 10: Fonctions Avancées
// Solution itérative pour la suite de Fibonacci
function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    
    const result = [0, 1];
    for (let i = 2; i < n; i++) {
        result.push(result[i-1] + result[i-2]);
    }
    return result;
}

// Tests
console.log(fibonacci(6)); // Affiche: [0, 1, 1, 2, 3, 5]

// Test de tous les exercices avec des exemples supplémentaires
console.log("\nTests supplémentaires :");
console.log(salutation("Marie", "Martin")); // Bonjour Marie Martin!
console.log(compterVoyelles("JavaScript")); // 3
console.log(sommeTableau([10, 20, 30])); // 60
console.log(filtrerPairs([1, 3, 5, 7, 8, 10, 12])); // [8, 10, 12]
console.log(estPalindrome("Radar")); // true
console.log(factoriel(4)); // 24
console.log(inverserPhrase("Je code en JavaScript")); // "JavaScript en code Je"
console.log(plusGrandEcart([2, 4, 8, 16])); // 8
console.log(compterMots("je je je code code")); // { je: 3, code: 2 }
console.log(fibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
