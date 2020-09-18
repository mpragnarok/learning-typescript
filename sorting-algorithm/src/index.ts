import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numbersCollection = new NumbersCollection([10, 3, 4]);
// const sorter = new Sorter(numbersCollection);
const charactersCollection = new CharactersCollection("Evena");

const charactersSorter = new Sorter(charactersCollection);

// sorter.sort();
// console.log(sorter.collection);
charactersSorter.sort();

console.log(charactersCollection.data);
