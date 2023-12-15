class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    add(value) {
        if(this.length === 0) {
            this.head = new Node(value);
        } else {
            let current = this.head;

            while(current.next){
                current = current.next;
            }

            current.next = new Node(value);
        }
        this.length++;
    }

    insert(position, value){
        if(position < 0 || position > this.length){
            return false; 
        }

        let node = new Node(value);

        if(position === 0){
            node.next = this.head;
            this.head = node;
        } else {
            let current = this.head;
            let prev = null;

            let index = 0;

            while(index < position){
                prev = current;
                current = current.next;
                index++;
            }

            prev.next = node;
            node.next = current;
        }
        this.length++;
    }    

    //поиск позиции нужного node элемента

    get(position) {
        if(position < 0 || this.length <= position) {
            return // возращаем фальс потому что длинна равна 0
        }

        let current = this.head;
        let index = 0;

        while(index < position) {
            current = current.next;
            index++;
        }

        return current.value;
    }

    removeAt(position) {
        if(position < 0 || position >= this.length){
            return;
        }
        
        let current = this.head; // назначаем нужный элемент первым в списке

        if(position === 0) {
            this.head = current.next;
        } else {
            let prev = null;
            let index = 0;

            while(index < position) {
                prev = current;
                current = current.next;
                index++;
            }

            prev.next = current.next;
        }

        this.length--;
        return current.value;
    }

    //просто удаляем элемент по индексу

    remove(element){
        this.removeAt(this.indexOf(element))
    }

    indexOf(element){
        let current = this.head;
        let index = 0;

        while(current) {
            if(current.value === element){
                return index;
            }

            current = current.next;
            index++;
        }

        return -1;
    }

    size() {
        return this.length;
    }

    isEmpty(){
        return this.length === 0;
    }

    print(){
        let current = this.head;

        while(current){
            console.log(current.value);
            current = current.next;
        }
    }
    // добавление в конец или tail
    append(value){
      //if list is empty
      if(!this.tail){
        this.head = this.tail = new Node(value)
    } else {
        let oldTail = this.tail;
        this.tail = new Node(value);
        this.tail.prev = oldTail;
    }

    }
    // добавление в начало или head
    prepend(value){
        if(!this.head){
            this.head = this.tail = new Node(value)
        } else {
            let oldHead = this.head;
            this.head = new Node(value);
            oldHead.prev = this.head;
            this.head.next = oldHead;
        }
    }

    deleteHead(){
            //если пустой лист
            if(!this.head){
                return null
            } else {
                let removedHead = this.head;
                 //если один элемент в листе
                 if(this.head === this.tail){
                    this.head = this.tail = null;
                 } else {
                    this.head = this.head.next
                    this.head.prev = null;
                 }
    
                 return removedHead.value;
            }
    }

    deleteTail(){
        //если пустой лист
        if(!this.tail){
            return null
        } else {
            let removedTail = this.tail;
             //если один элемент в листе
             if(this.head === this.tail){
                this.head = this.tail = null;
             } else {
                this.tail = this.tail.prev;
                this.tail.next = null;
             }

             return removedTail.value;
        }

    }

    search(value){
        let currentNode = this.head;

        while(currentNode){
            if(currentNode.value === value){
                return currentNode;
            }

            currentNode = currentNode.next;
        }
        return null;

    }
}


let payLoad = { a: 4};

function addItems(){
console.log(' Add items')

    list.add({ a: 1});
    list.add({ a: 2});
    list.add({ a: 3});

    list.insert(2, payLoad);

    list.insert(0, { a: 5});
    list.insert(5, { a: 6});

    list.print();
}

function getItems(){
    console.log(' Get Items');

    console.log('get(4):', list.get(4));
    console.log('get(0):', list.get(0));
    console.log('get(-5):', list.get(-5));

    console.log('indexOf {a: 5}:', list.indexOf({a: 5}));
    console.log('indexOf payload:', list.indexOf(payLoad));


}

function removeItems(){
    console.log(' Remove Items');

    console.log(' Before:');
    list.print();

    list.remove(payLoad);

    console.log(' After:');
    list.print();
}

let list = new LinkedList();

addItems();
getItems();
removeItems();


list.append(111);
list.append(222);
list.append(333);


list.prepend(0);
list.prepend(-1);


console.log(list.search(111));
console.log(list.search(9999));


list.deleteHead();
list.deleteTail();
list.deleteHead();
list.deleteTail();
list.deleteHead();
list.deleteTail();


console.log(list)