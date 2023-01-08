import { Book } from '../interfaces';

export class Reader {
    name: string;
    books: Book[];
    constructor(name: string) {
        (this.name = name), (this.books = []);
    }
    takeBook(book: Book): void {
        this.books.push(book);
    }
}
