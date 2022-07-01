// CUSTOM TYPE AN OBJECT'S KEYS AND VALUES
export interface Person {
  first: string;
  last: string;
  [key: string]: any;
}
const person: Person = { first: "Jeff", last: "Delaney" };
const person2: Person = { first: "Usain", last: "Bolt", fast: true };
