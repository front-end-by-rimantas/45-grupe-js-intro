console.clear();

/*
NUMBERS - skaiciai

Sveikieji/desimtainiai
Teigiami/neigiami
Mistiniai: Begalybes ir NaN (not-a-number)

Aritmetiniai operatoriai:
+, -, *, /, **, ++, --

Priskirimo operatoriai:
=, +=, -=, *=, /=, **=

Salia matematikos:
(, )

Kintamuju iniciavimo budai:
const - default
let - naudoti, tik jei reikia keisti reksmes
var - senove, todel niekada nenaudoti, nebent TIKRAI zinai ka darai

*/

console.log(1);
console.log(2);
console.log(3.14);
console.log(2.72);

console.log(-1);
console.log(-2);
console.log(-3.14);
console.log(-2.72);

console.log(Infinity);
console.log(-Infinity);

console.log(NaN);

console.log(2 + 2, 4);
console.log(2 + 2 * 2, 6);
console.log((2 + 2) * 2, 8);

console.log(0.1 + 0.2, 0.3);

console.clear();

// KINTAMIEJI

const amzius = 20;
console.log(amzius);

const saldainiuKiekis = 19;
const saldainiu_kiekis = 18;
const SALDAINIU_KIEKIS = 17;

console.log(saldainiuKiekis);
console.log(saldainiu_kiekis);
console.log(SALDAINIU_KIEKIS);

console.log(amzius);

console.clear();
// Kintamieji: konstantos ir kintamieji;

let pinige = 0;
console.log(pinige);
console.log(pinige);
console.log(pinige);
console.log(pinige);

pinige = 5;
console.log(pinige);
console.log(pinige);
console.log(pinige);
console.log(pinige);

pinige = 20;
console.log(pinige);
console.log(pinige);
console.log(pinige);

pinige = 4 + 3;
console.log(pinige);

pinige = pinige + 3;
console.log(pinige);

pinige = pinige * 4;
console.log(pinige);

console.clear();

let index = 0;          // 0
console.log(index);

index = index + 1;      // = 0 + 1
console.log(index);

index = index + 2;      // = 1 + 2
console.log(index);

index = index + 3;      // 3 + 3
console.log(index);

index = index + 4;      // = 6 + 4
console.log(index);

index = index + 5;      // = 10 + 5
console.log(index);

index = index + 6;
console.log(index);

index = index + 7;
console.log(index);

console.clear();

let driezas = 1;
console.log(driezas);

driezas = 5 + driezas;
console.log(driezas);

driezas = driezas + 1;
driezas = driezas + 2;
driezas = driezas + 3;
driezas = driezas + 4;
driezas = driezas + 5;
console.log(driezas);

driezas += 6;
console.log(driezas);

driezas += 7;
console.log(driezas);

driezas += 8;
console.log(driezas);

console.clear();

let rezultatas = 10;
console.log(rezultatas);

rezultatas += 20;
console.log(rezultatas);

rezultatas -= 4;
console.log(rezultatas);

rezultatas /= 13;
console.log(rezultatas);

rezultatas *= 5;
console.log(rezultatas);

rezultatas **= 6;
console.log(rezultatas);

console.clear();

let x = 0;
console.log(x);

x = x + 1;
console.log(x);

x += 1;
console.log(x);

x++;
console.log(x);

x++;
console.log(x);

x++;
console.log(x);

x++;
console.log(x);

x++;
console.log(x);

console.clear();

let y = 5;

++y;
console.log(y);

++y;
console.log(y);

++y;
console.log(y);

console.clear();

let m = 7;

console.log(m);     // turiu 7
console.log(++m);   // gaunu 8 -> log
console.log(m++);   // log 8 -> 9
console.log(m++);   // log 9 -> 10
console.log(++m);   // 11 -> log

m++;
console.log(m);

++m;
console.log(m);

console.clear();


let desimt = 10;
console.log(desimt);
console.log(--desimt);
console.log(desimt);

let n = 7;

n++;
n = n + 1;

n--;
n = n - 1;

console.log(81 ** 0.5, 9);
console.log(9 ** 0.5, 3);
console.log(64 ** 0.5, 8);

console.log(2 * 2 * 2 * 2, 2 ** 4);
console.log(16 ** 0.25, 2);
console.log(8 ** 0.3333333333333333333, 2);

console.clear();

const a = 8;
const b = 9;
const c = 10;

const d = a + b + c;
console.log(d);


const p1 = 10;
const p2 = 2;
const p3 = 8;
const p4 = 4;
const p5 = 6;

const vidurkis = (p1 + p2 + p3 + p4 + p5) / 5;
console.log(vidurkis);

