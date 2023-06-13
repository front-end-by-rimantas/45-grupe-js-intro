console.clear();

const users = [
    ['Jonas', 99, true],
    ['Maryte', 88, false],
    ['Petras', 77, false],
    ['Ona', 66, true],
    [55, false, 'Kazys'],
    ['Natalija', true],
];

const userIndex = 4;
const user = users[userIndex];

const userName = user[0];
const userAge = user[1];
const userIsMarried = user[2];

// Sveiki, mano vardas yra VARDAS, man yra XX metu ir as VEDES/NEVEDES.

let vedybinisTekstas = '';
if (!userIsMarried) {
    vedybinisTekstas = 'ne';
}

let hi = `Sveiki, mano vardas yra ${userName}, man yra ${userAge} metu ir as ${vedybinisTekstas}vedes.`;

console.log(hi);

console.clear();

const students = [
    {
        name: 'Jonas',
        age: 99,
        isMarried: true,
    },
    {
        name: 'Maryte',
        age: 88,
        isMarried: false,
    },
];

const studentIndex = 1;
const student = students[studentIndex];

console.log(students);
console.log(student);
console.log(student['age']);
console.log(student['name']);
console.log(student['isMarried']);

const isMarried = 'isMarried';
console.log(student[isMarried]);

console.clear();

const demo = {
    0: 10,
    'name': 'Jonas',
    1: 2,
    age: 99,
    2: 8,
    3: 4,
    4: 6,
    'is married': true,
    twoWords: 'two wrods',
};

console.log(demo);
console.log(demo['name'], demo.name);
console.log(demo['age'], demo.age);
console.log(demo['is married'], demo["is married"]);
console.log(demo['0'], demo[0], demo[3]);
console.log(demo.twoWords);


console.clear();

const car = {
    marke: 'Audi',
    model: '80',
    color: 'red',
    price: 500,
    doors: 4,
    wheel: 'left',
};
console.log(car);

const noriuSuzinoti = 'marke';

const reiksme = car[noriuSuzinoti];
console.log('>>>', reiksme);


const marks9 = [10, 2, 8, 4, 6];
const kurisPazymys = 4;

const pazymys = marks9[kurisPazymys];
console.log(pazymys);

/*
{
    name: 'xxx',
}
*/
// demo['name'] -> demo.name
// demo.name -> demo['name']

// demo.noriuSuzinoti -> demo['noriuSuzinoti']
console.clear();
const child = {
    name: 'Maryte',
    age: 7,
    parents: [
        {
            name: 'Jonas',
            age: 32,
            phones: [1111, 4444, 5555],
        },
        {
            name: 'Ona',
            age: 35,
            phones: [2222, 3333],
        },
    ],
    marks: [10, 2, 8, 4, 6],
};

const info = child.parents.at(-1).phones.at(-1);
console.log(info);

console.clear();

const augintinis = {
    name: '',
    age: 0,
    items: [],
};
console.log(augintinis);

augintinis.name = 'Rexas';
console.log(augintinis);

augintinis.age++;
augintinis.items.push('kaulas-1');
console.log(augintinis);

augintinis.age++;
augintinis.items.push('kaulas-2');
console.log(augintinis);

augintinis.age++;
augintinis.items.push('kaulas-3');
console.log(augintinis);

augintinis.age++;
augintinis.age++;
augintinis.age++;
augintinis.age++;
augintinis.age++;
augintinis.age++;
augintinis.age++;
augintinis.age++;
console.log(augintinis);

// augintinis.name = 'Senasis ' + augintinis.name;
// console.log(augintinis);

augintinis.name = augintinis.name.replace('as', 'e');
console.log(augintinis);