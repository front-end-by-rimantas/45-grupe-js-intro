console.clear();

function letters(str, step) {
    if (typeof str !== 'string') {
        return 'Pirmasis kintamasis yra netinkamo tipo.';
    }

    if (typeof step !== 'number') {
        return 'Antrasis kintamasis yra netinkamo tipo.';
    }
    if (!isFinite(step)) {
        return 'Antrasis kintamasis turi buti normalus skaicius.';
    }
    if (step > str.length) {
        return 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.';
    }
    if (step <= 0) {
        return 'Antrasis kintamasis turi būti didesnis už nulį.';
    }
    if (step % 1 !== 0) {
        return 'Antrasis kintamasis turi būti sveikasis skaicius.';
    }

    let shortText = '';

    for (let i = step - 1; i < str.length; i += step) {
        shortText += str[i];
    }

    return shortText;
}

{
    console.log(letters());
    console.log(letters(1561, 2));
    console.log(letters(undefined, 2));
    console.log(letters(Infinity, 2));
    console.log(letters(NaN, 2));
    console.log(letters(true, 2));
    console.log(letters(false, 2));
    console.log(letters(null, 2));
    console.log(letters([], 2));
    console.log(letters({}, 2));
    console.log(letters(letters, 2));
    console.log(letters('abc'));
    console.log(letters('abc', undefined));
    console.log(letters('abc', ''));
    console.log(letters('abc', 'asd'));
    console.log(letters('abc', true));
    console.log(letters('abc', false));
    console.log(letters('abc', letters));
    console.log(letters('abc', null));
    console.log(letters('abc', []));
    console.log(letters('abc', {}));
    console.log(letters('abc', Infinity));
    console.log(letters('abc', -Infinity));
    console.log(letters('abc', NaN));
    console.log(letters('abc', 4));
    console.log(letters('abc', 0));
    console.log(letters('abcdefghijkl', 1.5));
}
console.log('-------------');

console.log(letters('abcdefg', 1), '->', 'abcdefg');
console.log(letters('abcdefg', 2), '->', 'bdf');
console.log(letters('abcdefghijkl', 3), '->', 'cfil');
console.log(letters('abcdefghijkl', 4), '->', 'dhl');
console.log(letters('abcdefghijkl', 5), '->', 'ej');
console.log(letters('abcdefghijkl', 6), '->', 'fl');

// console.log(letters('abcdefg', -1), '->', '...');
// console.log(letters('abcdefg', -2), '->', '...');
// console.log(letters('abcdefghijkl', -3), '->', '...');
// console.log(letters('abcdefghijkl', -4), '->', '...');
// console.log(letters('abcdefghijkl', -5), '->', '...');
// console.log(letters('abcdefghijkl', -6), '->', '...');

