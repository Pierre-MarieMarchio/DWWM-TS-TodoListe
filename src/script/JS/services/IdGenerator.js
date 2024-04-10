export class IdGenerator {
    constructor() {
        this.curentID = 0;
    }
    generateCurentId(listName) {
        this.curentID += 1;
        const formattedListName = listName.replace(/\s/g, '-');
        return `${formattedListName}-id-${this.curentID}`;
    }
}
