class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null; 
        this.count = 0; // Инициализация счетчика узлов
    }

    add(value) {
        const addWithin = (node, value) => {
            if (!node) {
                return new Node(value);
            }
            if (node.value === value) {
                return node;
            }
            if (value < node.value) {
                node.left = addWithin(node.left, value);
            } else {
                node.right = addWithin(node.right, value);
            }
            return node;
        }

        this.root = addWithin(this.root, value);
        this.count++;
    }


    insert(value) {
        this.count++;

        let newNode = new Node(value);

        const searchTree = node => {
            //if value < node.value, go left
            if(value < node.value){
                //if no left child, append new node
                if(!node.left){
                    node.left = newNode;
                    //if left child, look left again
                } else {
                    searchTree(node.left);
                }
                //if value > node.value, go right
            } else if (value > node.value){
                //if no right child, append new node
                if(!node.rigth){
                    node.rigth = newNode;
                    //if right child, look right again
                } else {
                    searchTree(node.rigth);
                }
            }
        }
        searchTree(this.root);
    }

    has(value){
        return searchWithinn(this.root, value);

        function searchWithinn(node, value) {
            if(!node){
                return false;
            }

            if(node.value === value){
                return true;
            }

            return value < node.value ?
            searchWithinn(node.left, value) :
            searchWithinn(node.rigth, value);
        }
    }

    remove(value) {
        this.root = removeNode(this.root, value);

        function removeNode(node, value) {
            if(!node){
                return null; //это точка остановки рекурсии, что бы она не была бесконечной. ТОесть если дерево пустое мы выходим из функции
            }

            if(value < node.value) {
                node.left = removeNode(node.left, value); // в каждом шаге мы получаем полностью обновленное поддерево, из которого удален искомый узел
                return node;
            } else if (node.value < value){
                node.rigth = removeNode(node.rigth, value);
                return node;
            } else { // проверка в случае если значения одинаковые
                if(!node.left && !node.rigth){ 
                    return null // если у узла нет потомков мы просто удаляем его
                }

                if(!node.left){
                    node = node.rigth;
                    return node; // если у узла нет левого потомка мы возвращаем правого потомка
                }

                if(!node.rigth){
                    node = node.left;
                    return node; // если у узла нет правого потомка мы возвращаем левого потомка
                }

                let minFromRigth = node.rigth; // если у узла есть оба потомка мы ищем минимальный узел в правом поддереве начинаем с корня правого поддерева
                while(minFromRigth.left) {
                    minFromRigth = minFromRigth.left;
                }

                node.value = minFromRigth.value; // и заменяем значение удаляемого узла на значение минимального узла в правом поддереве

                node.rigth = removeNode(node.rigth, minFromRigth.value); // и удаляем минимальный узел в правом поддереве

                return node;
            }
        }
    }

    min() {
        if(!this.root){
            return // возвращаем фальс потому что не существует корня соответственно и дерева
        }

        let node = this.root; // заводим переменную как самый маленький элемент, начинаем с корня
        while(node.left){
            node = node.left; // доходим до самого левого значения, так как по определению оно и является самым маленьким
        }

        return node.value;
    }

    max(){
        if(!this.root){
            return // возвращаем фальс потому что не существует корня соответственно и дерева
        }

        let node = this.root;
        while(node.rigth){
            node = node.rigth; // доходим до самого правого значения, так как по определению оно и является самым большим
        }

        return node.value;
    }

    // левый обход дерева сортирует по возрастанию
    leftTraverse(cb) {
        const doLeft = (node, cb) => {
            if (node) {
                doLeft(node.left, cb);
                cb(node.value);
                doLeft(node.right, cb);
            }
        }
        if (cb) doLeft(this.root, cb);
    }

    rightTraverse(cb) {
        const doRight = (node, cb) => {
            if (node) {
                doRight(node.right, cb);
                cb(node.value);
                doRight(node.left, cb);
            }
        }
        if (cb) doRight(this.root, cb);
    }

    size(){
        return this.count;
    }
// depth first search - branch by branch

//in-order
//left, root, rigth
    dfInOrder() {
        let result = [];

        const traverse = node => {
            //if left child exists, go left again
            if(node.left){
                traverse(node.left);
            }
            //capture root node value
            result.push(node.value);
            //if rigth child exists, go rigth again
            if(node.rigth){
                traverse(node.rigth);
            }
        }

        traverse(this.root);

        return result;
    }

    //pre order
//root, left, rigth, 
    dfPreOrder() {
    let result = [];

    const traverse = node => {
        //capture root node value
        result.push(node.value);
        //if left child exists, go left again
        if(node.left){
            traverse(node.left);
        }
        //capture root node value
       
        //if rigth child exists, go rigth again
        if(node.rigth){
            traverse(node.rigth);
        }
    }

    traverse(this.root);

    return result;
}

//post-order
//left, rigth, root

    dfsPostOrder(){
        let result = [];

        const traverse = node => {
            
            //if left child exists, go left again
            if(node.left){
                traverse(node.left);
            }
            //capture root node value
           
            //if rigth child exists, go rigth again
            if(node.rigth){
                traverse(node.rigth);
            }

            //capture root node value
            result.push(node.value);
        }

        traverse(this.root);
    
        return result;
    }

    //breadth first search - level by level
    //use a queue!
    bfs(){
        let result = [];
        let queue = [];

        queue.push(this.root);

        while(queue.length){
            let current = queue.shift();

            result.push(current.value);

            if(current.left){
                queue.push(current.left);
            }

            if(current.rigth){
                queue.push(current.rigth);
            }
        }

       

        return result;
    }

}


function addItems(){
    console.log('Add items');
    console.log('add 13, 15, 9, 20, 18, 32, 25');

    bst.add(13);
    bst.add(15);
    bst.add(9);
    bst.add(20);
    bst.add(18);
    bst.add(32);
    bst.add(25);

    console.log(bst)

    //Should get something like thith
    //   13
    //  /  \
    // 9   15
    //       \
    //       20
    //      /  \
    //     18  32
    //        /
    //       25 
}


function getItems(){
    console.log('Get items');

    console.log('has 10', bst.has(10));
    console.log('has 15', bst.has(15));
    console.log('\n', bst);

    console.log('Left Traverse');
    bst.leftTraverse((value) => console.log(value));

    console.log('Rigth Traverse');
    bst.rigthTraverse((value) => console.log(value));

    console.log('min', bst.min());
    console.log('max', bst.max());
}

function removeItems(){
console.log('Remove Items');

bst.remove(15);
console.log('remove 15')
console.log(bst);

console.log('Left Traverse');
bst.leftTraverse((value) => console.log(value));

}


const bst = new BinarySearchTree();

addItems();
getItems();
removeItems();


// const bst = new BinarySearchTree(15);
// bst.insert(3);
// bst.insert(36);
// bst.insert(2);
// bst.insert(12);
// bst.insert(28);
// bst.insert(39);

// console.log(bst);

// console.log(bst.size());
// console.log(bst.min());
