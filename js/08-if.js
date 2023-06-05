console.clear();
/*
IF - palyginimas

Palyginimo operatoriai:
Visi: >, <, >=, <=, ==, !=, ===, !==
Naudotini: >, <, >=, <=,  ===, !==
Nenaudotini: ==, !=

Sintakse:
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {} ...  else if () {}
if () {} else if () {} ...  else if () {} else {}
*/

console.log('START');

const a = 7;
const b = 55;

if (a > b) {
    console.log('Daugiau (a > b)');
} else {
    console.log('Ne daugiau...');
}

console.log('END');

console.log('---------------------');

// Code nesting

const arSvieciaSaule = false;
const arLyja = true;
let kaDaryti = 'Dar nezinau...';

if (arSvieciaSaule == true) {
    if (arLyja == true) {
        kaDaryti = 'Pries eidamas pasiimk sketi!';
    } else {
        kaDaryti = 'Geros keliones!';
    }
} else {
    if (arLyja == true) {
        kaDaryti = 'Miegosiu po kaldra...';
    } else {
        kaDaryti = 'Zzz...';
    }
}

console.log(kaDaryti);

// Reik isspausdinti savaites dienos pavadinima.
const day = 8;
let weekday = '';

if (day == 1) {
    weekday = 'Pirmadienis';
} else {
    if (day == 2) {
        weekday = 'Antradienis';
    } else {
        if (day == 3) {
            weekday = 'Treciadienis';
        } else {
            if (day == 4) {
                weekday = 'Ketvirtadienis';
            } else {
                if (day == 5) {
                    weekday = 'Penktadienis';
                } else {
                    if (day == 6) {
                        weekday = 'Sestadienis';
                    } else {
                        if (day == 7) {
                            weekday = 'Sekmadienis';
                        } else {
                            weekday = 'Tokios dienos savaiteje nera...';
                        }
                    }
                }
            }
        }
    }
}

console.log(weekday);

console.log('###################');

const diena = 8;
let kokiaDiena = '...';

if (diena == 1) {
    kokiaDiena = 'pirma';
} else if (diena == 2) {
    kokiaDiena = 'antra';
} else if (diena == 3) {
    kokiaDiena = 'trecia';
} else if (diena == 4) {
    kokiaDiena = 'ketvirta';
} else if (diena == 5) {
    kokiaDiena = 'penkta';
} else if (diena == 6) {
    kokiaDiena = 'sesta';
} else if (diena == 7) {
    kokiaDiena = 'septinta';
} else {
    kokiaDiena = 'Nera tokios dienos...';
}

console.log(kokiaDiena);

console.clear();

const penki = 5;
const five = '5';

if (penki == five) {
    console.log('Taip');
} else {
    console.log('Ne');
}

if (5 === '5') {
    console.log('Taip');
} else {
    console.log('Ne');
}

if (5 !== '5') {
    console.log('DABAR...');
} else {
    console.log('priesingai!!!');
}

console.log('------------------');

const isTasty = false;
const hasSouce = true;
let kebab = '👀';

if (isTasty && hasSouce) {
    kebab = 'Perkam!!!';
} else if (isTasty && hasSouce === false) {
    kebab = 'Perkam ir be padazo!!!';
} else if (isTasty === false && hasSouce) {
    kebab = 'Geriam tik padaza...';
} else if (isTasty === false && hasSouce === false) {
    kebab = 'Lieku alkanas 😭';
}

console.log(kebab);

// if (isTasty) {
//     if (hasSouce) {
//         kebab = 'Perkam!!!';
//     } else {
//         kebab = 'Perkam ir be padazo!!!';
//     }
// } else {
//     if (hasSouce) {
//         kebab = 'Geriam tik padaza...';
//     } else {
//         kebab = 'Lieku alkanas 😭';
//     }
// }

const tiesa = true;

if (tiesa) {
    console.log('Yra tiesa!');
} else {
    console.log('Melas...');
}

if (!tiesa) {
    console.log('Melas...');
} else {
    console.log('Yra tiesa!');
}

const melas = false;

if (melas === false) {
    console.log('>>> Yra tiesa!');
} else {
    console.log('>>> Melas...');
}

if (!melas) {
    console.log('>>> Yra tiesa!');
} else {
    console.log('>>> Melas...');
}

console.clear();

console.log(true);
console.log(!true);

console.log(false);
console.log(!false);

console.log('---------------');
console.log(false);
console.log(!false);
console.log(!!false);

console.log('---------------');

function arPilnametis(amzius) {
    if (amzius >= 18) {
        return true;
    }

    return false;
}

function arPilnametis2(amzius) {
    return amzius >= 18;
}

console.log(arPilnametis(99), '-->', true);
console.log(arPilnametis(9), '-->', false);
console.log(arPilnametis(18), '-->', true);
console.log(arPilnametis(17.99999), '-->', false);

console.log(arPilnametis2(99), '-->', true);
console.log(arPilnametis2(9), '-->', false);
console.log(arPilnametis2(18), '-->', true);
console.log(arPilnametis2(17.99999), '-->', false);