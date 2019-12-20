import { ReferenceItem } from './ReferenceItem';
import {positiveInteger} from '../decorators';

export default class Encyclopedia extends ReferenceItem {
    private _copies: number;

    constructor(title, year, public edition) {
        super(title, year);
    }

    get copies() {
        return this._copies;
    }

    @positiveInteger
    set copies(value: number) {
        this._copies = value;
    }

    printItem() {
        super.printItem();

        console.log(`Edition: ${this.edition} (${this.year})`);
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}
