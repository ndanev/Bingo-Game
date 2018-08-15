var ticket = [];


function nextNumber() {
    var n = Math.floor(Math.random() * 90);
    return n;
}

function showTicket() {
    for (i = 0; i < 54; i++) {
        if (ticket[i] === 0) {
            document.getElementById('item' + (i + 1)).innerHTML = "*";
        } else {
            document.getElementById('item' + (i + 1)).innerHTML = ticket[i];
        }
    }
    var changeBorder = document.getElementById('grid1');
    changeBorder.style.border = "3px dashed rgb(255, 255, 81)";
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

// Ticket Generator
function generateTicket(e) {
    row(0, 9);
    row(9, 18);
    row(18, 27);
    row(27, 36);
    row(36, 45);
    row(45, 54);
}

function winner() {
    var a = nextNumber();
    var counter = 0;
    for (i = 0; i < 9; i++) {
        var w = document.getElementById('item' + (i + 1));
        if (w === a) {
            counter++
            if (counter == 5) {
                alert('winner');
            }
        }
    }
}
winner();



// Pulling out numbers
function startGame() {
    var randomNumbers = document.getElementById('demo');
    randomNumbers.innerText = Math.floor(Math.random() * 90);

    // check for winning numbers
    for (i = 0; i < 54; i++) {
        if (document.getElementById('item' + (i + 1)).innerText === randomNumbers.innerText) {
            document.getElementById('item' + (i + 1)).style.backgroundColor = "rgb(0, 183, 255)";
            document.getElementById('item' + (i + 1)).style.color = "rgb(255, 255, 81)";
            //rgb(0, 255, 128)
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












