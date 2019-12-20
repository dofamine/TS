import { Category } from './enums';
import { logSearchResults } from './functions';

const log = (text: string) => console.log(`%c ${ text }`, 'color: #fff; margin-left: 50px');
//
// // Task 01.01
// log('01.01');
//
// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory(Category.JAVASCRIPT));
// console.log(getBookAuthorByIndex(3));
// // console.log(calcTotalPages());
//
// // 03.01
// log('Task 03.01');
//
//
// console.log(getBookByID(1));
//
// // 03.02
// log('Task 03.02');
//
// const myID = createCustomerID('Ann', 10);
// console.log(myID);
//
// let idGenerator: (name: string, id: number) => string;
// idGenerator = (name: string, id: number): string => `${name}${id}`;
// idGenerator = createCustomerID;
// const anotherID = idGenerator('Bob', 43);
// console.log(anotherID);
//
// // 03.03
// log('Task 03.03');
//
//
// createCustomer('Mike');
// createCustomer('Mike', 23);
// createCustomer('Mike', 23, 'Munich');
//
// getBookTitlesByCategory();
// logFirstAvailable();
//
//
// const myBooks = сheckoutBooks('Somnus', 1, 2, 4);
// console.log(myBooks);
//
// // 03.04
// log('Task 03.04');
//
//
// const checkedOutBooks = getTitles(false);
// console.log(checkedOutBooks);
//
// // 03.05
// log('Task 03.05');
//
// // function assertStringValue(value: any): asserts value is string {
// //   if (typeof value !== 'string') {
// //     throw new TypeError(`Value should be a string type, instead got: ${value} type ${typeof value}`);
// //   }
// // }
//
// // 04.01
// log('Task 04.01');
//
//
// const myBook: Book = {
//   id: 5,
//   title: 'Colors, Backgrounds, and Gradients',
//   author: 'Eric A. Meyer',
//   available: true,
//   category: Category.CSS,
//   pages: 200,
//   markDamaged: reason => console.log(`Damaged: ${reason}`),
// };
//
// printBook(myBook);
// myBook.markDamaged('missing back cover');
//
// // 04.02
// log('Task 04.02');
//
// logDamage('45hp');
//
// // 04.03
// log('Task 04.03');
//
// const favoriteAuthor: Author = {
//     email: 'author@gmail.com',
//     name: 'Ben Franklin',
//     numBooksPublished: 37
// };
//
// // const favoriteLibrarian: Librarian = {
// //     name: 'Jerry',
// //     email: 'jerry@library.uk',
// //     department: 'London',
// //     assistCustomer: customerName => console.log(`Assisting customer ${customerName}`),
// // };
//
// // 04.04
// log('Task 04.04');
//
// const offer: any = {
//     book: {
//         title: 'Essential TypeScript',
//     },
// };
// console.log(offer?.magazine);
//
// // 04.05
// log('Task 04.05');
//
// console.log(getBookProps(getAllBooks()[1], 'title'));
// console.log(getBookProps(getAllBooks()[1], 'markDamaged'));
// // console.log(getBookProps(getAllBooks()[1], 'isbn'));
//
// // 05.01
// log('Task 05.01');
//
//
// // const ref = new ReferenceItem('Some TITLE', 1977);
// // ref.printItem();
// // ref.publisher = 'Hollahold';
// // console.log(ref.publisher);
//
// // 05.02
// log('Task 05.02');
// const refBook = new RefBook('Big Medical Encyclopedia', 1963, 'PJSC Prosvita');
// refBook.printItem();
//
// // 05.03
// log('Task 05.03');
//
// refBook.printCitation();
//
// // 05.04
// log('Task 05.04');
//
// const favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Librarian name';
// favoriteLibrarian.assistCustomer('Customer Bobby');
//
// // 05.05
// log('Task 05.05');
//
// const personBook: PersonBook = {
//     name: 'John',
//     email: 'john_galt@gmail.com',
//     id: 1,
//     title: 'Who is John Galt?',
//     author: 'John Galt',
//     category: Category.HTML,
//     available: true,
// };
// console.log(personBook);
//
// // 06.05
// log('Task 06.05');
//
// import('./classes')
//     .then(({ Reader }) => {
//         const reader = new Reader;
//         reader.name = 'Hanna';
//         reader.take(getAllBooks()[3]);
//         console.log(reader);
//     });
//
// // 07.01
// console.log('Task 07.01');
//
// const inventory: Book[] = [
//     { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.SOFTWARE },
//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.SOFTWARE },
//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.SOFTWARE },
//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.SOFTWARE },
// ];
//
// console.log(purge(inventory));
// console.log(purge([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
//
// // 07.02
// log('Task 07.02');
//
// const bookShelf = new Shelf<Book>();
// inventory.forEach(el => bookShelf.add(el));
// console.log(bookShelf.getFirst());
//
// const magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];
//
// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(el => magazineShelf.add(el));
// console.log(magazineShelf.getFirst());
//
// // 07.03
// log('Task 07.03');
//
// // 07.04
// log('Task 07.04');
//
// const bookRequiredFields: BookRequiredFields = {
//     title: 'Required book title',
//     id: 77,
//     available: true,
//     category: Category.CSS,
//     author: 'Plakhotnyy',
//     markDamaged() {},
//     pages: 52,
// };
// const book: UpdatedBook = {
//     id: 23,
//     title: 'Updated book title',
// };
// const params: Parameters<createCustomerFunctionType> = ['Anna'];
// createCustomer(...params);
//
// // 08.01
// log('Task 08.01');
//
// const universityLibrarian = new UniversityLibrarian();
// console.log(universityLibrarian);
//
// // 08.02
// log('Task 08.02');
//
// const fLibrarian = new UniversityLibrarian();
// fLibrarian.name = 'Anna';
// fLibrarian['printLibrarian']();
//
// // 08.03
// log('Task 08.03');
//
// fLibrarian.assistFaculty = null;
// fLibrarian.teachCommunity = null;

// 08.05
// const fLibrarian = new UniversityLibrarian();
// fLibrarian.name = 'Anna';
// fLibrarian.assistCustomer('Bob');

// 08.06
// const fLibrarian = new UniversityLibrarian();
// fLibrarian.name = 'Anna';
// console.log(fLibrarian.name);

// 08.07
// const enc = new Encyclopedia('title', 2019, 30);
// enc.copies = 10;
// enc.copies = -1;

// 09.01
// console.log('Beginning search');
// getBooksByCategory(Category.JAVASCRIPT, logCategorySearch);
// getBooksByCategory(Category.SOFTWARE, logCategorySearch);

// 09.02
// console.log('Beginning search');
// getBooksByCategoryPromise(Category.JAVASCRIPT)
//     .then(res => console.log(res))
//     .catch(err => console.error(err));
// getBooksByCategoryPromise(Category.SOFTWARE)
//     .then(res => console.log(res))
//     .catch(err => console.error(err));

// 09.03
console.log('Beginning search');
logSearchResults(Category.JAVASCRIPT).catch(err => console.log(err));
console.log('End');
