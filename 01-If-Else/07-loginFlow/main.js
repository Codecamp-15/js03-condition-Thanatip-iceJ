let user = prompt('Enter your username..')
let password = prompt('Enter password')

if ((user === null || password === null) || (user === '' || password === '')) {
    alert('Username or password is required...')
} else if ((user === 'admin' && password === '1234') || (user === 'john' && password === 'qwerty')) {
    alert(`Hello ${user}`)
} else alert('invalid username or password')