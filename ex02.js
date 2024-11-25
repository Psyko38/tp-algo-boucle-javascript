function countEvenNumbers(arr) {
    let temp = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            // modulo de 2 pour tester si le nombre et paire
            temp++;
        }
    }
    return temp;
}

// Exemples de test :
console.log(countEvenNumbers([1, 2, 3, 4])); // Résultat attendu : 2
console.log(countEvenNumbers([7, 11, 19])); // Résultat attendu : 0
