
export class HashTable<T> {

    private _count = 0;

    private _store: T[] = [];

    private hashFunction: Function;

    public constructor(hashFunction: Function) {
        this.hashFunction = hashFunction;
    }

    public increment(): number {
        this._count++;
        return this._count;
    }

    public decrement(): number {
        this._count--;
        return this._count;
    }

    public insert(data: T|T[]): void {
        if(Array.isArray(data)) {
            data.forEach(value => {
                this.createHashAndInsert(value);
            })
        } else {
            this.createHashAndInsert(data);
        }
    }

    private createHashAndInsert(data: T): any {
        const hash = this.hashFunction(data);
        this._store[hash] = data;
    }


}