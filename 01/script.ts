// AS //
let someValue: unknown = 'This is a string'
let strLength = (someValue as string).length
console.log(strLength)

// Angle Brackets //
/* let someOtherValue: unknown = 'This is an other string'
let strLengthAlt = (<string>someOtherValue).length
console.log(strLengthAlt) */

// Form - AS //
const firstName = document.getElementById('firstName') as HTMLInputElement
const age = document.getElementById('age') as HTMLInputElement

// Form - Angle Brackets //
/* const firstNameAlt = <HTMLInputElement>document.getElementById('firstName')
const ageAlt = <HTMLInputElement>document.getElementById('age') */

/* ============================================================================================================= */

const form = document.getElementById('signupForm') as HTMLFormElement
const gender = document.getElementById('gender') as HTMLSelectElement

form.addEventListener('submit', (e:Event) => {
  e.preventDefault()
  console.log(firstName.value, age.valueAsNumber, gender.value)
})