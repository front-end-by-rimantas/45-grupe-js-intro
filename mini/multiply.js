console.clear();

function multiply(a, b) {
    if (typeof a !== 'number' || !isFinite(a)) {
        return 'ERROR: pirmas parametras privalo buti normalus skaicius.';
    }

    if (typeof b !== 'number' || !isFinite(b)) {
        return 'ERROR: antras parametras privalo buti normalus skaicius.';
    }

    const rez = a * b;
    return rez;
}

console.log(multiply('labas', 2));
console.log(multiply('5', 2));
console.log(multiply([], 2));
console.log(multiply(true, 2));
console.log(multiply(false, 2));
console.log(multiply(multiply, 2));
console.log(multiply(undefined, 2));
console.log(multiply(7, 'labas'));
console.log(multiply(7, '5'));
console.log(multiply(7, []));
console.log(multiply(7, true));
console.log(multiply(7, false));
console.log(multiply(7, multiply));
console.log(multiply(7, undefined));
console.log(multiply(NaN, 2));
console.log(multiply(Infinity, 2));
console.log(multiply(-Infinity, 2));
console.log(multiply(7, NaN));
console.log(multiply(7, Infinity));
console.log(multiply(7, -Infinity));

console.log('------------');
console.log(multiply(2, 2), '->', 4);
console.log(multiply(7, 5), '->', 35);
console.log(multiply(-7, 5), '->', -35);
console.log(multiply(7, -5), '->', -35);
console.log(multiply(-7, -5), '->', 35);
console.log(multiply(0, -5), '->', 0);
console.log(multiply(0, 5), '->', 0);
console.log(multiply(-5, 0), '->', 0);
console.log(multiply(5, 0), '->', 0);
console.log(multiply(0.5, 0.5), '->', 0.25);
console.log('------------');