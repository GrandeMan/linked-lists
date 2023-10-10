class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append = (value) => {
        let node = new Node(value);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.nextNode = node;
            this.tail = node;
        }
    };

    prepend = (value) => {
        let node = new Node(value);
        node.nextNode = this.head;
        this.head = node;
        if (this.tail === null) {
            this.tail = node;
        }
    };

    size = () => {
        let node = this.head;
        let size = 0;
        while (node != null) {
            size++;
            node = node.nextNode;
        }
        return size;
    };

    getHead = () => {
        return this.head ? this.head.value : null;
    };

    getTail = () => {
        return this.tail ? this.tail.value : null;
    };

    at = (index) => {
        let node = this.head;
        for (let i=0; i<index; i++) {
            if (node === null) {
                return null;
            }
            node = node.nextNode;
        }
        return node ? node.value : null;    
    };

    pop = () => {
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            let node = this.head;
            while (node.nextNode !== this.tail) {
                node = node.nextNode;
            }
            node.nextNode = null;
            this.tail = node;
        }
    };

    contains = (value) => {
        let node = this.head;
        while (node != null) {
            if (node.value === value) {
                return true;
            }
            node = node.nextNode;
        }
        return false;
    };

    find = (value) => {
        let node = this.head;
        let index = 0;
        while (node !== null) {
            if (node.value === value) {
                return index;
            }
            node = node.nextNode;
            index++;
        }
        return -1;
    };

    toString = () => {
        let node = this.head;
        let result = "";
        while (node != null) {
            result += node.value + " ";
            node = node.nextNode;
        }
        return result.trim();
    };

    insertAt = (value, index) => {
        if (index === 0) {
            this.prepend(value);
        } else {
            let node = this.head;
            for (let i=0; i<index-1; i++) {
                if (node === null) {
                    return;
                }
                node = node.nextNode;
            }
            if (node === null) {
                return;
            }
            let newNode = new Node(value);
            newNode.nextNode = node.nextNode;
            node.nextNode = newNode;
            if (newNode.nextNode === null) {
                this.tail = newNode;
            }
        }
    };

    removeAt = (index) => {
        if (this.head === null) {
            return;
        }
        if (index === 0) {
            this.head = this.head.nextNode;
            if (this.head === null) {
                this.tail = null;
            }
        } else {
            let node = this.head;
            for (let i = 0; i < index - 1; i++) {
                if (node === null || node.nextNode === null) {
                    return;
                }
                node = node.nextNode;
            }
            if (node === null || node.nextNode === null) {
                return;
            }
            node.nextNode = node.nextNode.nextNode;
            if (node.nextNode === null) {
                this.tail = node;
            }
        }
    };

}

// // Create a new LinkedList
// const linkedList = new LinkedList();
// console.log(`   Original list: ${linkedList.toString()}`);

// // Append some values
// linkedList.append(1);
// linkedList.append(2);
// linkedList.append(3);
// console.log(`   Appended values: ${linkedList.toString()}`);

// // Prepend a value
// linkedList.prepend(0);
// console.log(`   Prepend '0' to the list: ${linkedList.toString()}`);

// // Get the size of the list
// const size = linkedList.size();
// console.log(`   Size of the list: ${size}`);

// // Get the head and tail values
// const headValue = linkedList.getHead();
// const tailValue = linkedList.getTail();
// console.log(`   Head: ${headValue}`);
// console.log(`   Tail: ${tailValue}`);

// // Access an element at a specific index
// const elementAtIndex = linkedList.at(1);
// console.log(`   Element at index 1: ${elementAtIndex}`);

// // Check if the list contains a value
// const containsValue = linkedList.contains(3);
// const containsValue2 = linkedList.contains(4);
// console.log(`   Does the list contain '3': ${containsValue}`);
// console.log(`   Does the list contain '4': ${containsValue2}`);

// // Find the index of a value
// const findIndex = linkedList.find(2);
// console.log(`   Index of '2': ${findIndex}`);

// // Remove an element at a specific index
// linkedList.removeAt(1);
// console.log(`   List after removing element at index 1: ${linkedList.toString()}`);

// // Insert a value at a specific index
// linkedList.insertAt(1, 1);
// console.log(`   List after inserting '1' at index 1: ${linkedList.toString()}`);
