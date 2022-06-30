async function hello() {
    return 'world';
}
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
