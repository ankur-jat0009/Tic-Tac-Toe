let boxes= document.querySelectorAll(".choice");
let resetBtn= document.querySelector(".reset");
let newgameBtn=document.querySelector(".newgame");
let msgcont=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");
let winningPattern = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6],
];

let turnO=true; 

const resetGame=()=>{
    turnO=true;
    enableBtn();
msgcont.classList.add("hide");
}
boxes.forEach((choice) => {
    choice.addEventListener("click" ,() => {
  if(turnO){
    choice.innerText="O";
    turnO=false;
  }
  else{
    choice.innerText="X";
    turnO=true;
  }
  choice.disabled=true;
  checkWinner();
});
});


const disableBtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBtn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showwinnner=(Winner)=>{
     msg.innerText=`Winner is ${Winner}`;
     msgcont.classList.remove("hide");
     disableBtn();
}
const checkWinner =()=>{
    for( let pattern of winningPattern){
        let posVal1=boxes[pattern[0]].innerText;
        let posVal2=boxes[pattern[1]].innerText;
        let posVal3=boxes[pattern[2]].innerText;

        if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
            if(posVal1===posVal2 && posVal2===posVal3){
                console.log("Winner",posVal1);
                showwinnner(posVal1);
            }
        }
    }
}

newgameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
