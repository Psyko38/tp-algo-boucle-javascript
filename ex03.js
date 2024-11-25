function multiplyArray(arr, multiplier) {
    temp = [];
    for (let i = 0; i < arr.length; i++) {
        temp.push(arr[i] * multiplier); // push pour envoiller dans la list temp
    }
    return temp;
}

// Exemples de test :
console.log(multiplyArray([1, 2, 3], 2)); // Résultat attendu : [2, 4, 6]
console.log(multiplyArray([4, 0, -3], 3)); // Résultat attendu : [12, 0, -9]
