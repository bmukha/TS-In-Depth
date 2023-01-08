/* eslint-disable no-redeclare */
import { Book, Callback, LibMgrCallback } from './interfaces';

import { Category } from './enums';

import { bookProperties, BookOrUndefined } from './types';

import RefBook from './classes/encyclopedia';

export function getAllBooks(): readonly Book[] {
    const books: Book[] = [
        {
            id: 1,
            title: 'Refactoring JavaScript',
            category: Category.JavaScript,
            author: 'Evan Burchard',
            available: true,
        },

        {
            id: 2,
            title: 'JavaScript Testing',
            category: Category.JavaScript,
            author: 'Liang Yuxian Eugene',
            available: false,
        },

        { id: 3, title: 'CSS Secrets', category: Category.CSS, author: 'Lea Verou', available: true },

        {
            id: 4,
            title: 'Mastering JavaScript Object-Oriented Programming',
            category: Category.JavaScript,
            author: 'Andrea Chiarelli',
            available: true,
        },
    ];
    return books;
}

export function logFirstAvailable(books: readonly Book[] = getAllBooks()): void {
    console.log(`Number of books available ${books.length}`);
    const title = books.find(book => book.available === true)?.title;
    console.log(`First available title: ${title}`);
}

export function getBookTitlesByCategory(inputCategory: Category = Category.JavaScript): string[] {
    const books = getAllBooks();
    return books.filter(book => book.category === inputCategory).map(({ title }) => title);
}

export function logBookTitles(titles: Array<string>): void {
    titles.forEach(title => console.log(title));
}

export function getBookAuthorByIndex(index: number): [title: string, author: string] {
    const books = getAllBooks();
    const { title, author } = books[index];
    return [title, author];
}

export function calcTolalPages(): void {
    const data = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 },
    ];

    const result = data.reduce((acc: bigint, obj): bigint => {
        return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
    }, 0n);

    console.log(result);
}

export function createCustomerId(name: string, id: number): string {
    return `${name}${id}`;
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(...bookProperties: any[]): string[] {
    let foundTitles: string[];
    if (bookProperties.length === 2) {
        foundTitles = getAllBooks()
            .filter(book => book.id === bookProperties[0] && book.available === bookProperties[1])
            .map(book => book.title);
    } else if (typeof bookProperties[0] === 'string') {
        foundTitles = getAllBooks()
            .filter(book => book.author === bookProperties[0])
            .map(book => book.title);
    } else if (typeof bookProperties[0] === 'boolean') {
        foundTitles = getAllBooks()
            .filter(book => book.available === bookProperties[0])
            .map(book => book.title);
    }
    return foundTitles;
}

export function assertRefBookInstance(condition: any): asserts condition {
    if (!condition) {
        throw new Error('It is not an instance of RefBook');
    }
}

export function printRefBook(data: any): void {
    assertRefBookInstance(data instanceof RefBook);
    data.printItem();
}

export function purge<T>(invetory: Array<T>): T[] {
    return invetory.slice(2);
}

export const getProperty = (book: Book, property: keyof Book): any => {
    const prop = book[property];
    if (typeof prop === 'function') {
        return prop.name;
    }
    return prop;
};

export function getObjectProperty<TObject, TKey extends keyof TObject>(
    obj: TObject,
    prop: TKey,
): TObject[TKey] | string {
    const value = obj[prop];
    return typeof value === 'function' ? value.name : value;
}

export const createCustomer = (name: string, age?: number, city?: string) => {
    console.log(`${name}${age ? ' ' + age : ''}${city ? ' ' + city : ''}`);
};

// export function getBooksByCathegory(category: Category, callback: LibMgrCallback): void;
export function getBooksByCathegory(category: Category, callback: Callback<string>): void {
    setTimeout(() => {
        try {
            const titles = getBookTitlesByCategory(category);
            if (titles.length > 0) {
                callback(null, titles);
            } else {
                throw new Error('No books found');
            }
        } catch (error) {
            callback(error, null);
        }
    }, 2000);
}

export function logCategorySearch(err: Error | null, titles: string[] | null): void {
    if (err) {
        console.log(err.message);
    } else {
        console.log(titles);
    }
}

export function getBooksByCathegoryPromise(category: Category): Promise<string[]> {
    const p: Promise<string[]> = new Promise((resolve, reject) => {
        setTimeout(() => {
            const titles = getBookTitlesByCategory(category);
            if (titles.length > 0) {
                resolve(titles);
            } else {
                reject('No books found');
            }
        }, 2000);
    });
    return p;
}

export async function logSearchResult(category: Category) {
    const titles = await getBooksByCathegoryPromise(category);
    console.log(titles.length);
    return titles;
}
