var ticket = [];

function nextNumber () {
    var n =  Math.floor(Math.random() * 90);
    return n;
} 

function showTicket() {
    for (i = 0; i < 27; i++) {

        // change 0 to *
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
    var counter = 0

    for (i = 0; i < 27; i++) {
        var m = nextNumber();
        if (ticket.includes(m)) {
            m = 0
        }
        if (m!= 0) {
            counter++
        }
        if (counter > 15) {
            m = 0
        }
        
        ticket[i] = m;
    }




};




// Pulling out numbers
function numbers() {
    var numb = document.getElementById('demo');
    numb.innerText = Math.floor(Math.random() * 90);

    // check for winning number
    for (i = 0; i < 27; i++) {
        if (document.getElementById('item' + (i + 1)).innerText === numb.innerText) {
            document.getElementById('item' + (i + 1)).style.backgroundColor = "rgb(0, 255, 128)";
        }


    }

    setTimeout(numbers, 3000);

};











