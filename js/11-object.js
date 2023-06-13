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