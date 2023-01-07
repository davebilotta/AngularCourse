export interface Sortable {
  length: number;

  compare(left: number, right: number): boolean;

  swap(left: number, right: number): void;
}

export class Sorter {
  constructor(private collection: Sortable) {
    this.print();
  }

  sort(): void {
    console.log("Sorting ...");

    //const length = this.collection.length;
    // This is equivalent to above
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // if (this.collection[j] > this.collection[j + 1]) {
        if (this.collection.compare(j, j + 1)) {
          // swap
          this.collection.swap(j, j + 1);
        }
      }
    }
  }

  print() {
    console.log("Value is: ", this.collection);
  }
}