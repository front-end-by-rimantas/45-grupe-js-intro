console.clear();
/*
FOR - ciklas, kuris kartoja procesus N-kartu
for (1; 2; 3) {}
1) inicijuojame kintamaji pasikartojimu kiekiui skaiciuoti (aka, tai kelintas dabar kartas?)
2) ar kartoti? jei tenkina - kartojam, jei ne - baigiam darba
3) tai kaip keisti 1) dalies kintamaji?
*/

const tekstas = 'Su gimimo diena!';

for (let i = 0; i < 5; i = i + 1) {
    console.log(i, tekstas);
}

for (let i = 10; i < 17; i = i + 2) {
    console.log(`${i}) va ir tiek...`);
}

for (let x = 0; x <= 5; x++) {
    console.log(x + '...');
}

// Reikia isspausdinti visus teigiamus lyginius vienazenklius skaicius.
// 0, 2, 4, 6, 8

for (let n = 0; n <= 8; n += 2) {
    console.log(n);
}

console.log('#################');
// Reikia isspausdinti visus teigiamus lyginius vienazenklius skaicius atbuline tvarka.
// 8, 6, 4, 2, 0

for (let n = 8; n >= 0; n -= 2) {
    console.log(n);
}

console.clear();

// Kokia yra skaiciu suma nurodytame intervale (imtinai)?
const start = 0;
const end = 10;
const step = 1;

let sum = 0;

for (let i = start; i <= end; i += step) {
    sum += i;
    console.log('>>>', i, sum);
}

console.log(sum);

console.clear();

// Koks yra pazymiu vidurkis?
//                 0  1  2  3  4
const pazymiai = [10, 2, 8, 4, 6];
let pazymiuSuma = 0;

for (let i = 0; i < pazymiai.length; i++) {
    const pazymys = pazymiai[i];
    pazymiuSuma += pazymys;
}

const pazymiuKiekis = pazymiai.length;
const pazymiuVidurkis = pazymiuSuma / pazymiuKiekis;

console.log(`Pazymiu vidurkis yra ${pazymiuVidurkis}.`);