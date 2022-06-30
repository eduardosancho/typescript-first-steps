//GENERICS
class Observable<T> { // RxJS observable, has internal value the can be observed
  constructor(public value: T) { }
}
let x: Observable<number>;
let y: Observable<Person>;
let z = new Observable(23)