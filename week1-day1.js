// //boolean 
true 
false 

//null or undefined
null 
undefined

//numbers
3888

//string
'apple'
"grape"

const fruit = 'apple'
//string concatnation
console.log(`${fruit} is a fruit`)

//to debug or print data in your terminal
console.log()

// type coercion
// lossely equals
// data value 
console.log(2 == '2')
console.log(2 != '2')

//strictly equals
// 1. data type
// 2. data value
console.log(2 === '2')
console.log(2 !== 3)

//3 different ways of instantiating a variable: 
// 1. var
// 2. const 
// 3. let 

var fruit1 = 'apple' // DO NOT EVER USE! Globably scoped!
let fruit2 = 'apple' // block scoped and can be re-assigned
const fruit3 = 'apple' // block scoped and can NOT be re-assigned

//first class function
const printHello = (fruit = 'brocoli') => {
    console.log(fruit); 
}

printHello(fruit1)

higher order functions
const higherOrderFunction = (printHello) => {
    printHello() <----- callback 
}

const printHello = () => {
    console.log('hello!'); 
}

higherOrderFunction(printHello)

// callback 
const callbackFn = (anotherFn) => {
    printHello() // <--- callback function
}

// scoping

const text = 'this is a text!'

// console.log(text) //YES
console.log(text1) //NO

const doSomething = () => {
    const text1 = 'this is the second text'

    // console.log(text2) //NO

    if (true) {
        const text2 = 'this is the third text'

        console.log(text) //YES
        console.log(text1) //YES
        console.log(text2) //YES
    }
}

// For Loops
const arr1 = [1, 2, 3, 4, 5]; 
const arr2 = []; 
// indexes starts at 0
// property called length 

// retrieve a array value: 
console.log(arr1.length); 

for (let i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i] * 2); 
}

for (let number of arr1) {
    console.log(number)
}

// iterating through a object
const profile = {
    name: 'tony', 
    age: 88, 
    address: 'some address'
}; 

// adding a object key value pair
profile.gender = 'male'; 
profile['gender'] = 'male'; 
// console.log(profile.age)
console.log(profile['age'])

for (let key in profile) {
    console.log(key); 
}

//array methods and property
const numbers = [1, 2, 3, 3, 8]; 
const numbers2 = [10, 12, 15]; 

//array property
numbers.length --> 5

//array methods
concat() - join multiple arrays
console.log(numbers2.concat(numbers)) // [1, 2, 3, 4, 5, 10, 12, 15]

// use spread to join arrays
const arr2 = [...numbers, ...numbers2]; 
console.log(arr2)

// filter() - Non-Mutative and takes a callback, returns a new copy 
const filterOut3 = numbers.filter(num => num > 3)
console.log(numbers); 
console.log(filterOut3); 

/// find() - Non-Mutative and takes a callback, return the first element it finds
const findNumber4 = numbers.find(num => num === 4);
console.log(findNumber4)

// // slice(startIndex, endingIndex(optional)) - Non-Mutative and takes in two arguments 
console.log(numbers.slice(2, 4))

// splice(startIndex, elementsToRemoveFromStartingIndex (optional), valuesToInsertAfterStartingIndex) - Mutative
const test = numbers.splice(2, 1, 22)

// flat(howManyLayersToRemove (optional)) -- NON MUTATIVE
const arr5 = [[1, 2, 3], [[13, 34, 77]]]
console.log(arr5.flat(3))

// includes - returns a boolean if a element exists
console.log(numbers.includes(777))

// indexOf - returns the index value of the passed element
console.log(numbers.indexOf(8999))

// join - NON-MUTATIVE method, joins a array into a STRING
const elements = ['fire', 'water', 'air']

console.log(elements.join(', '))

// map - NON-MUTATIVE, returns a new copy of a array 
const arr9 = [1, 2, 3, 4, 5]; 

const double = arr9.map(num => {
    return num * 2
})

// console.log(double)

// pop() - MUTATIVE, it removes the last element in the array
const arr10 = [1, 2, 3, 4, 5]

console.log(arr10.pop())
console.log(arr10)

// push() - MUTATIVE, it adds a new element to the end of the array
arr10.push(100)
console.log(arr10)

// unshift() - MUTATIVE, it adds a new element to the beginning of the array
arr10.unshift(999)
console.log(arr10)

// shift() - MUTATIVE, it removes the first element in the array 
arr10.shift()
console.log(arr10)

// reduce() - NON-MUTATIVE method, it has 2 arguments
// previous value
// current value 

const arr12 = [1, 2, 3, 4, 5]; 

const total = arr12.reduce((previousValue, currentValue) => previousValue + currentValue, 0)

console.log(total)

Objects
const profile = {
    name: 'tony', 
    age: 88, 
    address: 'some address'
}
//Object Methods
// keys()
console.log(Object.keys(profile))
// values()
console.log(Object.values(profile))

//Map Data Structure 
// Can only unique key value pairs
// sister to a object

// create a new map 
const profile = new Map()

// inserting new key value pairs
profile.set('name', 'tony'); 
profile.set('age', 88); 
profile.set('address', 'some address'); 

// check if a value exists 
console.log(profile.has('name'))

// retrieve a value of a key
console.log(profile.get('name'))

// looping through a map
profile.forEach((value, key) => console.log(`This is the value ${value} and this is the key ${key}`))

// Set Data Structure 
// Can only unique value
// sister to a array

// create a new set
const collection = new Set([10, 12, 16])

// add a new value
collection.add(10)
collection.add(12)
collection.add(16)

// check if a value exists
console.log(collection.has(12))

// retrieve a value of a element
const retrieve3 = collection.values()

console.log(retrieve3.get(10))

// for loop 
const newCollection = []
collection.forEach((value) => newCollection.push(value))
console.log(newCollection[0])

// Handling Promises
const fetchAPI = () => {
    //retrieve data
    User.get() /// async api call
    .then(data => {
        console.log(data)
    })
    .catch(error => console.log(error))
}

const fetchAPI = async () => {
    try {
        const data = await User.get()
    } catch (error) {
        console.log(error)
    }
}