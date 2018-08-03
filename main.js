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
    var change = document.getElementById('grid1');
    change.style.border = "3px dashed rgb(255, 255, 81)";

}

// Ticket Generator
function generateTicket() {

    var countNum1 = 0;
    
    // first row
    for (i = 0; i < 9; i++) {
        var counter = 0;
        var m = nextNumber();
        if (ticket.includes(m)) {
            m = 0
        }
        if (m != 0) {
            counter++
            countNum1++
            if (countNum1 > 5) {
                m = 0
            }
        }
        ticket[i] = m;

    }

    var countNum2 = 0;

    // second row
    for (j = 9; j < 18; j++) {
        var counter1 = 0;
        var a = nextNumber();
        if (ticket.includes(a)) {
            a = 0
        }
        if (a != 0) {
            counter1++
            countNum2++
            if (countNum2 > 5) {
                a = 0
            }
        }
         ticket[j] = a;
    }

    var countNum3 = 0;

    // third row
    for (k = 18; k < 27; k++) {
        var counter2 = 0;
        var b = nextNumber();
        if (ticket.includes(b)) {
            b = 0
        }
        if (b != 0) {
            counter2++
            countNum3++
            if (countNum3 > 5) {
                b = 0
            }
        }
        ticket[k] = b
    }

};




// Pulling out numbers
function startGame() {
    var numb = document.getElementById('demo');
    numb.innerText = Math.floor(Math.random() * 90);

    // check for winning number
    for (i = 0; i < 27; i++) {
        if (document.getElementById('item' + (i + 1)).innerText === numb.innerText) {
            document.getElementById('item' + (i + 1)).style.backgroundColor = "rgb(0, 255, 128)";
        }
    }
    setTimeout(startGame, 3000);
};

// animate
jQuery(document).ready(function ($) {
    $('#ball').animate({
        width: 500,
        height: 500
    }, 2000)
});











