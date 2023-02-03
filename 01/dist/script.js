// AS //
var someValue = 'This is a string';
var strLength = someValue.length;
console.log(strLength);
// Angle Brackets //
/* let someOtherValue: unknown = 'This is an other string'
let strLengthAlt = (<string>someOtherValue).length
console.log(strLengthAlt) */
// Form - AS //
var firstName = document.getElementById('firstName');
var age = document.getElementById('age');
// Form - Angle Brackets //
/* const firstNameAlt = <HTMLInputElement>document.getElementById('firstName')
const ageAlt = <HTMLInputElement>document.getElementById('age') */
/* ============================================================================================================= */
var form = document.getElementById('signupForm');
var gender = document.getElementById('gender');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(firstName.value, age.valueAsNumber, gender.value);
});
