export class StackItem<T> {
    data: T;
    previousItem: StackItem<T> = null;

    public constructor(data: T) {
        this.data = data;
    }
}