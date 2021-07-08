export class QueueNode<T> {
    data: T;
    previousItem: QueueNode<T>;

    public constructor(data: T) {
        this.data = data;
    }
}