// Stack structure:
// LIFO Last In First Out

//---------------------
// 1   2   3   4 .... <-->
//---------------------


// base operations: Push / Pop / Top / size / is_empty

function stackOnArrayExample() {
    let stack = [];

   console.log ('Push fake call stack');

   console.log ('Push Outer');
   stack.push('Outer');

   console.log ('Push Inner');
   stack.push('Inner');

   console.log ('Push Super-Inner');
   stack.push('Super-Inner');

   console.log ('Push Supper-Supper-Inner');
   stack.push('Super-Super-Inner');

   console.log ('Execute nfake call stack');

   while(stack.length) {
    let operation = stack.pop();
    console.log('execute -', operation)
   }
   
}

bracketsIssue();

//Brackets examples:
//()(()()) - ok;
//())(() - wrong;

//(){}({}()) - ok;
//(}({}()) - wrong;

// как мы добавляем в стек, начинаем с открывающейся скобки, потом проверяем следующую если она закрывающаяся и такая же удаляем предыдущую из стека


function bracketsIssue() {
    const OPEN_BRACKETS = ['(', '{', '['];
    const BRACKETS_PAIR = {
        [')']: '(',
        ['}']: '{',
        ['[']: ']'
    }

    function isBracketsOk(str) {
        let stack = [];

        for (let i = 0; i < str.length; i++) {
            let currentSymbol = str[i];

            if (OPEN_BRACKETS.includes(currentSymbol)) {
                stack.push(currentSymbol);
            } else {
                if (stack.length === 0) {
                    return false;
                }

                let topElement = stack[stack.length - 1];
                if(BRACKETS_PAIR[currentSymbol] === topElement) {
                    stack.pop();
                } else {
                    return false
                }
            }
        }
        return stack.length === 0;
    }

    console.log(' check case = ()(()())', isBracketsOk('()(()())'));
    console.log(' check case = ())(()', isBracketsOk('())(()'));
    console.log(' check case = (){}({}())', isBracketsOk('(){}({}())'));
    console.log(' check case = (}({}())', isBracketsOk('(}({}())'));
}

//create stack with constructor

class Stack {
    constructor() {
        this.storege = {};
        this.size = 0;
    }

    push(element) {
        this.size++
        this.storege[this.size] = element
    }

    pop() {
        let removed = this.storege[this.size];
        delete this.storege[this.size];
        this.size--
        return removed;

    }

    peek() {
        return this.storege[this.size];
    }
}

let stack = new Stack();
stack.push('cat');
stack.push('dog');
stack.push('abracadabra');

console.log(stack);

stack.pop();


//разница между stack and queue - stack - LIFO, queue - FIFO для стак - push/pop, для кью - enqueue/dequeue push/shift
//стак последний зашел первый вышел, кью первый зашел первый вышел

class Queue {
    constructor() {
        this.storege = {};
        this.head = 0;
        this.tail = 0;
    }

    enqueue(element) {
        this.storege[this.tail] = element;
        this.tail++;
    }

    dequeue() {
        let removed = this.storege[this.head];
        delete this.storege[this.head];
        this.head++;
        return removed;
    }
}

const queue = new Queue();

queue.enqueue('cat');
queue.enqueue('dog');
queue.enqueue('abracadabra');

console.log(queue);

queue.dequeue();