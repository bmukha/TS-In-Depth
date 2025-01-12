import { Category } from './enums';

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    markDamaged?: DamageLogger;
}

interface DamageLogger {
    (value: string): void;
}

interface Person {
    name: string;
    email: string;
}

interface TOptions {
    duration?: number;
    speed?: number;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer(custName: string, bookTitle: string): void;
}

interface Magazine {
    title: string;
    publisher: string;
}

interface ShelfItem {
    title: string;
}

interface LibMgrCallback {
    (err: Error | null, titles: string[] | null): void;
}

interface Callback<T> {
    (err: Error | null, data: T[] | null): void;
}

export {
    Book,
    DamageLogger as Logger,
    Person,
    Author,
    Librarian,
    TOptions,
    Magazine,
    ShelfItem,
    LibMgrCallback,
    Callback,
};
