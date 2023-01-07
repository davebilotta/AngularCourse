import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

function randomNumber(max: number, allowNeg?: boolean): number {
  let num = Math.floor(Math.random() * max);

  if (!allowNeg) {
    return num;
  }

  return Math.floor(Math.random() * 2) === 0 ? num * -1 : num;
}

function getRandomNumbers(num: number, max: number): number[] {
  let numbers = [];

  for (let i = 0; i < num; i++) {
    numbers.push(randomNumber(max, true));
  }

  return numbers;
}

//const sorter = new Sorter([10, 3, -4, 5, 0, 22, 8, -8]);
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-34);
linkedList.add(-245);
linkedList.add(20);
linkedList.add(10);
linkedList.add(88);

const sorter = new Sorter(
  // new NumbersCollection(
  //   getRandomNumbers(randomNumber(10000), randomNumber(10000))
  // )
  // new CharactersCollection("WaIRZzyrmvs")
  linkedList
);

sorter.sort();
//sorter.print();
linkedList.print();