// const people = [
//     {name: 'Vlad', age: 17, budget: 40000},
//     {name: 'Nadia', age: 41, budget: 100000},
//     {name: 'Yury', age: 53, budget: 80000},
//     {name: 'Dasha', age: 33, budget: 50000},
//     {name: 'Katia', age: 39, budget: 60000},
//     {name: 'Natallia', age: 65, budget: 50000},
// ]

// for
// for(let i = 0; i < people.length; i++){
//     console.log(people[i])
// };


// for of
// for(let person of people){
//     console.log(person)
// }

//forEach

// people.forEach((person, index, peopleArr) => {
//     console.log(person);
//     console.log(index);
//     console.log(peopleArr);
// })


//map создает новый массив и применяет колбек функцию к каждому элементу

// const newPeople = people.map((person) => {
//     return `${person.name} (${person.age})`

// })
// console.log(newPeople)


//filter фильтрует исходный массив
// простой метод обхода с помощью for
//let newPeople = []
// for(let i = 0; i < people.length; i++){
// if(people[i].age >= 18){
// newPeople.push(people[i])
// }
// }
//console.log(newPeople)

// newPeople = people.filter((el, index, arrPeople) => {
// if(el.age >= 18){
//     return true
// } 
// })

//сщкращенный формат
// newPeople = people.filter(el => el.age >= 18)
// console.log(newPeople)

// reduce получаем итоговый результат проходя по массиву
//let amount = 0;
// for(let i = 0; i < people.length; i++){
//     amount += people[i].budget
// }


// amount = people.reduce((acc, el) => acc + el.budget, 0)
// console.log(amount);

//find
// const findByName = people.find((el) => el.name === 'Nadia');
// console.log(findByName);

// const findIndex = people.findIndex((el) => el.age === 65);
// console.log(findIndex)

//объяденение методов ====================

// const newPeople = people
// .filter((el) => el.budget > 50000) // возвращает новый массив
// .map((el) => {
//     return {
//        info: `${el.name} ${el.age}`,
//        budget: el.budget * 1.2
//     }
// })
// .reduce((acc, el) => acc + el.budget, 0)

// console.log(newPeople)

//const arr = ["apple", "banana", "apple", "cherry"]

// function findDuplicates(arr) {
//   let duplicates = [];
//   let seen = {};
//   for(let i = 0; i < arr.length; i++){
//     if(seen[arr[i]]){
//         if(!duplicates.includes(arr[i])){
//             duplicates.push(arr[i])
//         }
//     } else {
//         seen[arr[i]] = 1;
//     }
//   } return duplicates;
//   }

  // console.log(findDuplicates(arr))

  // function findDuplicates1(arr){
  //   let duplicates = {};
  //   for(let i = 0; i < arr.length; i++){
  //       if(duplicates[arr[i]]){
  //           duplicates[arr[i]] += 1;
  //       } if(!duplicates[arr[i]]){
  //           duplicates[arr[i]] = 1
  //       }
  //   } let result = []
  //  for(let key in duplicates){
  //   if(duplicates[key] > 1){
  //       result.push({ element: key, count: duplicates[key] })
  //   }
  //  } return result
  // }
 // console.log(findDuplicates1(arr))
  
  // function findUniqueNumbers(arr) {
  //   let newArr = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (!newArr.includes(arr[i])) {
  //       newArr.push(arr[i]);
  //     }
  //   }
  //   return newArr;
  // }

  // console.log(findUniqueNumbers(arr));

  // function findUniqueValues(arr){
  //   let uniques = [];
  //   for(let i = 0; i < arr.length; i++){
  //       if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])){
  //           uniques.push(arr[i])
  //       }
  //   } return uniques
  // }
  
  //console.log(findUniqueValues(arr))

  // function findFirstAndLastIndex(arr, target){
  //   let result = [];
  //   let firstIndex = arr.indexOf(target);
  //   let lastIndex = arr.lastIndexOf(target);

  //       if(firstIndex !== -1 && lastIndex !== -1){
  //           result.push(firstIndex);
  //           result.push(lastIndex)
  //       } else {
  //           result = [-1, -1]
  //       } return result
  //   }

    // console.log(findFirstAndLastIndex(arr, "apple"))

    // function findUniqueValues(arr){
    //   let newArr = []
    //   for(let i = 0; i < arr.length; i++){
    //     if(!newArr.includes(arr[i])){
    //       newArr.push(arr[i])
    //     }
    //   } return newArr
    // };

    // function findUniqueValues1(arr){
    //   let newArr = [];
    //   for(let i = 0; i < arr.length; i++){
    //     if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])){
    //       newArr.push(arr[i])
    //     }
    //   } return newArr
    // }

    // console.log(findUniqueValues1(arr))

    // function findFirstAndLastIndex(arr, target){
    //   let result = [];
    //   let firstIndex = arr.indexOf(target)
    //   let lastIndex = arr.lastIndexOf(target)
    //   if(firstIndex !== -1 && lastIndex !== -1){
    //     result.push(firstIndex);
    //     result.push(lastIndex);
    //   } else {
    //     result = [-1, -1]
    //   }
    //   return result
    // }

    // function findDuplicates1(arr){
    //   let dublicates = {}
    //   for(let i = 0; i < arr.length; i++){
    //     if(dublicates[arr[i]]){
    //       dublicates[arr[i]] += 1
    //     } if(!dublicates[arr[i]]){
    //       dublicates[arr[i]] = 1
    //     }
    //   } let result = []
    //   for(let key in dublicates) {
    //     if(dublicates[key] > 1){
    //       result.push({ element: key, count: dublicates[key] })
    //     }
    //   } return result
    // }
  //   function subsetA(arr) {
  //     const n = arr.length;
  //     arr.sort((a, b) => a - b); // Sort the array in ascending order
  
  //     let maxSum = 0;
  //     let maxSubset = [];
  //     let currentSum = 0;
  //     let currentSubset = [];
  
  //     for (let i = n - 1; i >= 0; i--) {
  //         if (currentSum <= 0) {
  //             currentSum += arr[i];
  //             currentSubset.push(arr[i]);
  //         } else {
  //             break;
  //         }
  
  //         if (currentSum > maxSum) {
  //             maxSum = currentSum;
  //             maxSubset = [...currentSubset];
  //         }
  //     }
  
  //     return maxSubset;
  // }
  
  // Example usage
 
  
//   function subsetA(arr) {
//     arr.sort((a, b) => b - a);

//     const n = arr.length;
//     let sumA = 0;
//     let sumB = 0;
//     let subsetA = [];

//     for (let i = 0; i < n; i++) {
//         if (sumA <= sumB) {
//             subsetA.push(arr[i]);
//             sumA += arr[i];
//         } else {
//             break;
//         }
//     }

//     return subsetA;
// }

// const arr = [6, 5, 3, 2, 4, 1, 2];
// const result = subsetA(arr);
// console.log(result);

// function resetLeagueStandings(lastSeasonStandings) {
//   // Шаг 1: Сохранение команды, занявшей первое место
//   const firstTeam = lastSeasonStandings[1];

//   // Шаг 2 и 3: Создание массива из остальных команд и сортировка
//   const sortedOtherTeams = Object.values(lastSeasonStandings)
//       .filter(team => team !== firstTeam)
//       .sort();

//   // Шаг 4: Формирование нового объекта с позициями
//   const newSeasonStandings = { 1: firstTeam };
//   sortedOtherTeams.forEach((team, index) => {
//       newSeasonStandings[index + 2] = team; // Начинаем с 2, т.к. 1 уже занято
//   });

//   return newSeasonStandings;
// }

// // Пример использования
// const lastSeason = {1: 'Leeds United', 2: 'Liverpool', 3: 'Manchester City', 4: 'Coventry', 5: 'Arsenal'};
// const newSeason = resetLeagueStandings(lastSeason);

// console.log(newSeason);


// let str = 'a'
// let n = 9;
// function padIt(str,n){
//   let paddelStr = str;
//   let i = 0;
//    while (n > 0){
//      if(i % 2 === 0){
//        paddelStr = '*' + paddelStr
//      } else {
//        paddelStr += '*'
//      }
//      i++;
//      n--;
//    }
//     return paddelStr
//   }

//   console.log(padIt(str, n))

  // function getCountOfOddNumbers(number) {
  //   let count = 0;
  //   for (let i = 0; i <= number; i += 1) {
  //     if (i % 2 !== 0) {
  //       count += 1;
  //     }
  //   }
  //   return count;
  // }

  // console.log(getCountOfOddNumbers(-3))

  // выбираем из array пару елементов сумма которых соответствует таргету (нужному числу)
  // запомни!!!!!!! Что бы оставить только уникальные пары значений во втором!!!! лупе вместо j = 0 -> добавь j = i + 1!!!!!!!

  function pairInArray(array, target) {

    let pairs = [];
    for(let i = 0; i < array.length; i++){
      let num1 = array[i];
      for(let j = i + 1; j < array.length; j++){
        let num2 = array[j];
        if(num1 + num2 === target) {
          let pair = [num1, num2];
          pairs.push(pair);
        }
      }
    }
    return pairs;
  }

  console.log(pairInArray([2, 3, 4, 6, 5], 8));
  console.log(pairInArray([1, 2, 3, 4, 5], 10));
  console.log(pairInArray([11, 2, 3, 41, 0], 3));


  //возвращаем пару елементов с одинаковым индексом из двух arrays

  function returnPairsOfEl(arr1, arr2) {
    let result = [];
    for(let i = 0; i < arr1.length; i++){
      let el1 = arr1[i];
      let el2 = arr2[i];
      let pair = [el1, el2];
      result.push(pair)
    }

    return result;
  }

  console.log(returnPairsOfEl([1, 2, 3], [4, 5, 6]));