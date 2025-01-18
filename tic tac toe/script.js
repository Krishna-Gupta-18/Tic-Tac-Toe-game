let boxes = document.querySelectorAll(".box")
let reset = document.querySelector("#reset")
let newgamebutton = document.querySelector("#newgame")
let winmsg =document.querySelector(".winmsg")
let msg = document.querySelector('#msg')

const winningpatterns = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const resetbtn = () => {
    playerX = true
    for(let box of boxes){
        box.disabled = false
        box.innerText = ""
        winmsg.classList.add("hide")
    }
}

let playerX = true

boxes.forEach((box) =>{
 box.addEventListener("click",() =>{
    console.log("box was clicked")
    if(playerX){
        box.innerText = "X";
        playerX = false
    }
     else{
        box.innerText ="O";
        playerX = true
    }
    box.disabled = true
    checkwin();
    }

)}
)

const showwin = (winner) => {
      msg.innerText = `congratulation, winner is player ${winner}`;
      winmsg.classList.remove("hide")
}

const checkwin= () =>{
     for(let patterns of winningpatterns){
      if(boxes[patterns[0]].innerText != "" && boxes[patterns[1]].innerText != "" && boxes[patterns[2]].innerText != ""){
       if(boxes[patterns[0]].innerText == boxes[patterns[1]].innerText &&  boxes[patterns[1]].innerText == boxes[patterns[2]].innerText ){
        console.log("winner " + boxes[patterns[0]].innerText)
        disable()
        showwin(boxes[patterns[0]].innerText);
       }
     }
}
}

const disable = () => {
    for(let box of boxes){
        box.disabled = true
    }
}

reset.addEventListener("click",() => {
    resetbtn()
})

newgamebutton.addEventListener("click",() => {
    resetbtn()
})