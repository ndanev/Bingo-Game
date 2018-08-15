var ticket = [];

function nextNumber() {
    var n = Math.floor(Math.random() * 90);
    return n;
}

function showTicket() {
    for (i = 0; i < 27; i++) {
        if (ticket[i] === 0) {
            document.getElementById('item' + (i + 1)).innerHTML = "*";
        } else {
            document.getElementById('item' + (i + 1)).innerHTML = ticket[i];
        }
    }
    var changeBorder = document.getElementById('grid1');
    changeBorder.style.border = "3px dashed rgb(255, 255, 81)";
}

// Ticket Generator
function generateTicket() {

    for (i = 0; i < 27; i++) {
        var counter = 0;
        var m = nextNumber();
        if (ticket.includes(m)) {
            m = 0
        }
        if (m != 0) {
            counter++
        }
        ticket[i] = m;
    }
    row(0, 9);
    row(9, 18);
    row(18, 27);
}

// generate ticket rows with parameters x and y
function row(x, y) {
    var countNumbers = 0;

    for (i = x; i < y; i++) {
        var counter = 0;
        var a = nextNumber();
        if (ticket.includes(a)) {
            a = 0;
        }
        if (a != 0) {
            counter++
            countNumbers++
            if (countNumbers > 5) {
                a = 0
            }
        }
        ticket[i] = a
    }
}



// Pulling out numbers
function startGame() {
    var randomNumbers = document.getElementById('demo');
    randomNumbers.innerText = Math.floor(Math.random() * 90);

    // check for winning numbers
    for (i = 0; i < 27; i++) {
        if (document.getElementById('item' + (i + 1)).innerText === randomNumbers.innerText) {
            document.getElementById('item' + (i + 1)).style.backgroundColor = "rgb(0, 255, 128)";
            document.getElementById('item' + (i + 1)).style.color = "rgb(255, 255, 81)";
        }

    }
    setTimeout(startGame, 3000);
}


// winner animation
/* jQuery(document).ready(function ($) {
    $('#ball').animate({
        width: 500,
        height: 500,
    }, 2000)
}); */












