document.write("hi");
let newtestvar = 17;

let count = 0;
function GameLoop(){
  count++;
  $("body").innerHTML(count);
  setInterval(GameLoop, 1000);


}
GameLoop();
