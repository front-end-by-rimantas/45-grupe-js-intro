console.clear();
/*
TYPEOF - nusako duomens tipa
*/

function sum(a, b) {
    return a + b;
}

console.log(typeof 5);
console.log(typeof -5);
console.log(typeof 3.14);
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(typeof NaN);
console.log(typeof 'labas');
console.log(typeof true);
console.log(typeof false);
console.log(typeof sum);
console.log(typeof undefined);
console.log(typeof []);
console.log(typeof [1, 2]);
console.log(typeof ['a', 'b']);
console.log(typeof null);
console.log(typeof {});
console.log(typeof { name: 'Jonas' });
console.log(typeof '🚗');
console.log(typeof '');

console.log('------------');

const a = typeof 5;
console.log(a);
console.log(typeof a);

const b = typeof true;
console.log(b);
console.log(typeof b);