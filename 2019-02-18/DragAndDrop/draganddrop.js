function  makeDraggable(el) {

    el.addEventListener("mousedown", function (event1) {
//        console.log(event1);

        el.style.zIndex = 10;

        let left0 = el.offsetLeft;
        let top0 = el.offsetTop;
        let x0 = event1.clientX;
        let y0 = event1.clientY;

      /*  console.log(left0);
        console.log(top0);
        console.log(x0);
        console.log(y0);*/

 //     el.addEventListener("mousemove", mmove);
        document.addEventListener("mousemove", mmove);
        document.addEventListener("mouseup", mup);

      function mmove(event2) {

          let x = event2.clientX;
          let y = event2.clientY;

          el.style.left = (left0 + (x - x0)) + "px";
          el.style.top = (top0 + (y - y0)) + "px";
      }

        function mup() {
            el.style.zIndex = 1;
            document.removeEventListener("mousemove", mmove);
            document.removeEventListener("mouseup", mup);
         }

    })
}

//makeDraggable(elem);
makeDraggable(red);
makeDraggable(green);