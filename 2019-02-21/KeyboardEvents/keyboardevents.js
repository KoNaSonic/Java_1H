sq.focus();

sq.addEventListener("keypress", function(e) {
//    console.log(e.key);
     switch (e.key){
         case "r":
         case "R": sq.style.backgroundColor = "red";
         break;
         case "g":
         case "G": sq.style.backgroundColor = "green";
         break;
         case "b":
         case "B": sq.style.backgroundColor = "blue";
         break;
         case "y":
         case "Y": sq.style.backgroundColor = "yellow";
         break;
        
     }
})

