let a = +prompt('Enter number1')
let b = +prompt('Enter number2')
let c = +prompt('Enter number3')

if(a >= b && b >= c) alert(`${a}, ${b}, ${c}`)
else if(a >= c && c >= b) alert(`${a}, ${c}, ${b}`)
else if(b >= a && a >= c) alert(`${b}, ${a}, ${c}`)
else if(b >= c && c >= a) alert(`${b}, ${c}, ${a}`)
else if(c >= b && b >= a) alert(`${c}, ${b}, ${a}`)
else if(c >= a && a >= b) alert(`${c}, ${a}, ${b}`)


// a,b,c
// a,c,b
// b,a,c,
// b,c,a
// c,a,b
// c,b,a