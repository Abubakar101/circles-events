document.addEventListener('DOMContentLoaded', (e) => {
  console.log('DOM content loaded');


  /* Create an event listener for key press events */
  document.addEventListener('keyup', (e) => {
  
console.log(e.keyCode);

  /* Create an event listener for key press events */
  if (e.keyCode === 66){
    const blue = document.querySelector("#blue");
    blue.classList.toggle("blue");
    // console.log(e.keycode);
  } else if (e.keyCode === 71){
    const green = document.querySelector("#green");
    green.classList.toggle("green");
    // console.log(e.keycode);
  } else if (e.keyCode === 82){
    const red = document.querySelector("#red");
    red.classList.toggle("red");
    // console.log(e.keycode);
  } else if (e.keyCode === 89){
    const yellow = document.querySelector("#yellow");
    yellow.classList.toggle("yellow");
    // console.log(e.keycode);
  }
    
    const newDiv = document.querySelector(".newDiv");
    newDiv.classList = "newDiv";
    newDiv.innerHTML = e.keyCode;
    console.log(newDiv);
   


});


});
