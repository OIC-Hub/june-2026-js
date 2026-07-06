const cars = []

cars[0] = "Volvo"
cars[1] = "BMW",
cars[2] = "Honda"

console.log(cars)

const newArray = new Array("Mango", "Apple", "Watermelon")

// console.log(newArray.length)
// console.log(newArray.toString())
// console.log(newArray.at(2))
// console.log(newArray.join("/"))
// const methods = newArray.pop()
// console.log(methods)

const result = newArray[0];

console.log(result)


// const methods = newArray.push("kiwi")

// const methods = newArray.shift()

// console.log(newArray)

// const methods = newArray.unshift("kiwi")

// console.log(newArray)

newArray[newArray.length] = 1
console.log(newArray)

const Obj = [
    {
        name: "Ade",
        age: 50
    }
]

console.log(`${Obj[0].name} - ${Obj[0].age}` )

// const name = "sola"
const checkType = Array.isArray(cars)

console.log(checkType)

