var x = 30

{
    let x = 15
    console.log(x)
    x = 10
    console.log(x)

    const y = 14 
    console.log(y)
    // y = 7                -- not allowed
    // console.log(y)
}

console.log(x)

console.log("Arrow Function")

// const m = function sum(x , y){
//     return x + y
// }

// ---------------------------------------
// const m = (x , y) =>{
//     return x + y
// }
// OR -- short_hand
const m = (x , y) => x + y



console.log(m(15 , 16))

//spread Operator

const month =["jan", "feb","March"]
const month2 = ["April", "May", "June"]
const year ={...month ,...month2 }    //expanding values of iterable

console.log(year)

const numbers = [25 , 20 , 90 , -1]

let maxValue = Math.max(...numbers)

console.log(maxValue)


//for of loop 

let sum = 0 
for(let num of numbers){
    sum += num
}
console.log(sum)

const name = "Rohit Indwar"
let string1 = ""
for(let str of name){
    console.log(str)
    string1+= str +" "
}
console.log(string1)

//Map
const fruits = new Map([["apples",10],["kiwi",20],["strawberry",30]])
console.log(fruits)
console.log(fruits.get("strawberry"))
fruits.set("bananas", 4)
console.log(fruits)

// set 

const letter = new Set()
letter.add('a')
letter.add('a')
letter.add('b')

console.log(letter)

// classes 

class myclass{
    constructor(name , roll_np){
        this.name =name
        this.roll_np = roll_np
    }
}
const st1 = new myclass('ROhit',30)
const st2 = new myclass('Indwar',31)

console.log(st1,st2)

// Promise

const myfunction =  ()=>{ return new Promise((resolve,reject) => {
    setTimeout(()=>{
        console.log('This is inside promise')
        resolve()

    },2000)
})
}

myfunction()
.then(()=>{
    console.log("Resolved")
})
.catch(()=>{
    console.error("Rejected")
})


// symbols

const person ={
    firstName:"john",
    LastName:"doe",
    age:39,
}

let id = Symbol("id")
person[id] = 10001

console.log(person)

// default params

const addTwoNumbers = (a,b = 12) => {
    return a+b 
}
console.log(addTwoNumbers(12))

// rest operator
let val = 0;
const fun = (...args) =>{
    for(let arg of args){
        val += arg
    }
    return val
}

console.log(fun(10,2,30,40,90))