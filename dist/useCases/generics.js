"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//GENERICS
class Observable {
    value;
    // RxJS observable, has internal value the can be observed
    constructor(value) {
        this.value = value;
    }
}
let x;
let y;
const z = new Observable(23);
