import * as _ from 'lodash';

async function hello() {
  return 'world'
}

// TUPLE
type MyList = [number, string, boolean, boolean?] // its presence can be optional using '?'
const arr2: MyList = [1, 'Hi', false] // fixed length array with strict types

// STRONG TYPE AN ARRAY
const arr: number[] = [];
arr.push(1)
// arr.push('23') ERROR
// arr.push(false) ERROR

// CUSTOM TYPE A FUNCTION
function pow(x: number, y: number): string /* or void if there is no return */ {
  return Math.pow(x, y).toString();
}
pow(5, 10)

// CUSTOM TYPE AN OBJECT'S KEYS AND VALUES
interface Person { first: string; last: string; [key: string]: any }
const person: Person = { first: 'Jeff', last: 'Delaney' }
const person2: Person = { first: 'Usain', last: 'Bolt', fast: true }

// STRONG TYPE A VARIABLE
type Style = 'bold' | 'italic' | 23;
let font: Style;
font = 'bold'
// font = 'something' gives out an error
font = 23

// OPT OUT OF THE TYPE SYSTEM
let lucky: any = 23
// let lucky; inferred as 'any' aswell
lucky = '23'
