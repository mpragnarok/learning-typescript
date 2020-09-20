// * Generics
class HoldAnything<TypeOfData> {
    data: TypeOfData;

    add(a: T): T {
        return a;
    }
}

const holdNumber = new HoldAnything<number>();

holdNumber.data = 123;
holdNumber.add(10);
const holdString = new HoldAnything<string>();

holdString.data = "123";
holdString.add("aaa");

// * Advanced generics

// Bad implementation without Generics
class ArrayOfNumber {
    constructor(public collection: number[]) {}
    get(index: number): number {
        return this.collection[index];
    }
}

class ArrayOfString {
    constructor(public collection: string[]) {}
    get(index: number): string {
        return this.collection[index];
    }
}

// implement Generic
class ArrayOfAnything<T> {
    constructor(public collection: T[]) {}
    get(index: number): T {
        return this.collection[index];
    }
}

// * Type Interface with Generics

// Example of generics with functions

function printStrings(arr: string[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function printNumbers(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function printAnything<T>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

// although we can drop <string>, typescript will identity for us
printAnything(["a", "b", "c"]);
// ! but put on <string>, typescript will help us catch error
printAnything<string>(["a", "b", "c"]);

// * Generic constraints

class Car {
    print() {
        console.log("I'm a car");
    }
}
class House {
    print() {
        console.log("I'm a house");
    }
}

interface Printable {
    print(): void;
}

// constraint type with interface
function printHousesOrCars<T extends Printable>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        arr[i].print();
    }
}

printHousesOrCars<House>([new House(), new House()]);
printHousesOrCars<Car>([new Car(), new Car()]);
