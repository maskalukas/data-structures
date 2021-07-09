export class LinkedListNode<T> {

    private _data: T;
    private _next: LinkedListNode<T> = null;

    public constructor(data: T) {
        this.setData(data);
    }

    public getData(): T {
        return this._data;
    }

    public setData(data: T): void {
        this._data = data;
    }

    public getNext(): LinkedListNode<T>|null {
        return this._next;
    }

    public setNext(NextNode: LinkedListNode<T>): void {
        this._next = NextNode;
    }
}