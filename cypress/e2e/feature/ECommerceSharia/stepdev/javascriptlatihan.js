let a = 'Horas'
let b = 'SaRoh'

let anaGram = (str1, str2) => {
    let a = str1.toLowerCase().split('').sort().join('')
    let b = str2.toLowerCase().split('').sort().join('')
    console.log(a, b)
    return (a === b)
}
console.log(anaGram(a, b))

let test = {
    firstname: 'rofi',
    lastname: 'imron'
}
console.log(test.firstname + test.lastname)

let testarray = ['malang', 'bandung', 'jakarta']

console.log(testarray[0])