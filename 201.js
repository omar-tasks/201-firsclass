var firstName = prompt('whats your first name?'); 
var secondName = prompt('whats you\'r second name ?');


function cum(first, second) {
    alert('welcome ' + first + ' ' + second);
}

function fullname(one, two) {
    var namer = document.getElementById('namer');
    namer.textContent = one + two;
}

cum(firstName, secondName)
fullname(firstName, secondName);
