let s = prompt('Enter score..')

let result = 
(+s >= 80)? alert('A')
: (+s >= 70)? alert('B')
: (+s >= 60)? alert('C')
: (+s >= 50)? alert('D')
: alert('F')