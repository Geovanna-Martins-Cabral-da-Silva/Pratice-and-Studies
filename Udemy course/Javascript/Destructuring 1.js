const person = {
    name: 'Ana',
    age: 18,
    adress: {
        country : 'Brazil',
        zipCode: 7845
        
    }
}

const { name, age} = person
console.log(name, age)

const {name: n, age: a} = person
console.log(n, a )


const {surname, Martins = true} = person
console.log(surname, Martins)
 
const { adress:{ country, zipCode, number}} = person
console.log( country, zipCode, number)


 