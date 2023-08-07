let login = prompt("Enter username");
let message;

message = 
(login === 'Employee')
? 'Hello'
: (login === 'Director') 
? 'Greetings'
: (login == '')
? 'No login'
: ''




// (login == 'Employee')? message = 'Hello'
// : (login == 'Director')? message = 'Greetings'
// : (login == '')? message = 'No login'
// : message = ''; 