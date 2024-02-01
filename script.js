'use strict'

// 1


let array2 = [14, 150, 'css', null, 'javascript', 25];

let arrayNew = array2.map (element => {
    if(typeof element === 'number') {
        return element * element
    } else if (typeof element === 'string') {
        return element.toUpperCase()
    } else {
        return element;
    }

})

console.log(arrayNew)


// 2

let info = 'good day'
let infoNew = info.slice(5)

console.log(infoNew)


// 3

function stringLength (string) {
    return string.length
}

let string = 'Hello World'
console.log(stringLength(string))

// 4




// 5

let fruits = ['apple', 'mango', 'avocado', 'kiwi']

fruits.splice(-2,1, 'strawberry')

console.log(fruits)


// 6

let array = [5, 25, 89, 120, 36]

array.push('javascript', 'python')
array.unshift('html', 'css')
console.log(`there are ${array.length} elements`)
array.shift()
array.pop()
console.log(array)


// 7


let arrayFruits = ['ფორთოხალი', 'ბანანი', 'კივი']
console.log(arrayFruits.length)

arrayFruits.push('ვაშლი', 'ანანასი')
// console.log(arrayFruits);

arrayFruits.unshift('საზამთრო')
console.log(arrayFruits.length)
arrayFruits.splice(2,0, 'მანგო')
arrayFruits.shift()
arrayFruits.pop()
console.log(arrayFruits.length)

// 8

let array3 = [1, 2, 3, 4, 5]

array3.splice(3,0, 'a', 'b', 'c')
console.log(array3)


// 9

let  array5 = [12, 25, 3, 6, 8, 14, 7, 23]

let array5New = array5.map(num => num/3)

console.log(array5New)


// 10

let array7 =  [15, 100, 25, 10, 36]

array7.splice(3,1)
console.log(array7)


// 11

let array8 = [1, 2, 3 , 4 , 5]

array8.splice(2,1, 'three')
console.log(array8);


// 12

let array1 =['hello1', 14,24, 'hello2'] 

let array1New = array1.filter(element => typeof element === 'number')
console.log(array1New);

// 13

let array4 = [1, 2, 3, 4, 5];

let sum = 0
array4.forEach(x => sum += x)
console.log(sum);


// 14

let languages = ['html', 'css', 'javascript', 'python', 'php'];

let languagesResult = languages.filter (item => item.length >3)
console.log(languagesResult);


// 15

let words = ['Madrid', 'rome', 'Milan', 'berlin'];

let result = words.filter (item => item.includes('m') || item.includes('M'))

console.log(result);