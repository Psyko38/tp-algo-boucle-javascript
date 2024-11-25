function calculateAverage(arr) {
    let temp = arr.length;
    let temp2 = 0;
    for (let i = 0; i < arr.length; i++) {
        temp2 += arr[i];
    }
    return temp2 / temp;
}

// Exemples de test:
console.log(calculateAverage([2, 4, 6, 8])); // Résultat attendu : 5
console.log(calculateAverage([10, 20, 30])); // Résultat attendu : 20
