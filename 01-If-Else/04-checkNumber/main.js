let num = prompt('Enter a number..')

if (num === null || num === '' || isNaN(num)) alert('Invalid number')
else if(+num > 0) alert('Positive number')
else if(+num === 0) alert('Zero')
else if (+num < 0) alert('Negative number')
