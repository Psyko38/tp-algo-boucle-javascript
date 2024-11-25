function containsElement(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
        }
    }
    return false;
}

// Exemples de test:
console.log(containsElement([1, 2, 3], 2)); // Résultat attendu : true
console.log(containsElement([4, 5, 6], 1)); // Résultat attendu : false
