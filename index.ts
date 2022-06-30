import * as _ from 'lodash';

async function hello() {
  return 'world'
}

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