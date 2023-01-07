import { Sortable } from "./Sorter";

export class NumbersCollection implements Sortable {
  constructor(private data: number[]) {}

  public compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  public swap(leftIndex: number, rightIndex: number): void {
    let tmp = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = tmp;
  }

  // 'get' means we can call it like ".length instead of .length()"
  get length(): number {
    return this.data.length;
  }
}