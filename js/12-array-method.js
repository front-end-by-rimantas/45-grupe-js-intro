console.clear();

function includes(list, needle) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === needle) {
            return true;
        }
    }

    return false;
}

console.log(includes([1, 2, 3], 0), '->', false);
console.log(includes([1, 2, 3], 1), '->', true);
console.log(includes([1, 2, 3], 2), '->', true);
console.log(includes([1, 2, 3], 3), '->', true);
console.log(includes([1, 2, 3], 4), '->', false);

console.log([1, 2, 3].includes(0), '->', false);
console.log([1, 2, 3].includes(1), '->', true);
console.log([1, 2, 3].includes(2), '->', true);
console.log([1, 2, 3].includes(3), '->', true);
console.log([1, 2, 3].includes(4), '->', false);


Array.prototype.max = function max() {
    let res = -Infinity;

    for (let i = 0; i < this.length; i++) {
        if (this[i] > res) {
            res = this[i];
        }
    }

    return res;
};

Array.prototype.min = function min() {
    let res = Infinity;

    for (let i = 0; i < this.length; i++) {
        if (this[i] < res) {
            res = this[i];
        }
    }

    return res;
};

console.log([1, 2, 3, 0, -2].max(1), '->', 3);
console.log([5, 5, 5, 5].max(), '->', 5);

console.log([1, 2, 3, 0, -2].min(1), '->', -2);
console.log([5, 5, 5, 5].min(), '->', 5);

console.log(Array.prototype.max);
console.log(Array.prototype.includes);
console.log(Array.prototype.at);

console.clear();

function indexOf(list, needle) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === needle) {
            return i;
        }
    }

    return -1;
}

console.log(indexOf([1, 2, 3], 0), '->', -1);
console.log(indexOf([1, 2, 3], 1), '->', 0);
console.log(indexOf([1, 2, 3], 2), '->', 1);
console.log(indexOf([1, 2, 3], 3), '->', 2);
console.log(indexOf([1, 2, 3], 4), '->', -1);

console.log([1, 2, 3].indexOf(0), '->', -1);
console.log([1, 2, 3].indexOf(1), '->', 0);
console.log([1, 2, 3].indexOf(2), '->', 1);
console.log([1, 2, 3].indexOf(3), '->', 2);
console.log([1, 2, 3].indexOf(4), '->', -1);

console.clear();

function numberLength(number) {
    return ('' + number).length;
}

console.log(numberLength(5), '->', 1)
console.log(numberLength(12), '->', 2)
console.log(numberLength(9999), '->', 4)

Number.prototype.length = function length() {
    return ('' + this).length;
}

console.log((5).length(), '->', 1)
console.log((12).length(), '->', 2)
console.log((9999).length(), '->', 4)
