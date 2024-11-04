// Exercice 1: Variables et Strings
// Créez une fonction qui prend un prénom et un nom en paramètres
// et retourne une phrase de salutation
function salutation(prenom, nom) {
    // TODO: Retourner "Bonjour prenom nom!"
}

// Tests
console.log(salutation("Jean", "Dupont")); // Devrait afficher: "Bonjour Jean Dupont!"

// Exercice 2: Manipulation de Strings
// Créez une fonction qui compte le nombre de voyelles dans une chaîne
function compterVoyelles(texte) {
    // TODO: Retourner le nombre de voyelles (a,e,i,o,u,y)
}

// Tests
console.log(compterVoyelles("bonjour")); // Devrait afficher: 3

// Exercice 3: Tableaux - Somme
// Créez une fonction qui calcule la somme des nombres dans un tableau
function sommeTableau(nombres) {
    // TODO: Retourner la somme de tous les nombres
}

// Tests
console.log(sommeTableau([1, 2, 3, 4, 5])); // Devrait afficher: 15

// Exercice 4: Tableaux - Filtrage
// Créez une fonction qui retourne un nouveau tableau ne contenant que les nombres pairs
function filtrerPairs(nombres) {
    // TODO: Retourner un tableau ne contenant que les nombres pairs
}

// Tests
console.log(filtrerPairs([1, 2, 3, 4, 5, 6])); // Devrait afficher: [2, 4, 6]

// Exercice 5: Strings - Palindrome
// Créez une fonction qui vérifie si une chaîne est un palindrome
function estPalindrome(texte) {
    // TODO: Retourner true si le texte est un palindrome, false sinon
}

// Tests
console.log(estPalindrome("kayak")); // Devrait afficher: true
console.log(estPalindrome("bonjour")); // Devrait afficher: false

// Exercice 6: Fonctions - Factorial
// Créez une fonction qui calcule le factoriel d'un nombre
function factoriel(n) {
    // TODO: Retourner le factoriel de n
}

// Tests
console.log(factoriel(5)); // Devrait afficher: 120

// Exercice 7: Tableaux et Strings
// Créez une fonction qui inverse l'ordre des mots dans une phrase
function inverserPhrase(phrase) {
    // TODO: Retourner la phrase avec les mots dans l'ordre inverse
}

// Tests
console.log(inverserPhrase("Bonjour le monde")); // Devrait afficher: "monde le Bonjour"

// Exercice 8: Manipulation de Tableaux
// Créez une fonction qui trouve le plus grand écart entre deux nombres consécutifs dans un tableau
function plusGrandEcart(nombres) {
    // TODO: Retourner le plus grand écart entre deux nombres consécutifs
}

// Tests
console.log(plusGrandEcart([1, 5, 8, 15, 17])); // Devrait afficher: 7 (écart entre 8 et 15)

// Exercice 9: Strings et Tableaux
// Créez une fonction qui compte l'occurrence de chaque mot dans une phrase
function compterMots(phrase) {
    // TODO: Retourner un objet avec le compte de chaque mot
}

// Tests
console.log(compterMots("le chat le chien chat")); // Devrait afficher: { le: 2, chat: 2, chien: 1 }

// Exercice 10: Fonctions Avancées
// Créez une fonction qui génère la suite de Fibonacci jusqu'à n termes
function fibonacci(n) {
    // TODO: Retourner un tableau contenant les n premiers termes de la suite de Fibonacci
}

// Tests
console.log(fibonacci(6)); // Devrait afficher: [0, 1, 1, 2, 3, 5]
