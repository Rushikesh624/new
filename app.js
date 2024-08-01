let boxes=document.querySelectorAll(".box");
let newbtn=document.querySelector("#newbtn")
let msgcontainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg");
let resetgame=document.querySelector("#resetgame");
let turnO=true; //Player X,Player O;
const winpattern=[
    [0,1,2],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    [0,4,8],
];
boxes.forEach((box) =>{
     
    box.addEventListener("click",()=>{
        console.log("hello")
        if(turnO){
            box.innerText="X";
            turnO=false;
        }else{
            box.innerText="O";
            turnO=true;
        }box.disabled=true;
        checkwinner();

    })
})
const disabledboxes=()=>{
    for(let box of boxes){
        box.disabled=true
    }
}
const enabledboxes=()=>{
    for(let box of boxes){
        box.disabled=false
        box.innerText="";
    }
}
const showwinner=(winner)=>{
    msg.innerText=`Congratulation, Winner  is ${winner}`;
    msgcontainer.classList.remove("hide");

}
let checkwinner=()=>{
    for(let pattern of winpattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val !="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val &&pos2val===pos3val){
                console.log("winner");
                disabledboxes();
                showwinner(pos1val);
            }

        }
       
    }
}

    
 
 
resetgame.addEventListener("click",()=>{
    turnO=true;
     enabledboxes();
     msgcontainer.classList.add("hide");

})

newbtn.addEventListener("click",()=>{
    turnO=true;
    enabledboxes();
    msgcontainer.classList.add("hide");
})