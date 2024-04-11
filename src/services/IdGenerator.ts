export class IdGenerator {
  curentID: number;

  constructor() {
    this.curentID = 0;
  }

  generateCurentId(listName: string): string {
    this.curentID += 1;

    const formattedListName = listName.replace(/\s/g, '-');

    return `${formattedListName}-id-${this.curentID}`;
  }
}
