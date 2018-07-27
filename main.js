var ticket = [
    // "*", 12, "*", 25, 34, 10, 24, "*", "*",
    // 55, "*", 67, 87, 19, "*", "*", 21, 7,
    // 1, 8, "*", "*", 33, 17, 47, "*", 25
 ]
 
 // choose ticket
 function changeStyle1() {
     // change style
     var change = document.getElementById('grid1');
     change.style.border = "3px dashed rgb(255, 255, 81)";
 
     for (i = 0; i < 27; i++) {
        document.getElementById('item' + (i + 1)).innerText = Math.floor(Math.random() * 90);
     }
     
     
 };
 
 // Pulling out numbers
 function numbers(){
     var numb = document.getElementById('demo');
     numb.innerText= Math.floor(Math.random() * 90);
 
     // check for winning number
     for (i = 0; i < 27; i++) {
         if (document.getElementById('item' + (i + 1)).innerText === numb.innerText) {
             document.getElementById('item' + (i + 1)).style.backgroundColor = "rgb(0, 255, 128)";
         }
 
        
      }
 
 
     setTimeout(numbers,3000);
 
 }
 
 









