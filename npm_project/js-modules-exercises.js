// === Exercice 1: Export/Import Simple ===
// Fichier: math.js
// Objectif: Créer un module basique avec des fonctions mathématiques
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;

// Fichier: main1.js
// Objectif: Importer et utiliser les fonctions mathématiques
import { add, subtract } from './math.js';

console.log(add(5, 3));      // 8
console.log(subtract(5, 3)); // 2

// === Exercice 2: Export par défaut ===
// Fichier: user.js
// Objectif: Utiliser export default et créer une classe
export default class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getInfo() {
        return `${this.name} is ${this.age} years old`;
    }
}

// Fichier: main2.js
// Objectif: Importer une classe par défaut
import User from './user.js';

const user = new User('John', 25);
console.log(user.getInfo()); // "John is 25 years old"

// === Exercice 3: Renommage lors de l'import ===
// Fichier: helpers.js
// Objectif: Pratiquer le renommage des imports/exports
export const formatDate = date => date.toLocaleDateString();
export const formatCurrency = amount => `$${amount.toFixed(2)}`;

// Fichier: main3.js
// Objectif: Utiliser les alias lors de l'import
import { formatDate as dateFormatter, formatCurrency as currencyFormatter } from './helpers.js';

console.log(dateFormatter(new Date())); // "11/4/2024"
console.log(currencyFormatter(42.5));   // "$42.50"

// === Exercice 4: Import de tous les exports ===
// Fichier: utils.js
// Objectif: Regrouper plusieurs exports dans un namespace
export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
export const reverse = str => str.split('').reverse().join('');
export const countWords = str => str.split(' ').length;

// Fichier: main4.js
// Objectif: Utiliser l'import avec namespace
import * as StringUtils from './utils.js';

console.log(StringUtils.capitalize('hello')); // "Hello"
console.log(StringUtils.reverse('hello'));    // "olleh"
console.log(StringUtils.countWords('hello world')); // 2

// === Exercice 5: Réexportation de modules ===
// Fichier: validators.js
// Objectif: Créer des fonctions de validation
export const isEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const isPhone = phone => /^\d{10}$/.test(phone);

// Fichier: index.js
// Objectif: Centraliser et réexporter des modules
export { add, subtract, multiply } from './math.js';
export { default as User } from './user.js';
export * from './validators.js';

// Fichier: main5.js
// Objectif: Importer depuis un point d'entrée centralisé
import { add, User, isEmail } from './index.js';

console.log(add(1, 2));              // 3
console.log(isEmail('test@test.com')); // true
const user = new User('Alice', 30);
console.log(user.getInfo());         // "Alice is 30 years old"

// === Exercice 6: Import dynamique ===
// Fichier: heavyModule.js
// Objectif: Créer un module lourd à charger
export const heavyOperation = data => {
    // Simulation d'une opération lourde
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(data.map(x => x * 2));
        }, 1000);
    });
};

// Fichier: main6.js
// Objectif: Utiliser l'import dynamique
async function loadModule() {
    try {
        const module = await import('./heavyModule.js');
        const result = await module.heavyOperation([1, 2, 3]);
        console.log(result); // [2, 4, 6]
    } catch (error) {
        console.error('Failed to load module:', error);
    }
}

loadModule();
