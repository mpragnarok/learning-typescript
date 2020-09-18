"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var LinkedList_1 = require("./LinkedList");
// const numbersCollection = new NumbersCollection([10, 3, 4]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(sorter.collection);
// const charactersCollection = new CharactersCollection("Evena");
// const charactersSorter = new Sorter(charactersCollection);
// charactersSorter.sort();
// console.log(charactersCollection.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(5);
var linkedListSorter = new Sorter_1.Sorter(linkedList);
linkedListSorter.sort();
linkedList.print();
