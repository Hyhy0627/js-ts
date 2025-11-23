 console.log('video 32');

const sum = (a, b, c) => {
    console.log('run before return');
    if (typeof a !== 'number') {
        console.log('run empty return');
        return; // void
    }
    return a + b + c;
    console.log('run before return');
} // Arrow function with three parameters

console.log(sum(1, 2, 3)); // Outputs: 6
console.log(sum('1', 2, 3)); // Outputs: undefined 
console.log(sum(5)); // Outputs: NaN