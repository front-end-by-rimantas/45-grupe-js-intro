console.clear();

function biggestNumber(list) {
    // VALIDACIJOS
    if (!Array.isArray(list)) {
        return 'ERROR: duok array tipo reiksme.';
    }

    if (list.length === 0) {
        return 'ERROR: Pateiktas sąrašas negali būti tuščias.';
    }

    // LOGIKA
    let max = -Infinity;

    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        if (typeof item !== 'number' || !isFinite(item)) {
            continue;
        }

        if (item > max) {
            max = item;
        }
    }

    // LOGIKOS REZULTATO VALIDACIJA
    if (max === -Infinity) {
        return 'ERROR: array neturi nei vieno normalaus skaiciaus';
    }

    // REZULTATO GRAZINIMAS
    return max;
}

console.log(biggestNumber(248562));
console.log(biggestNumber('labas'));
console.log(biggestNumber(true));
console.log(biggestNumber(false));
console.log(biggestNumber(biggestNumber));
console.log(biggestNumber());
console.log(biggestNumber(undefined));
console.log(biggestNumber(null));
console.log(biggestNumber({}));
console.log('-------------------------');
console.log(biggestNumber([]));
console.log('-------------------------');
console.log(biggestNumber([1]), '->', 1);
console.log(biggestNumber([2]), '->', 2);
console.log(biggestNumber([777]), '->', 777);
console.log(biggestNumber([1, 2, 3]), '->', 3);
console.log(biggestNumber([11, 22, 33]), '->', 33);
console.log(biggestNumber([11, 22, 33, 44]), '->', 44);
console.log(biggestNumber([-5, 78, 14, 0, 18]), '->', 78);
console.log(biggestNumber([-1, -2, -3, -4, -5, -6, -7, -8]), '->', -1);
console.log(biggestNumber([-333, -44, -5, -66, -777, -8]), '->', -5);
console.log(biggestNumber([-5, -333, -44, -66, -777, -8]), '->', -5);
console.log(biggestNumber([-333, -44, -66, -777, -8, -5]), '->', -5);
console.log('-------------------------');
console.log(biggestNumber(['labas']));
console.log(biggestNumber([true, false]));
console.log(biggestNumber([true, false, undefined, null, biggestNumber, [], {}, 'asd', '', NaN, Infinity, -Infinity]));
console.log(biggestNumber([5, true, false, undefined, null, biggestNumber, [], {}, 'asd', '', NaN, Infinity, -Infinity]));