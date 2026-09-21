function countVowels(str) {
    const vowels = "aeiou";
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("Hello"));
