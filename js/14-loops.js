console.clear();

/* for, for-of, while, do-while, for-in */

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