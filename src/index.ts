import {Stack} from "./stack/stack";
import {Queue} from "./queue/queue";
import {LinkedList} from "./linked-list/linked-list";
import {HashTable} from "./hash-table/hash-table";

/** STACK DATA STRUCTURE
const StackStructure = new Stack();
StackStructure.push("Messi");
StackStructure.push("Ronaldo");
StackStructure.push("Iniesta");
StackStructure.push("Xaxi");
console.log("deleted",StackStructure.pop());
console.log("deleted",StackStructure.pop());
console.log(StackStructure);
=======================================================
**/


/** QUEUE DATA STRUCTURE
const QueueStructure = new Queue();
QueueStructure.enqueue("Audi");
QueueStructure.enqueue("Bmw");
QueueStructure.enqueue("Lambo");
QueueStructure.enqueue("Ferrari");
// QueueStructure.clear();
console.log("Deleted",QueueStructure.dequeue());
console.log("Deleted",QueueStructure.dequeue());
QueueStructure.enqueue("Škoda");
console.log(QueueStructure);
 =======================================================
 **/

/** LINKED LIST DATA STRUCTURE
const LinkedListStructure = new LinkedList();
LinkedListStructure.add("První");
LinkedListStructure.add("Druhý");
LinkedListStructure.add("Třetí");
LinkedListStructure.add("Čtvrtý");
LinkedListStructure.remove("Čtvrtý");
LinkedListStructure.remove("Druhý");
console.log(LinkedListStructure);
 =======================================================
 **/

/** HASH TABLE DATA STRUCTURE
const HashTableStructure = new HashTable((data: { id: any; name: string }) => data.id);
HashTableStructure.insert([{
    id: 15,
    name: "Lukáš"
},{
    id: 7,
    name: "David"
},{
    id: 34,
    name: "Adam"
}]);
console.log(HashTableStructure);
 **/
