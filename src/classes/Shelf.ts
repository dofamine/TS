export default class Shelf<T> {
    private _items: T[] = [];

    add(item: T) {
        this._items.push(item);
    }

    getFirst(): T {
        return this._items[0];
    }
}
