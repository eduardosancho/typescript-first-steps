import * as _ from 'lodash';

async function hello() {
  return 'world'
}

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
