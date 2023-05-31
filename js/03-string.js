console.clear();

/*
STRING - tekstiniu simboliu grandinele, aka tekstas

Iniciavimo budai:
- viengubos kabutes ('')
- dvygubos kabutes ("")

Ilgis:
'stringas'.length
*/

const vardas = 'Jonas';
const vardas2 = "Maryte";

console.log(vardas);
console.log(vardas2);


const firstName = 'Ona';
const lastName = 'Onaityte';

// Ona Onaityte
const fullName = firstName + ' ' + lastName;
console.log(fullName);

// Sveiki, as esu Ona!
// Sveiki, as esu Jonas!
// Sveiki, as esu Maryte!
const rekiam = 'Sveiki, as esu ' + firstName + '!';

console.log(rekiam);

console.log('---------------------------');

// Vienguba kabute (').
const kabute1 = "Vienguba kabute (').";
console.log(kabute1);

// Dviguba kabute (").
const kabute2 = 'Dviguba kabute (").';
console.log(kabute2);

// Vienguba (') ir dviguba (") kabutes.
// Vienguba (') ir dvi
// guba (") kabutes.
const kabute12 = "Vienguba (') ir dvi" + 'guba (") kabutes.';
console.log(kabute12);

// Vienguba (') ir dviguba (") kabutes.
const kabute12_1 = 'Vienguba (\') ir dviguba (") kabutes.';
const kabute12_2 = "Vienguba (') ir dviguba (\") kabutes.";
const kabute12_3 = "Vienguba (\') ir dviguba (\") kabutes.";
const kabute12_4 = 'Vienguba (\') ir dviguba (\") kabutes.';
console.log(kabute12_1);
console.log(kabute12_2);
console.log(kabute12_3);
console.log(kabute12_4);

// Komentaras (//).
const comment1 = 'Komentaras (//).';
const comment2 = "Komentaras (//).";
console.log(comment1);
console.log(comment2);

// Backslash (\).
const back1 = 'Backslash (\\).';
const back2 = "Backslash (\\\\).";
console.log(back1);
console.log(back2);

/*
Labas
rytas,
Lietuva!
*/

// \n - new line (slenkasi eilute zemyn, bet lieka X-asy ten pat)
// \r - return (grizta i tos pacios eilutes prieki)
// \t - tab

const labas = 'Labas\n\
rytas,\n\
Lietuva!';
console.log(labas);

const HTML = '\
<header>\r\n\
\t<img src="#" alt="Logo" class="logo">\r\n\
\t<nav>\r\n\
\t\t<a href="#">Link</a>\r\n\
\t\t<a href="#">Link</a>\r\n\
\t\t<a href="#">Link</a>\r\n\
\t\t<a href="#">Link</a>\r\n\
\t</nav>\r\n\
</header>';
console.log(HTML);


console.clear();

// Vienguba (') ir dviguba (") kabutes.
const kabute3 = `Vienguba (') ir dviguba (") kabutes.`;
console.log(kabute3);

// Vienguba ('), dviguba (") ir backtick (`) kabutes.

const kabute4 = `Vienguba ('), dviguba (") ir backtick (\`) kabutes.`;
console.log(kabute4);

const backtickHTML = `<header>
    <img src="#" alt="Logo" class="logo">
    <nav>
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
    </nav>
</header>`;
console.log(backtickHTML);

const name = 'Martynas';
const age = 99;
const iLike1 = 'masinos';
const iLike2 = 'gamta';
const iLike3 = 'oro balionai';

console.clear();

// Sveiki, mano vardas [VARDAS], man yra [METAI] metai ir man labai patinka [KAS PATINKA], [KAS PATINKA] ir [KAS PATINKA]!

const martynas = "Sveiki, mano vardas " + name + ", man yra " + age + " metai ir man labai patinka " + iLike1 + ", " + iLike2 + " ir " + iLike3 + "!";
console.log(martynas);
console.log();

const martis = `Sveiki, mano vardas ${name}, man yra ${age} metai ir man labai patinka ${iLike1}, ${iLike2} ir ${iLike3}!`;
console.log(martis);

console.clear();


const daugiklis = 5;
const n1 = 1;
const n2 = 2;
const n3 = 3;
const n4 = 4;
const n5 = 5;
const n6 = 6;
const n7 = 7;
const n8 = 8;
const n9 = 9;
const n10 = 10;

const lentele1 = daugiklis + ' * ' + n1 + ' = ' + (daugiklis * n1) + '\r\n' + daugiklis + ' * ' + n2 + ' = ' + (daugiklis * n2) + '\r\n' + daugiklis + ' * ' + n3 + ' = ' + (daugiklis * n3) + '\r\n' + daugiklis + ' * ' + n4 + ' = ' + (daugiklis * n4) + '\r\n' + daugiklis + ' * ' + n5 + ' = ' + (daugiklis * n5) + '\r\n' + daugiklis + ' * ' + n6 + ' = ' + (daugiklis * n6) + '\r\n' + daugiklis + ' * ' + n7 + ' = ' + (daugiklis * n7) + '\r\n' + daugiklis + ' * ' + n8 + ' = ' + (daugiklis * n8) + '\r\n' + daugiklis + ' * ' + n9 + ' = ' + (daugiklis * n9) + '\r\n' + daugiklis + ' * ' + n10 + ' = ' + (daugiklis * n10);

console.log(lentele1);
console.log();

const lentele2 = `${daugiklis} * ${n1} = ${daugiklis * n1}
${daugiklis} * ${n2} = ${daugiklis * n2}
${daugiklis} * ${n3} = ${daugiklis * n3}
${daugiklis} * ${n4} = ${daugiklis * n4}
${daugiklis} * ${n5} = ${daugiklis * n5}
${daugiklis} * ${n6} = ${daugiklis * n6}
${daugiklis} * ${n7} = ${daugiklis * n7}
${daugiklis} * ${n8} = ${daugiklis * n8}
${daugiklis} * ${n9} = ${daugiklis * n9}
${daugiklis} * ${n10} = ${daugiklis * n10}`;

console.log(lentele2);

console.clear();

const multiplier = 3;
let number = 0;

const m1 = multiplier * n1;
const m2 = multiplier * n2;

const lentele3 = `
${multiplier} * ${++number} = ${multiplier * number}
${multiplier} * ${++number} = ${multiplier * number}
${multiplier} * ${++number} = ${multiplier * number}
${multiplier} * ${++number} = ${multiplier * number}
${multiplier} * ${++number} = ${multiplier * number}
${multiplier} * ${++number} = ${multiplier * number}
${multiplier} * ${++number} = ${multiplier * number}
${multiplier} * ${++number} = ${multiplier * number}
${multiplier} * ${++number} = ${multiplier * number}
${multiplier} * ${++number} = ${multiplier * number}
`;

console.log(lentele3);

let sum = 0;
let index = 0;

const lentele4 = `
${multiplier} * ${++index} = ${sum += multiplier}
${multiplier} * ${++index} = ${sum += multiplier}
${multiplier} * ${++index} = ${sum += multiplier}
${multiplier} * ${++index} = ${sum += multiplier}
${multiplier} * ${++index} = ${sum += multiplier}
${multiplier} * ${++index} = ${sum += multiplier}
${multiplier} * ${++index} = ${sum += multiplier}
${multiplier} * ${++index} = ${sum += multiplier}
${multiplier} * ${++index} = ${sum += multiplier}
${multiplier} * ${++index} = ${sum += multiplier}
`;

console.log(lentele4);

console.clear();

const empty = '     gg      ';
console.log(empty.length);
//                     11111
//           012345678901234
const str = 'Pavyzdys';
console.log(str, 8, '>>>', str.length);
console.log(str, 8, '>>>', str.lenght);

const raide1 = str[0];
console.log(raide1, 'P');
console.log('---------------');

let strIndex = 0;

console.log(str[strIndex++]);
console.log(str[strIndex++]);
console.log(str[strIndex++]);
console.log(str[strIndex++]);
console.log(str[strIndex++]);
console.log(str[strIndex++]);
console.log(str[strIndex++]);
console.log(str[strIndex++]);

console.log(str[strIndex++]);
console.log(str[strIndex++]);
console.log(str[strIndex++]);

console.log(str[-1]);
console.log(str[-2]);
console.log(str[-24562]);

console.clear();

// const userFirstName = 'Chuck';
// const userLastName = 'Norris';
const userFirstName = 'Pamela';
const userLastName = 'Anderson';

const userAbbr = `${userFirstName[0]}.${userLastName[0]}.`;
console.log(userAbbr);