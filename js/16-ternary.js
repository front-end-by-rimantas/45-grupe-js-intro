console.clear();
/*
TERNARY - trejybe
klausimas ? teigiama dalis : neigiama dalis
*/

// Tu esi pilnametis.
// Tu esi nepilnametis.

const limit = 18;
const age = 8;

let youAre = '';
if (limit <= age) {
    youAre = 'Tu esi pilnametis.';
} else {
    youAre = 'Tu esi nepilnametis.';
}
console.log(youAre);

const x = age >= limit ? 'Tu esi pilnametis' : 'Tu esi nepilnametis.';
console.log(x);

const y = `Tu esi ${age >= limit ? '' : 'ne'}pilnametis`;
console.log(y);


// Siandien prilijo 4mm.
// Siandien sausa.
const rainLevel = 5;
let rainStr = 'Siandien ';

if (rainLevel) {
    rainStr += `prilijo ${rainLevel}mm.`;
} else {
    rainStr += 'sausa.';
}
console.log(rainStr);

const rainTernary = `Siandien ${rainLevel ? `prilijo ${rainLevel}mm` : 'sausa'}.`;
console.log(rainTernary);


// Ko tu tyli?
// Ok, grazus zodis: [ZODIS].
const zodis = '';

const reakcijaStr = zodis ? 'Ko tu tyli?' : `Ok, grazus zodis: ${zodis}`;

console.log(reakcijaStr);


const q1 = 0 ? 1 : 2;
console.log(q1);

const q2 = 1 ? 2 : 3;
console.log(q2);

const q3 = 0 ? 1 ? 2 : 3 : 4;
console.log(q3);

const q4 = 1 ? 2 ? 3 : 4 : 5;
console.log(q4);

const q5 = 0 ? 1 ? 2 : 3 ? 4 : 5 : 6;
console.log(q5);

const q6 = 0 ? 1 ? 3 : 4 : 2 ? 5 : 6;
console.log(q6);
