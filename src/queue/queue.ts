import {QueueNode} from "./queue-node";

export class Queue<T> {

    private _first: QueueNode<T> = null;

    private _last: QueueNode<T> = null;

    public enqueue(data: T): void {
        const NewItem = new QueueNode(data);

        if(this._first === null ) {
            this._first = NewItem;
        }

        if(this._last === null) {
            this._last = NewItem;
        } else {
            this._last.previousItem = NewItem;
            this._last = NewItem;
        }
    }

    public dequeue(): T {
        if(this._first) {
            const currentItemData = this.getCurrentItem();

            this._first = this._first.previousItem;

            return currentItemData;
        } else {
            return null;
        }
    }

    public getCurrentItem(): T {
        return this._first.data;
    }

    public isEmpty(): boolean {
        return this._first === null;
    }

    public clear(): void {
        this._first = null;
        this._last = null;
    }

}