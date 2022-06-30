async function hello() {
    return 'world';
}
let font;
font = 'bold';
// font = 'something' gives out an error
font = 23;
// OPT OUT OF THE TYPE SYSTEM
let lucky = 23;
// let lucky; inferred as 'any' aswell
lucky = '23';
export {};
