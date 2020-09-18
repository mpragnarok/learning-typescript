import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// const numbersCollection = new NumbersCollection([10, 3, 4]);
// const sorter = new Sorter(numbersCollection);

// sorter.sort();
// console.log(sorter.collection);

// const charactersCollection = new CharactersCollection("Evena");
// const charactersSorter = new Sorter(charactersCollection);

// charactersSorter.sort();
// console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(5);
const linkedListSorter = new Sorter(linkedList);

linkedListSorter.sort();
linkedList.print();
