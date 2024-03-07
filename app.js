let userScore=0;
let compScore=0;
const choice=document.querySelectorAll(".game");
const msg= document.querySelector('.msg');
const us=document.querySelector('#user-score');
const cs=document.querySelector('#comp_score');
let Us=0;
let Cs=0;
const compChoice=()=>{
   const option=['rock','paper','scissor'];
   const ran=Math.floor(Math.random()*3);
   return option[ran];
}
const draw=()=>{
    console.log("game will be draw");
    msg.innerText='game draw';
    msg.style.backgroundColor='yellow';
}
const showin =(userwin,userChoice,comChoice)=>{
     if(userwin){
      Us++;
      us.innerText=Us;
        console.log("you are win");
       msg.innerText=`you are win!  ${userChoice} beats ${comChoice}`;
       msg.style.backgroundColor='green';
     }
     else{
      Cs++;
      cs.innerText=Cs;
      console.log("computer are win you are lose");
        msg.innerText= `you are loss! ${comChoice} beats ${userChoice}`;
        msg.style.backgroundColor='red';
     }
}
 const playuser= (userChoice) => {
     console.log("userchoice is ",userChoice);
     const comChoice=compChoice();
     console.log('compchoice is ',comChoice);
     if(userChoice===comChoice){
        draw();
     }
     else{
     let userwin=true;
     if(userChoice==="rock"){
        userwin=comChoice==="paper"?false:true;
     }
     if(userChoice==="paper"){
        userwin=comChoice==="scissor"?false:true;
     }
     else{
        //user select scissors
        userwin=comChoice==="rock"?false:true;
     }
        showin(userwin,userChoice,comChoice)};
}
choice.forEach((game)=>{
    game.addEventListener("click",()=>{
        const userChoice=game.getAttribute("id");
       // console.log("game was clicked",userChoice);
        playuser(userChoice);
    })
})