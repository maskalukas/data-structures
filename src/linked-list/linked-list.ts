import {LinkedListNode} from "./linked-list-node";

export class LinkedList<T> {

    private _head: LinkedListNode<T> = null;
    private last: LinkedListNode<T> = null;

    public add(data: T): void {
        const NewNode = new LinkedListNode(data);

        if(this._head === null) {
            this._head = NewNode;
        }

        if(this.last === null) {
            this.last = NewNode;
        } else {
            this.last.setNext(NewNode);
            this.last = NewNode;
        }
    }

    public remove(data: T): boolean {
        let startNode = this._head;

        let previousNode: LinkedListNode<T> = null;
        let foundedNode: LinkedListNode<T> = null;

        while (startNode !== null) {

            if(startNode.getData() === data) {
                foundedNode = startNode;
                break;
            }

            previousNode = startNode;
            startNode = startNode.getNext();
        }

        if(foundedNode) {
            if(foundedNode === this._head) {
                this._head = this._head.getNext();

                if(foundedNode === this.last) {
                    this.last = null;
                }
            } else if (foundedNode === this.last) {
                previousNode.setNext(null);
                this.last = null;
            } else {
                previousNode.setNext(foundedNode.getNext());
            }

            return true;
        } else {
            return false
        }
    }
}