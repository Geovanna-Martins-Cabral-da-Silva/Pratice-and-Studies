let isactive = false 
console.log(isactive)

isactive = true 
console.log(isactive)

isactive = 1 
console.log(!! isactive) // !!true 
console.log(! isactive) // ! false 

console.log(' the true ones')
console.log(!!3)
console.log(!! - 1)
console.log(' ')
console.log(!! 'text')
console.log(!! [])
console.log(!! {})
console.log(!! Infinity)
console.log(!! (isactive = true))

console.log('The false ones')
console.log(!!0)
console.log(!! '')
console.log(!! null)
console.log(!!NaN)
console.log(!!undefined)

let name = ''
console.log(name || 'Unknow')
