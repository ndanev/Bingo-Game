var ticket = [];

// choose ticket
function changeStyle1() {
    // change style
    var change = document.getElementById('grid1');
    change.style.border = "3px dashed rgb(255, 255, 81)";


    for (i = 0; i < 27; i++) {
        
        document.getElementById('item' + (i + 1)).innerHTML = Math.floor(Math.random() * 90);
        if (document.getElementById('item' + (i + 1)).innerHTML === "0") {

            document.getElementById('item' + (i + 1)).innerHTML = "*";
        
        }


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











