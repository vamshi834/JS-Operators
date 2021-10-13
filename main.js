//arthamatic operation 

var numb1 = 50 
var numb2 = 50
var numb3 = 50

//addition

console.log(numb1 + numb2)

//subtraction

console.log(numb1 - numb2)

//multiplication

console.log(numb1 * numb2)

//division

console.log(numb1 / numb2)

//modulus

console.log(numb1 / numb2) //it shows remainder

//increment

console.log(numb1)
console.log(numb1++)//first give it takes default value
console.log(numb1++)//after default it tries to increase 1 num
console.log(numb1++)
console.log(++numb1)
console.log(++numb1)
//decrement
console.log(numb1--)//first give it takes default value
console.log(numb1--)
console.log(numb1--)
console.log(--numb1)
console.log(--numb1)

//assignment operation
//"+="
numb1 +=  10
console.log(numb1)

//"-="
numb1 -=  20
console.log(numb1)

//*=
numb1 *=  20
console.log(numb1)

///=
numb1 /=  20
console.log(numb1)

//%=
numb1 %=  20
console.log(numb1)

//comparision  operator
if (5 == 5) {console.log(true)} else{console.log(false)}
if (5 === '5') {console.log(true)} //3rd "=" indicates datatype (it checks whether the given data is stringornumber)
else{console.log(false)}
if (5 != '5') {console.log(true)} else{console.log(false)}
if (5 !== '5') {console.log(true)} else{console.log(false)}
if (10 <'5') {console.log(true)} else{console.log(false)}
if (10 > 5 ) {console.log(true)} else{console.log(false)}

//logical operator are (&&),(||),(!)
//(&&) if any given all  condition are satisfies it will show true
//(||) if any given one condition is satisfies it will show true
if (15 < 59 && 95 < 12 && 22 < 23 ) {console.log(true)} else{console.log(false)}
if (15 < 59 && 95 < 12 && 22 < 23 ) {console.log(true)} else{console.log(false)}
if (15 < 59 || 95 < 12 || 2 < 3 ) {console.log(true)} else{console.log(false)}
console.log(!(10>22))//true and true is true /f and f is true/f and t is false /t and f is false

//ternary operator expressions? a:b
5 > 15 ? console.log(true) : console.log(false)
5 < 15 ? console.log(true) : console.log(false)

//coercion
// it has //implicit
var teststring = "vamshi"
var testnum = 59
var sum = teststring + testnum
console.log(sum)
console.log(typeof(sum))

//explict
var num9 = '59'
console.log(typeof(string(num9)))