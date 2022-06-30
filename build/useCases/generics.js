"use strict";
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
