// storing a function in a variable 

const printmath = function (a,b){
    console.log(a + b)
}
printmath(2, 3)

//arrow function in a variable

const plus = (a, b) =>{
    return a + b 
}
console.log(plus(6, 7))

const less =(a, b) => a - b
// => arrow function
console.log(less(4, 6))
