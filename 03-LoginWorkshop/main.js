let user = prompt('Enter your username...');
let password;

if(user === null || user.trim() === '' || user !== 'codecamp') {
    user = 'guest'
} else if (user === 'codecamp') {
    password = prompt('Enter your password...')
}

if(user === 'codecamp' && password !== '123456') {
    alert('Wrong password')
    user = 'guest'
} 

alert(`Welcome ${user}!!`)


