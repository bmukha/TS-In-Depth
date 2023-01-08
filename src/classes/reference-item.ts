import { timeout } from '../decorators';

/* eslint-disable no-underscore-dangle */
export abstract class ReferenceItem {
    // title: string;
    // year: number;
    // constructor(newTitle: string, newYear: number) {
    //     console.log('Creating a new ReferenceItem...');
    //     this.title = newTitle;
    //     this.year = newYear;
    // }
    private _publisher: string;
    #id: number;
    static department: string = 'Research dept...';
    constructor(id: number, public title: string, protected year: number) {
        this.#id = id;
    }
    @timeout(2000)
    printItem() {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Department: ${ReferenceItem.department}`);
        console.log(Object.getPrototypeOf(this).constructor.department);
    }
    public get publisher(): string {
        return this._publisher.toUpperCase();
    }

    public set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }
    getID() {
        return this.#id;
    }
    abstract printCitation(): void;
}
