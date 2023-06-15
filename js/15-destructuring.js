console.clear();

const marks = [10, 2, 8, 4, 6];

const [j, k, l, m, n, o] = marks;
console.log(j, k, l, m, n, o);

// ... - rest operator
const [a, b, ...restMarks] = marks;
console.log(a, b, restMarks);

const ona = ['Ona', 77, true, 10, 2, 8, 4, 6, 10];
const [onaName, onaAge, onaMarried, ...onaMarks] = ona;

// const onaName = ona[0];
// const onaAge = ona[1];
// const onaMarried = ona[2];
// const onaMarks = [ona[3], ona[4], ona[5], ona[6], ona[7]];

console.log(onaName, onaAge, onaMarried, onaMarks);

// const mark1 = marks[0];
// const mark2 = marks[1];
// const mark3 = marks[2];
// const mark4 = marks[3];
// const mark5 = marks[4];

console.log('######################');

const user = {
    name: 'Maryte',
    age: 88,
    isMarried: false,
};

const { isMarried, age, name, ...kita } = user;

// const name = user.name;
// const age = user.age;
// const isMarried = user.isMarried;

console.log(isMarried, age, name, kita);
// console.log(name, age, isMarried);

const students = [
    { name: 'Jonas', age: 99, marks: [10, 2, 8, 4, 6], },
    { name: 'Maryte', age: 88, marks: [2, 4, 6, 8, 10, 10, 8, 6, 4, 2], },
    { name: 'Petras', age: 77, marks: [1, 3, 5, 7, 9, 7, 5], },
    { name: 'Ona', age: 66, marks: [], },
];

// VARDENIS, kurio amzius yra XX metu turi N pazymiu.

for (const { name, age, marks } of students) {
    console.log(`${name}, kurio amzius yra ${age} metu turi ${marks.length} pazymiu.`);
}

// for (const student of students) {
//     const { name, age, marks } = student;
//     console.log(`${name}, kurio amzius yra ${age} metu turi ${marks.length} pazymiu.`);
// }

// for (let i = 0; i < students.length; i++) {
//     const student = students[i];
//     const { name, age, marks } = student;
//     console.log(`${name}, kurio amzius yra ${age} metu turi ${marks.length} pazymiu.`);
// }

// for (let i = 0; i < students.length; i++) {
//     const student = students[i];
//     const name = student.name;
//     const age = student.age;
//     const marks = student.marks;
//     console.log(`${name}, kurio amzius yra ${age} metu turi ${marks.length} pazymiu.`);
// }