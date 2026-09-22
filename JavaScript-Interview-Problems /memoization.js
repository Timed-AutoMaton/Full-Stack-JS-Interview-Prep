function createMemoSquare() {
    const cache = {};

    return function memoSquare(n) {
        if (cache[n] !== undefined) {
            console.log(`Cache hit for ${n}`);
            console.log(`📓 Cache:`, cache);   // 👈 ADD THIS
            return cache[n];
        } else {
            console.log(`Computing square of ${n}`);
            cache[n] = n * n;
            console.log(`📓 Cache:`, cache);   // 👈 ADD THIS
            return cache[n];
        }
    };
}

const memoSquare = createMemoSquare();

console.log(memoSquare(5));
console.log(memoSquare(5));
console.log(memoSquare(7));
console.log(memoSquare(5));
console.log(memoSquare(7));