let letters = ['a', 'b', 'c'];
letters.splice(1, 0, 'x', 'y');

console.log(letters);

letters.splice(1, 1);
console.log(letters);

letters.splice(2, 1, 'q');
console.log(letters);

