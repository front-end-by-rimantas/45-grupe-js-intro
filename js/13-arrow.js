console.clear();
const pirmas = 7;
const antras = 5;

// function declaration
function sum(a, b) {
    return a + b;
}
console.log(`${pirmas} + ${antras} = ${sum(pirmas, antras)}`);

// anonymous function
const diff = function (a, b) {
    return a - b;
}
console.log(`${pirmas} - ${antras} = ${diff(pirmas, antras)}`);

// arrow function
const multi = (a, b) => {
    return a * b;
}
console.log(`${pirmas} * ${antras} = ${multi(pirmas, antras)}`);

// jeigu, logikos bloke yra tik 1 statement'as
// galima nerasyti: {return}
const div = (a, b) => a / b;
console.log(`${pirmas} / ${antras} = ${div(pirmas, antras)}`);

// jeigu, parametru bloke yra tik 1 parametras
// galima nerasyti: ()
const square = a => a * a;
console.log(`${pirmas} ** 2 = ${square(pirmas)}`);
console.log(`${antras} ** 2 = ${square(antras)}`);

// Vardenis, Pavardenis -> V.P.

// function abbr(firstname, lastname) {
//     return `${firstname[0]}.${lastname[0]}.`;
// }

const gg = 'Good game';
console.log(gg);

const abbr = (s1, s2) => `${s1[0]}.${s2[0]}.`;

console.log(abbr('Vardenis', 'Pavardenis'));
console.log(abbr('Chuck', 'Norris'));

