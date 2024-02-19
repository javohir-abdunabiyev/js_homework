let decade = prompt('1-31')

if(decade >= 1 && decade <= 10) {
    alert('First decade')
} else if(decade >= 11 && decade <= 20) {
    alert('Second decade')
} else if(decade >= 21 && decade <= 31) {
    alert('Third decade')
} else {
    alert('write a number from 1 to 31')
}


let month = prompt('1-12')

if(month <= 2 && month < 3) {
    alert('it is winter')
} else if(month >= 3 && month <= 5) {
    alert('it is spring')
} else if(month >= 6 && month <= 8) {
    alert('it is summer')
} else if(month >= 9 && month <= 11) {
    alert('it is autumn')
} else if(month >= 12 && month <= 12) {
    alert('it is winter')
} else {
    alert('write a number from 1 to 12')
}