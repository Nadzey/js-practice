// matrix это двухмерный массив первый индекс это индекс строки, второй это индекс элемента в строке,
// квадратная матрица, это матрица в которой количество строк и столбцов одинаковое

let matrix = [
    [1, 3, 5, 7, 9],
    [2, 0, 6, 8, 10],
    [11, 13, 15, 17, 19],
    [12, 14, 16, 18, 20],
    [21, 23, 25, 27, 0]
]

function logEachNatrixItem () {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++){
            console.log(` item {${i}, ${j}} - ${matrix[i][j]}`);
        }
    }
}

logEachNatrixItem(matrix);


// выводим всю матрицу

function showMatrix () {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '));
    }
}

showMatrix(matrix);

//функция которая считает сумму элементов строки в матрице и выводим все значения в новый массив

function showSumByRow() {
    let sumRes = [];
    let sum;
    for (let i = 0; i < matrix.length; i++) {
        sum = 0;
        for(let j = 0; j < matrix[i]. length; j++) {
            sum +=matrix[i][j]
        }
        sumRes.push(sum)
    }

    console.log(' res - ', sumRes)
}

showSumByRow(matrix);

//находим колонки в которых есть 0

function findColumnWithZerro(matrix) {
    let columnWithZerroIn = [];
    let columnCounnt = matrix[0].length;

    for (let i = 0; i < columnCounnt; i++) { // это столбец
        for(let j = 0; j < matrix.length; j++) { // это строка
            if (matrix[j][i] === 0) {
                columnWithZerroIn.push(i);
                break; //делаем брайк потому что не важно сколько нулей и первый найденный уже подходит
        }
       
        }
    }
    console.log('result indexes - ', columnWithZerroIn);
}

findColumnWithZerro(matrix);

//обход матрицы змея, начинаем с лево первой строки (четный индекс строки), потом с права (нечетный индекс строки) втрой и так далее

function snakeBypass() {
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            let columnInd = i % 2 === 0
            ? j
            : (matrix[i].length - j - 1);

            console.log(matrix[i][columnInd])
        }
    }
}

// snakeBypass(matrix);

// выводим диогональ. закономерность индексы элементов главной диогонали (с лева на право и с верху вниз) одинаковые тоесть 0.0 1.1 2.2 ит

function logMainDiag () {
    // можно перебирать все элементы из столбцов и строк и сравнива i and j но так как индекс столбца и индекс строки одинаковые, можно пройтись по строкам и применить тот же индекс к колонке
    for (let i = 0; i < matrix.length; i++){
        console.log(matrix[i][i])
    }
}

logMainDiag(matrix);

//побочная диогональ с лево на право, n это число строк, в данном случае и число столбцов так как матрица квадратная

let newMatrix = [
    [1, 2, 3, 4], // 0, n-1              |||||| 0 --- индекс строки = 0
    [5, 6, 7, 8], // 1, n -2             |||||| 0, 1 --- индекс строки равен 1
    [9, 10, 11, 12], // 2, n -3          |||||| 0, 1, 2 --- индекс строки = 2
    [13, 14, 15, 16] // 3, n - 4         |||||| 0, 1, 2, 3 --- индекс строки = 3
                                         // тоесть мы выводим все элементы до номера строки тоесть до i index
]

function logSideDiag() {
    let n = newMatrix.length;
    for (let i = 0; i < n; i++) {
        console.log(newMatrix[i][n - i - 1])
    }
}

logSideDiag(newMatrix);

// выводим нижний треугольник. Тоесть главная диогональ + все что находится под ней

function showBottomMainTriangle() {
    let row;

    for(let i = 0; i < matrix.length; i++) {
        row = [];
        for (let j = 0; j <= i; j++) {
            row.push(matrix[i][j])
        }
        console.log(row.join(' '))
    }
}

showBottomMainTriangle(newMatrix);

// ceate matrix with selected numbers of rows (это субарей) and columns

function createMatrix(rows, columns, value) {
    let matrix = [];
    for(let i = 0; i < rows; i++){
        let subarray = [];
        for(let j = 0; j < columns; j++){
            subarray.push(value);
        }
        matrix.push(subarray);
    }

    return matrix;
}

console.log(createMatrix(3, 5, null));

//multiplay in matrix

function multiplayInMatrix(matrix) {
    let sum = 1;
    for(let i = 0; i < matrix.length; i++){
        let subarray = matrix[i];
        for(let j = 0; j < subarray.length; j++){
            sum += subarray[j];
        }
    }
    return sum;
}

console.log(multiplayInMatrix(matrix));

