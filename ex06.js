function generateNumbers(n) {
    let temp = [];
    for (let i = 0; i < n; i++) {
        temp.push(i);
    }
    return temp;
}

// Exemples de test:
console.log(generateNumbers(5)); // Résultat attendu : [0, 1, 2, 3, 4]
console.log(generateNumbers(3)); // Résultat attendu : [0, 1, 2]
