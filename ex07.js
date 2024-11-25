function countOccurrences(arr, target) {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            temp++;
        }
    }
    return temp;
}

// Exemples de test:
console.log(countOccurrences([1, 2, 2, 3], 2)); // Résultat attendu : 2
console.log(countOccurrences([5, 5, 5, 1], 5)); // Résultat attendu : 3
