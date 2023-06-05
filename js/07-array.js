console.clear();
/*
ARRAY - sąrašas, matrica, masyvas, arėjus, listas

[].length - elementu kiekis masyve
*/

const jonas = [10, 2, 8];
const maryte = [10, 9, 8, 7];
const petras = [5, 6];
const ona = [10, 3, 3, 3, 10, 10, 10];

console.log(jonas);

const abc = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(abc);

console.log('-----------');

//                  0         1         2       3       4
const students = ['Jonas', 'Maryte', 'Petras', 'Ona', 'Martynas'];
console.log(students);
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);
console.log(students[4]);
console.log(students[45]);
console.log(students[414562]);
console.log(students[-1]);
console.log(students[-2]);

console.log('----------------');

function suma(masyvas) {
    return masyvas[0] + masyvas[1] + masyvas[2];
}

const a1 = [1, 2, 3];
const s1 = suma(a1);

const a2 = [10, 9, 8];
const s2 = suma(a2);

const a3 = [5, 5, 5];
const s3 = suma(a3);

console.log(s1, '->', 6);
console.log(s2, '->', 27);
console.log(s3, '->', 15);

console.log(students.length);
console.log(abc.length);

const empty = [];
console.log(empty, empty.length);

const index = students.length - 1;
console.log('Paskutinis:', students[index]);

console.clear();

// Jonas: paskutinis pazymys yra 8.
// Maryte: paskutinis pazymys yra 8.
// Petras: paskutinis pazymys yra 7.
// Ona: paskutinis pazymys yra 5.

const stud1 = 'Jonas';
const marks1 = [10, 2, 8, 2, 8, 2, 8];
const stud2 = 'Maryte';
const marks2 = [10, 9, 8];
const stud3 = 'Petras';
const marks3 = [5, 6, 7];
const stud4 = 'Ona';
const marks4 = [5, 5, 5, 5, 5, 5, 5, 5];

function studentIntro(name, marks) {
    const lastIndex = marks.length - 1;
    const lastMark = marks[lastIndex];
    return `${name}: paskutinis pazymys yra ${lastMark}.`;
}

console.log(studentIntro(stud1, marks1));
console.log(studentIntro(stud2, marks2));
console.log(studentIntro(stud3, marks3));
console.log(studentIntro(stud4, marks4));
