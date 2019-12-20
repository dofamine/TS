import { Category } from './enums';
import { Book, LibMgrCallback, Logger } from './interfaces';
import { BookOrUndefined, BookProperties } from './types';


export function getAllBooks(): readonly Book[] {
      return [
            {
                  title: 'Refactoring JavaScript',
                  author: 'Evan Burchard',
                  available: true,
                  category: Category.JAVASCRIPT, id: 1,
            },
            {
                  title: 'JavaScript Testing',
                  author: 'Liang Yuxian Eugene',
                  available: false,
                  category: Category.JAVASCRIPT,
                  id: 2,
            },
            {
                  title: 'CSS Secrets',
                  author: 'Lea Verou',
                  available: true,
                  category: Category.CSS,
                  id: 3,
            },
            {
                  title: 'Mastering JavaScript Object-Oriented Programming',
                  author: 'Andrea Chiarelli',
                  available: true,
                  category: Category.ANGULAR,
                  id: 4,
            }
      ] as const;
}

export function logFirstAvailable(books: readonly Book[] = getAllBooks()) {
      console.log(`Total books: ${books.length}`);

      const firstAvailable = books.find(book => book.available);
      console.log(`First available: ${firstAvailable.title}`);
}

export function getBookTitlesByCategory(category: Category = Category.JAVASCRIPT): Array<string> {
      const books = getAllBooks();

      return books.filter(book => book.category === category).map(book => book.title);
}

export function logBookTitles(bookTitles: string[]): void {
      console.log(bookTitles);
}

export function getBookAuthorByIndex(bookIndex: number): [string, string] {
      const books = getAllBooks();
      const { title, author } = books[bookIndex];

      return [title, author];
}

// export function calcTotalPages(): bigint {
//   const libraries = [
//     { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
//     { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
//     { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 },
//   ] as const;
//
//   return libraries.reduce((acc, lib) => {
//     const libPages = BigInt(lib.books) * BigInt(lib.avgPagesPerBook);
//
//     return acc + libPages;
//   }, 0n);
// }

export const displayTitles = (books: readonly Book[]) => {
      books.forEach(book => console.log(book.title));
};

export const getBookByID = (id: number): BookOrUndefined => {
      const books = getAllBooks();

      return books.find(book => book.id === id);
};

export const createCustomerID = (name: string, id: number): string => `${name}${id}`;

export const createCustomer = (name: string, age?: number, city?: string) => {
      console.log(`Customer name: ${name}`);

      if (age) {
            console.log(`Customer age: ${age}`);
      }
      if (city) {
            console.log(`Customer city: ${city}`);
      }
};

export const сheckoutBooks = (customer: string, ...bookIDs: number[]): string[] => {
      console.log(`Checking books for ${customer}`);

      return bookIDs.reduce((acc, bookID) => {
            const book = getBookByID(bookID);

            return book.available ? [...acc, book.title] : acc;
      }, []);
};

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(...args: any[]) {
      const books = getAllBooks();

      if (!args.length) {
            return [];
      }
      if (args.length === 1) {
            const arg = args[0];

            if (typeof arg === 'string') {
                  return books.filter(book => book.author === arg).map(book => book.title);
            }
            if (typeof arg === 'boolean') {
                  return books.filter(book => book.available === arg).map(book => book.title);
            }
      }
      if (args.length === 2) {
            const [id, available] = args;

            if (typeof id === 'number' && typeof available === 'boolean') {
                  return books.filter(book => book.id === id && book.available === available).map(book => book.title);
            }
      }
}

export const printBook = (book: Book) => console.log(`${book.title} by ${book.author}`);

export const logDamage: Logger = reason => console.log(`logging damage: ${reason}`);

export const getBookProps = (book: Book, bookProp: BookProperties) => {
      const prop = book[bookProp];

      return typeof prop === 'function' ? prop.name : prop;
};

export const purge = <T>(list: T[]): T[] => {
      return list.slice(2);
};

export const getBooksByCategory = (category: Category, callback: LibMgrCallback) => {
      setTimeout(() => {
            try {
                  const titles = getBookTitlesByCategory(category);

                  if (titles.length >= 1) {
                        callback(null, titles);

                        return;
                  }

                  throw new Error('No books found!');
            } catch (error) {
                  callback(error, null);
            }
      }, 2000);
};

export const logCategorySearch = (error: Error, title: string[]) => {
      if (error) {
            console.log(error.message);
      } else {
            console.log(title);
      }
};

export const getBooksByCategoryPromise = (category: Category): Promise<string[]> => new Promise((resolve, reject) => {
      setTimeout(() => {
            const titles = getBookTitlesByCategory(category);

            return titles.length >= 1 ? resolve(titles) : reject('No books found');
      }, 2000);
});

export const logSearchResults = async (category: Category): Promise<void> => {
      const books = await getBooksByCategoryPromise(category);

      console.log(books);
};
