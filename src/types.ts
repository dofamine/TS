import {Author, Book, Person} from './interfaces';

export type BookProperties = keyof Book;
export type PersonBook  = Book & Person;
export type BookOrUndefined = Book | undefined;

export type BookRequiredFields = Required<Book>;
export type UpdatedBook = Partial<Book>;
export type AuthorWoEmail = Omit<Author, 'email'>;

export type createCustomerFunctionType = (name: string, age?: number, city?: string) => void;
