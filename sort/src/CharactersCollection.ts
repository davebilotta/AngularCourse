import {Sortable} from "./Sorter";

export class CharactersCollection implements Sortable {
    constructor(private data: string) {
    }

    get length(): number {
        return this.data.length;
    }

    compare(left: number, right: number): boolean {
        return this.data[left].toLowerCase() > this.data[right].toLowerCase();
    }

    swap(left: number, right: number): void {
        const characters = this.data.split(''); // create an array of chars

        const temp = characters[left];
        characters[left] = characters[right];
        characters[right] = temp;

        this.data = characters.join('')
    }
}