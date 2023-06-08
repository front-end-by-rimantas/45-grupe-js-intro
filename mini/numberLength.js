console.clear();

function numberLength(number) {
    if (typeof number !== 'number') {
        return 'ERROR: duok skaiciu';
    }
    if (isNaN(number)) {
        return 'ERROR: duok normalu skaiciu, o ne NaN';
    }
    if (number === Infinity || number === -Infinity) {
        return 'ERROR: duok normalu skaiciu, o ne begalybe';
    }

    const numberAsString = '' + number;
    let size = numberAsString.length;

    // tikriname ar yra minusas?
    if (number < 0) {
        size--;
    }

    // tikriname ar skaicius yra desimtainis?
    if (number % 1 !== 0) {
        size--;
    }

    return size;
}

console.log(numberLength(true));
console.log(numberLength(false));
console.log(numberLength('asd'));
console.log(numberLength(NaN));
console.log(numberLength(Infinity));
console.log(numberLength(-Infinity));
console.log(numberLength(undefined));
console.log(numberLength());
console.log(numberLength([]));
console.log(numberLength(numberLength));
console.log('--------------------------------');
console.log(numberLength(5), '->', 1);
console.log(numberLength(781), '->', 3);
console.log(numberLength(37060123456), '->', 11);
console.log(numberLength(-5), '->', 1);
console.log(numberLength(-781), '->', 3);
console.log(numberLength(-37060123456), '->', 11);
console.log(numberLength(3.14), '->', 3);
console.log(numberLength(2.727), '->', 4);
console.log(numberLength(-3.14), '->', 3);
console.log(numberLength(-2.727), '->', 4);