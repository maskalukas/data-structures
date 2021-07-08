import {StackItem} from "./StackItem";

export class Stack<T> {

    private _top: StackItem<T> = null;

    public push(data: T): void {
        const NewItem = new StackItem(data);

        if(this._top === null) {
            this._top = NewItem;
        } else {
            NewItem.previousItem = this._top;
            this._top = NewItem;
        }
    }

    public pop(): T {
        if(this.isEmpty()) {
            return null;
        } else {
            const CurrentItem = this._top;
            this._top = CurrentItem.previousItem;

            return CurrentItem.data;
        }
    }

    public getTop(): T {
        return this._top.data;
    }

    public isEmpty(): boolean {
        return !this._top;
    }

    public clear(): void {
        this._top = null;
    }

}