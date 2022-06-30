// TUPLE
type MyList = [number, string, boolean, boolean?] // its presence can be optional using '?'
const arr2: MyList = [1, 'Hi', false] // fixed length array with strict types

// STRONG TYPE AN ARRAY
const arr: number[] = [];
arr.push(1)
// arr.push('23') ERROR
// arr.push(false) ERROR