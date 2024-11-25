function countVowels(str) {
    let temp = 0;
    let temp2 = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (
            temp2[i] === "a" ||
            temp2[i] === "e" ||
            temp2[i] === "i" ||
            temp2[i] === "o" ||
            temp2[i] === "u" ||
            temp2[i] === "y"
        ) {
            temp++;
        }
    }
    return temp;
}

// Exemples de test :
console.log(countVowels("hello")); // Résultat attendu : 2
console.log(countVowels("xyz")); // Résultat attendu : 1
