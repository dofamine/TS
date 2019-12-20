import { Category } from './enums';

interface Book {
    title: string;
    author: string;
    available: boolean;
    id: number;
    category: Category;
    pages?: number;
    markDamaged?: DamageLogger;
}

interface DamageLogger {
    (reason: string): void;
}

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer(custName: string): void;
}

interface Magazine {
    title: string;
    publisher: string;
}

interface LibMgrCallback {
    (err: Error, titles: string[]): void;
}

export {
    Book,
    Person,
    Librarian,
    Author,
    DamageLogger as Logger,
    Magazine,
    LibMgrCallback,
};
