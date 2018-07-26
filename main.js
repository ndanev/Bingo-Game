var ticket = [
    "*", 12, "*", 25, 34, 10, 24, "*", "*",
    55, "*", 67, 87, 19, "*", "*", 21, 7,
    1, 8, "*", "*", 33, 17, 47, "*", 25
]


// choose list
function changeStyle1() {
    // change style
    var change = document.getElementById('grid1');
    change.style.border = "3px dashed rgb(255, 209, 71)";

    for (i = 0; i < ticket.length; i++) {
       document.getElementById('item' + (i + 1)).innerText = ticket[i];
    }
    
    
};

//function changeStyle2() {
  //  var change = document.getElementById('grid2');
    //change.style.border = "3px dashed rgb(255, 209, 71)";
    
//};

//function changeStyle3() {
  //  var change = document.getElementById('grid3');
    //change.style.border = "3px dashed rgb(255, 209, 71)";
    
//};




// Pulling out numbers
function numbers(){
    var numb = document.getElementById('demo');
    numb.innerText= Math.floor(Math.random() * 90);
    setTimeout(numbers,5000);
}










