function filterPositiveNumbers(arr) {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            temp.push(arr[i]);
        }
    }
    return temp;
}

// Exemples de test :
console.log(filterPositiveNumbers([-3, 5, -1, 2])); // Résultat attendu : [5, 2]
console.log(filterPositiveNumbers([-1, -2, -3])); // Résultat attendu : []
