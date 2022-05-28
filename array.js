//deklarowanie nowej tablicy 

// sposób 1

const numbers = [1, 50, 80, 0, 400, 700, 2, 3, 4];
const numbersEmpty = []

// 2 sposób 

const age = new Array(5, 80, 90, 70);
const ageEmpty = new Array()



// map zwraca nową tablicę, z taką samą ilością elementów 
// dostepne wartości currentValue, index, array
const numbersMap = numbers.map((currentValue, index, array) => {
    // console.log('currentValue', currentValue)
    // console.log('index', index)
    // console.log('array', array)
    return currentValue * 2
})
console.log('stara tablica numbers', numbers)
console.log('nowa tablica numbersMap', numbersMap)
// zwórć nową tablice na podstawie numbers, ale z tylko liczbami parzystymi, a Zero zamieni na 2
// const numbers = [1, 50, 80, 0, 400, 700, 2, 3, 4];
const numbersZParzystymiUzywajacMap = numbers.map((currentValue) => {
    if(currentValue === 0) {
        return 2
    } else if (currentValue % 2 === 0) {
        return currentValue
    } else {
        return currentValue + 1
    }
    // usuń else i zobacz co się stanie.
})
console.log(numbersZParzystymiUzywajacMap)

// alternatywny zapis funkcji 
// tradycyjna 
// function callBack (currentValue) {
//     if(currentValue === 0) {
//         return 2
//     } else if (currentValue % 2 === 0) {
//         return currentValue
//     } else {
//         return currentValue + 1
//     }
//     // usuń else i zobacz co się stanie.
// }
// // do zminnej 
// const callBack2 = (currentValue) => {
//     if(currentValue === 0) {
//         return 2
//     } else if (currentValue % 2 === 0) {
//         return currentValue
//     } else {
//         return currentValue + 1
//     }
//     // usuń else i zobacz co się stanie.
// }


// filter 
// zwraca nową tablice, iloście elemtów to max orginalna wielkości filtowanej tablicy, min 0. filert nie mutuje danych 
// const numbers = [1, 50, 80, 0, 400, 700, 2, 3, 4];

const numbersFilter = numbers.filter((currentValue) => {
    // if(currentValue === 0) {
    //     return 2
    // } else if (currentValue % 2 === 0) {
    //     return currentValue
    // }
    // powyższy kod zwróci tablice [50, 80, 0, 400, 700, 2, 4]
    // mimo że chcemy zminic 0 na 2 w if

    if(currentValue % 2 === 0 && currentValue > 0) {
        return currentValue
    }

})

const numbersFilterOdwrotna = numbers.filter((currentValue) => {

    if(currentValue === 0 || currentValue % 2 !== 0 ) {
        console.log(typeof currentValue)
        return currentValue + ''
    }
})
console.log('numbersFilter', numbersFilter)

console.log('numbersFilterOdwrotna', numbersFilterOdwrotna)

// includes 
// nie zwraca tablicy tylko bool tj. true lub false

const hasNum70 = numbers.includes(70)
console.log('czy numbers ma liczbę 70 ' , hasNum70)

// find 
// zwraca pierwszy el. spełniający warunek 
//const numbers = [1, 50, 80, 0, 400, 700, 2, 3, 4];
const numbersFind = numbers.find(currentValue => currentValue > 40) 

// to samo co const numbersFind = numbers.find(currentValue => currentValue > 40) mozna zapisać tak 
// const numbersFind = numbers.find((currentValue) => {
//     return currentValue > 40
// })
console.log('numbersFind ', numbersFind)

// findIndex 
// uzupełnimy jak poznamy objekty

// push 
// dodawnie el. do tablicy na sam koniec 
// const numbersPush = numbers.push(7777) // poda index na który wpadł el lub ilości el w nowej tablicy 
// console.log(numbersPush)

numbers.push(7777)
console.log('numbers po push ', numbers)

// masz tablice numbers z liczbami. Stwórz tablice z liczbali tylko parzystymi. 
// const numbers = [1, 50, 80, 0, 400, 700, 2, 3, 4];
let arr = []

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0) {
        arr.push(numbers[i])
        console.log(arr)
    }
}

// pop 
// usuwa ostatni el. z tablicy 
console.log('przed usuwaniem',numbers)
const elUsunięty = numbers.pop() 
console.log(elUsunięty)
console.log('po usuwaniu',numbers)

// unshift dodanie na poczatek tablicy 

const dodanyEl = numbers.unshift(70)
console.log(dodanyEl)

// shift usuwa pierwszy el z tablicy 

const coUsuwam =  numbers.shift()
console.log(coUsuwam)


// forEach 
// nic nie zwraca, iteruje po tablicy 

numbers.forEach((currentValue) => {
   // console.log(currentValue)
    // linie poniżej słuzą do wypisania zawrtości tablicy 
    // const app =  document.getElementById('app')
    // app.innerHTML += '<p>' + currentValue + '</p>'
})
// to jest przykałd nie analizujemy go dziś. Wrucimy do tematu na zajęciach o AJAX
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(res => res.json())
// .then(res => {
//     // console.log(res)
//     const app =  document.getElementById('app')
//     res.forEach((currentValue) => {
//         app.innerHTML += '<p>' + currentValue.body + '</p>'
//     })
// })


// some
// zwraca boll tj. true lub false 
// const numbers = [1, 50, 80, 0, 400, 700, 2, 3, 4];

// const isMoreThat100 = numbers.some((currentValue) => currentValue > 100)

const isMoreThat100 = numbers.some((currentValue) => {
    console.log(currentValue)
    return currentValue > 100
})

// to samo ale forEach 

let isMorethat101 = null
numbers.forEach((currentValue) => {
    console.log('forEach', currentValue)
    if(currentValue > 101) {
        isMorethat101 = true
    }
})
console.log('forEach', isMorethat101)
console.log('some', isMoreThat100)


// every 
// zwraca boll tj. true lub false 
// const numbers = [1, 50, 80, 0, 400, 700, 2, 3, 4]

const isEveryItemIsMoreThat100 = numbers.every((currentValue) => {
    console.log('every', currentValue)
    return currentValue > 100
})
console.log(isEveryItemIsMoreThat100)

// 
const arr1 = [5,8,9]
const arr2 = [1,2,3]
const arr3 = [5,8,9,1,2,3]

//  arr1.push(arr2) // błąd wyjdzie [5,8,9, [1,2,3]]
//  console.log(arr1)
// arr2.forEach((currentValue, index, arr)=> {
//     console.log(currentValue, arr, arr1)
//     arr1.push(currentValue)
// })
//  console.log(arr1)

 // concat zwraca nową tablicę. 
 //Łączy ze sobą tablice lub stringi w jedną tablicę, w dowolnej ilości 
 // można podobny efekt osiągnąc forEach

 const arr4 = arr1.concat(arr2,arr3, 'Jan' )
console.log('uzywamy concat', arr4)
// sort 


const names  = ['Jan', "Żaneta", "Mikołaj", 'Łucja']
console.log(names.sort())

// const numbers = [1, 50, 80, 0, 400, 700, 2, 3, 4];
console.log(numbers)
const posortowneLiczby = numbers.sort((a, b) =>{
    console.log(a , b)
    return a - b // zwraca liczby od najmnijszej do najwiękdszej
    // b - a od największej do najmnijeszej.
})
console.log(posortowneLiczby)

const exArr = [40, 25, 36, 71]

const exArrFilter = exArr.filter((currentValue) => {
    return currentValue % 2 === 0
    // rezultat [40, 36]
})
const exArrFilterWithMap = exArrFilter.map((currentValue) => {
    return currentValue / 2
    // rezultat [20, 18]// rezultat [20, 18]
})

const exArrFilterAndMap = exArr.filter((currentValue, index , orginalnaTablica) => {
    console.log('filter', orginalnaTablica)
    return currentValue % 2 === 0
    // rezultat [40, 36]//
}).map((currentValue, index , orginalnaTablica) => {
    console.log('map', orginalnaTablica)
    return currentValue / 2
    // rezultat [20, 18]
})
console.log('finał', exArrFilterAndMap)

const exp1 = [4, 8, 9, 88]

// zwróc tablice [4, 8 , 9, 44]

// zwróć tablicę [2, 4, 44]

const exp1FilterAndMap = exp1.filter((currentValue) => {
    if(currentValue % 2 === 0) {
        return currentValue
    }
    
    // wynik [4, 8,44]
}).map((currentValue) => {
    return currentValue / 2
})


const named = ['Jan', 'Marta']
// 
const imie = named.includes('Ela')