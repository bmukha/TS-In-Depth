/* eslint-disable no-underscore-dangle */
/* eslint-disable no-redeclare */

import { Book, Librarian, Logger, Magazine } from './interfaces';
import { ReferenceItem, UL, RefBook, Shelf } from './classes/';
import { Library } from './classes/library';
import { BookRequiredFields, CreateCustomerFunctionType, PersonBook, UpdatedBook } from './types';
import {
    getAllBooks,
    printRefBook,
    purge,
    getObjectProperty,
    createCustomer,
    logCategorySearch,
    getBooksByCathegory,
    getBooksByCathegoryPromise,
    logSearchResult,
} from './functions';
import { Category } from './enums';

// type Book = {
//     id: number;
//     title: string;
//     author: string;
//     available: boolean;
//     category: Category;
// };

// console.log(getAllBooks());

// logFirstAvailable(getAllBooks());

// console.log(getBookAuthorByIndex(0));

// calcTolalPages();

// const myId: string = createCustomerId('Ann', 10);

// console.log(myId);

// const idGenerator: typeof createCustomerId = (name: string, id: number): string => `${name}${id}`;

// console.log(idGenerator('Ann', 10));

// createCustomer('Bohdan');
// createCustomer('Bohdan', 41);
// createCustomer('Bohdan', 41, 'Ivano-Frankivsk');

// console.log(getBookTitlesByCategory());
// logFirstAvailable();

// const getBookById = (id: Book['id']): Book => {
//     return getAllBooks().find(book => book.id === id);
// };

// console.log(getBookById(1));

// const checkoutBooks = (customer: string, ...bookIDs: number[]): string[] => {
//     console.log(customer);
//     return getAllBooks()
//         .filter(book => bookIDs.includes(book.id) && book.available)
//         .map(book => book.title);
// };

// const myBooks = checkoutBooks('Ann', 1, 2, 4);

// console.log(myBooks);

// const checkedOutBooks: string[] = getTitles(false);

// console.log(checkedOutBooks);

// const assertStringValue = (value: any) => {
//     if (typeof value !== 'string') {
//         throw new Error('value should have been a string');
//     }
//     return value;
// };

// const bookTitleTransform = (title: any): string => {
//     return [...assertStringValue(title)].reverse().join('');
// };

// // console.log(bookTitleTransform('Some title'));
// // console.log(bookTitleTransform(12345));

// // Task 04.01

// const printBook = (book: Book): void => {
//     console.log(`${book.title} ${book.author}`);
// };

// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     pages: 200,
//     markDamaged: reason => {
//         console.log(`Damaged: ${reason}`);
//     },
// };

// printBook(myBook);
// myBook.markDamaged('missing back cover');

// // Task 04.02

// const logDamage: Logger = value => {
//     console.log(`Damaged: ${value}`);
// };

// logDamage('eaten by hungry hamster');

// // Task 04.03

// const favoriteAuthor: Author = {
//     name: 'some author',
//     email: 'some email',
//     numBooksPublished: 2,
// };

// const favoriteLibrarian: Librarian = {
//     name: 'some name',
//     email: 'some email',
//     department: 'some department',
//     assistCustomer(custName, bookTitle) {
//         console.log(`${custName} ${bookTitle}`);
//     },
// };

// // Task 04.04

// const offer: any = {
//     book: {
//         title: 'Essential TypeScript',
//     },
// };

// console.log(offer?.magazine);
// console.log(offer?.magazine?.getTitle());
// console.log(offer?.book?.getTitle?.());
// console.log(offer?.book?.authors?.[0]);

// // Task 04.05

// console.log(getProperty(myBook, 'title'));
// console.log(getProperty(myBook, 'markDamaged'));
// // console.log(getProperty(myBook, 'isbn'));

// Task 05.01

// const ref = new ReferenceItem('Awesome title', 1981);
// ref.printItem();
// ref.publisher = 'Addi Osmani';
// console.log(ref.publisher);

// console.log(ref);
// console.log(ref.getID());

// Task 05.02

// const refBook = new RefBook('My Encyclopedia', 1981, 25);

// refBook.printItem();

// Task 05.03

// refBook.printCitation();

// Task 05.04

// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// favoriteLibrarian.name = 'Ivan';
// favoriteLibrarian.assistCustomer('Natalka', 'Harry Potter');

// Task 05.05

// const personBook: PersonBook = {
//     name: 'Book',
//     author: 'autor',
//     available: true,
//     id: 56,
//     title: 'Title',
//     email: 'sdfsd',
//     category: 0,
// };

// Task 06.01
// Task 06.02
// Task 06.03, 06.04

// printRefBook(refBook);
// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// printRefBook(favoriteLibrarian);

// Task 06.05

// const flag = true;

// if (flag) {
//     import('./classes')
//         .then(o => {
//             const reader = new o.Reader('Stepan');
//             reader.name = 'Anna';
//             reader.takeBook(getAllBooks()[0]);
//             console.log(reader);
//         })
//         .catch(err => console.log(err))
//         .finally(() => console.log('Complete!'));
// }

// if (flag) {
//     const o = await import('./classes');
//     const reader = new o.Reader('Stepan');
//     reader.name = 'Anna';
//     reader.takeBook(getAllBooks()[0]);
//     console.log(reader);
// }

// Task 06.06

// let library: Library = new Library();
// let library: Library = {
//     id: 1,
//     name: 'Ivan',
//     adress: 'Lviv',
// };

// console.log(library);

// // Task 07.01

// const inventory: Book[] = [
//     { id: 10, title: 'The C Programming Language', author: '???', available: true, category: Category.Software },
//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software },
// ];

// const result1 = purge(inventory);
// console.log(result1);

// const result2 = purge([1, 2, 3, 4]);
// console.log(result2);

// const bookShelf: Shelf<Book> = new Shelf<Book>();

// Task 07.02, Task 07.03

// const bookShelf = new Shelf<Book>();

// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst().title);

// const magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' },
// ];

// const magazineShelf = new Shelf<Magazine>();

// magazines.forEach(magazine => magazineShelf.add(magazine));
// console.log(magazineShelf.getFirst().title);

// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));

// console.log(getObjectProperty(magazines[0], 'title'));
// console.log(getObjectProperty<Book, 'author' | 'title'>(inventory[0], 'author'));

// Task 07.04

// const bookRequiredFields: BookRequiredFields = {
//     author: 'Ivan',
//     available: true,
//     category: Category.Angular,
//     id: 1,
//     markDamaged: null,
//     pages: 250,
//     title: 'Learn Angular',
// };

// const updatedBook: UpdatedBook = {
//     id: 5,
//     pages: 500,
// };

// let params: Parameters<CreateCustomerFunctionType>;
// params = ['Ivan', 50, 'Lviv'];

// createCustomer(...params);

// Task 08.01, 08.02
// const favoriteLibrarian1 = new UL.UniversityLibrarian();
// const favoriteLibrarian2 = new UL.UniversityLibrarian();

// favoriteLibrarian1['a'] = 44;
// UL.UniversityLibrarian['ss'] = 25;
// UL.UniversityLibrarian.prototype['b'] = 26;

// console.log(favoriteLibrarian1);
// favoriteLibrarian1['printLibrarian']();

// Task 08.03

// const favoriteLibrarian = new UL.UniversityLibrarian();
// console.log(favoriteLibrarian);

// favoriteLibrarian.assistFaculty = null;
// // favoriteLibrarian.teachCommunity = null;

// Task 08.04

// const refBook = new RefBook('My Encyclopedia', 1981, 25);

// refBok.printItem();

// Task 08.05

// const favoriteLibrarian = new UL.UniversityLibrarian();
// console.log(favoriteLibrarian);
// favoriteLibrarian.name = 'Ivan';
// favoriteLibrarian.assistCustomer('Olena', 'Learn TypeScript');

// Task 08.06

// const favoriteLibrarian = new UL.UniversityLibrarian();
// favoriteLibrarian.name = 'Ivan';
// console.log(favoriteLibrarian.name);
// favoriteLibrarian.assistCustomer('Olena', 'Learn TypeScript');
// console.log(favoriteLibrarian);

// Task 08.07

// const refBook = new RefBook(15, 'My Encyclopedia', 1981, 25);
// refBook.copies = 10;
// refBook.copies = -10;
// console.log(refBook.copies);

// Task 09.01

// console.log('Begin');
// getBooksByCathegory(Category.JavaScript, logCategorySearch);
// getBooksByCathegory(Category.Software, logCategorySearch);
// console.log('End');

// Task 09.02

// console.log('Begin');
// getBooksByCathegoryPromise(Category.JavaScript)
//     .then(titles => {
//         console.log(titles);
//         return titles.length;
//     })
//     .then(n => console.log(n))
//     .catch(reason => console.log(reason));
// getBooksByCathegoryPromise(Category.Software)
//     .then(titles => console.log(titles))
//     .catch(reason => console.log(reason));
// console.log('End');

// Task 09.03

console.log('Begin');
logSearchResult(Category.JavaScript);
logSearchResult(Category.Software).catch(err => console.log(err));
console.log('End');
