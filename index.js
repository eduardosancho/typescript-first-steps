async function hello() {
    return 'world';
}
//GENERICS
class Observable {
    value;
    constructor(value) {
        this.value = value;
    }
}
let x;
let y;
let z = new Observable(23);
const arr2 = [1, 'Hi', false]; // fixed length array with strict types
// STRONG TYPE AN ARRAY
const arr = [];
arr.push(1);
// arr.push('23') ERROR
// arr.push(false) ERROR
// CUSTOM TYPE A FUNCTION
function pow(x, y) {
    return Math.pow(x, y).toString();
}
pow(5, 10);
const person = { first: 'Jeff', last: 'Delaney' };
const person2 = { first: 'Usain', last: 'Bolt', fast: true };
let font;
font = 'bold';
// font = 'something' gives out an error
font = 23;
// OPT OUT OF THE TYPE SYSTEM
let lucky = 23;
// let lucky; inferred as 'any' aswell
lucky = '23';
export {};
