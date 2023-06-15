console.clear();

/* array: for, for-of, while, do-while */
/* object: for-in */

// FOR
console.log('\nFOR ----------------------');
const marks1 = [10, 2, 8, 4, 6];
let sum1 = 0;

for (let i = 0; i < marks1.length; i++) {
    const mark = marks1[i];
    sum1 += mark;
    // console.log(mark);
}
console.log('sum:', sum1);

// FOR-OF
console.log('\nFOR-OF ----------------------');
const marks2 = [10, 2, 8, 4, 6];
let sum2 = 0;

for (const mark of marks2) {
    sum2 += mark;
    // console.log(mark);
}

console.log('sum:', sum2);

// WHILE
console.log('\nWHILE ----------------------');
const marks3 = [10, 2, 8, 4, 6];
let sum3 = 0;
let i3 = 0;

while (i3 < marks3.length) {
    const mark = marks3[i3];
    sum3 += mark;
    i3++;
}

console.log('sum:', sum3);

// DO-WHILE
console.log('\nDO-WHILE ----------------------');
const marks4 = [10, 2, 8, 4, 6];
let sum4 = 0;
let i4 = 0;

do {
    const mark = marks4[i4];
    sum4 += mark;
    i4++;
} while (i4 < marks4.length)

console.log('sum:', sum4);

// FOR-IN
console.log('\nFOR-IN ----------------------');
const user = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
    x: 'xXx',
    address: 'Gatve, Miestas',
};

console.log('START');

const userKeys = Object.keys(user);
for (let i = 0; i < userKeys.length; i++) {
    const key = userKeys[i];
    console.log(key, ':', user[key]);
}

console.log('---------------------------------');

for (const key in user) {
    console.log(key, ':', user[key]);
}

console.clear();

function arSuktiCikla(iteracija) {
    return iteracija < 100;
}

let i = 10;
for (; arSuktiCikla(i);) {
    console.log(i);

    i += 10;
}

console.clear();

// Ciklas sukasi kol triju is eiles bitu suma yra didesne uz 1.

function arSvieciaGirlianda(list, index) {
    const arPaskutinisTrio = index < list.length - 2;
    const suma = list[index] + list[index + 1] + list[index + 2];
    const arGeraTrioSuma = suma > 1;
    return arPaskutinisTrio && arGeraTrioSuma;
}

const bits = [1, 0, 1, 1, 0, 0, 1, 1, 1, 0];
for (let i = 0; arSvieciaGirlianda(bits, i); i++) {
    const trioSum = bits[i] + bits[i + 1] + bits[i + 2];
    console.log(i, '-->', bits[i], bits[i + 1], bits[i + 2], '=', trioSum);
}

console.log('---------------');
// Ciklas spausdina tik tas poras, kur bitu suma didesne uz 1.

const bits2 = [1, 0, 1, 1, 0, 0, 1, 1, 1, 0];
for (let i = 0; i < bits2.length - 2; i++) {
    const trioSum = bits[i] + bits[i + 1] + bits[i + 2];
    if (trioSum < 2) {
        continue;
    }
    console.log(i, '-->', bits[i], bits[i + 1], bits[i + 2], '=', trioSum);
}
