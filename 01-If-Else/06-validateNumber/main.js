let num1 = prompt('Enter number1')
let num2 = prompt('Enter number2')

if ((num1 === null || num2 === null) || (num1 === '' || num2 === '') || (isNaN(num1) || isNaN(num2))) alert('Invalid number')
else alert(+num1 + +num2);