const school = "Ud3my"

console.log(school.charAt (4)) // give me the letter that exist in the 4 index
console.log(school.charAt(5)) //if i use a index that do not exist the code its not gonna give me a error just a blank text
console.log(school.charCodeAt(3)) //will replace the code that is in the string for the number that is on the Unicode table
console.log(school.indexOf('U')) //give the index of the character in the unicode table
console.log(school.substring(0, 4 ))
console.log(school.substring(1))
console.log('School '.concat(school).concat ('!'))
console.log(school.replace(3,'e'))
console.log(school.replace(/\d/, 'e'))
console.log(school.replace(/\d/, 'w'))
console.log(school.replace(/\w/g, 'e'))

console.log('Jhon, Mary,Joseph'.split(',')) // converts a string in a array






