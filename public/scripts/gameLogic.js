//Getting all required elements
var td = document.querySelectorAll("td");
var playAgain = document.querySelector("#playAgainButton");
var body = document.querySelector("body");
var header = document.querySelector("#header");
var gameResult = document.querySelector("#gameResult");
var playerX = document.querySelector("#playerX");
var playerO = document.querySelector("#playerO");
var easy = document.querySelector("#easy");
var impossible = document.querySelector("#impossible");
var easy1 = document.querySelector("#easy1");
var impossible1 = document.querySelector("#impossible1");
var x1 = document.querySelector("#x1");
var o1 = document.querySelector("#o1");

//RESET LOGIC and WINNING DISPLAY
function reset(){
  for(var j=0; j<td.length; j++){
       td[j].textContent = "";
       td[j].classList.remove("cutting");
       td[j].classList.remove("displayStyleO");
       td[j].classList.remove("displayStyleX");
       td[j].classList.remove("displayStyleOtran");
       td[j].classList.remove("displayStyleXtran");
    };
   counter = 0;
   counter1 = 0;
   gameResult.innerText = "";
   stopGame = false;
   stopGame1 = false;
   stopEasy = false;
   stopImpossible = false;
   counterX = 0;
   counterO = 0;
   stopO = false;
   stopX = false;
};

function randTd(){
  return Math.floor(Math.random()*9);
}
function oWins(){
   gameResult.innerText = "O wins";
}
function xWins(){
   gameResult.innerText = "X wins";
}
function draw(){
 gameResult.innerText = "X 0  DRAW"
}


function impossibleCounterX4(x1, x2, x3, o1, o2, o3, s1, s2, s3, i1, i2, i3){
   if(td[x1].innerText==="X" && td[x2].innerText==="X" && td[x3].innerText==="X" && (td[o1].innerText==="O" && td[o2].innerText==="O" && td[o3].innerText==="O") && (td[s1].innerText==="X" && td[s2].innerText==="" && td[s3].innerText===""))	
              {
               td[i1].textContent="O";
               td[i1].classList.add("displayStyleOtran");
              }
  if(td[x1].innerText==="X" && td[x2].innerText==="X" && td[x3].innerText==="X" && (td[o1].innerText==="O" && td[o2].innerText==="O" && td[o3].innerText==="O") && (td[s1].innerText==="" && td[s2].innerText==="X" && td[s3].innerText===""))
              {
               td[i2].textContent="O";
               td[i2].classList.add("displayStyleOtran");
              }
  if(td[x1].innerText==="X" && td[x2].innerText==="X" && td[x3].innerText==="X" && (td[o1].innerText==="O" && td[o2].innerText==="O" && td[o3].innerText==="O") && (td[s1].innerText==="" && td[s2].innerText==="" && td[s3].innerText==="X"))
              {
               td[i3].textContent="O";
               td[i3].classList.add("displayStyleOtran");
              }
}

function impossibleCounterO1(a, b){
   if(td[a].innerText==="O")
   {
       td[b].textContent="X";
      td[b].classList.add("displayStyleXtran");
   }
}

function impossibleCounterO2(o1, o2, x, b1, b2, b3, b4, b5){
   if(td[o1].innerText==="O" && td[o2].innerText==="O" && td[b1].innerText==="" && td[b2].innerText==="" && td[b3].innerText==="" && td[b4].innerText==="" && td[b5].innerText==="")
   {
       td[x].textContent="X";
      td[x].classList.add("displayStyleXtran");
   }
}

function impossibleCounterO3(a, b, c){
   if(td[a].innerText==="X" && td[b].innerText==="X" && td[c].innerText==="")
   {
       td[c].textContent = "X";
       td[c].classList.add("displayStyleXtran");
   }
}

function impossibleCounterO3extra(a, b, c){
   if(td[a].innerText==="O" && td[b].innerText==="O" && td[c].innerText==="")
   {
       td[c].textContent = "X";
       td[c].classList.add("displayStyleXtran");
   }
}

function impossibleCounterO3some(o1, o2, o3, x, b1, b2, b3)
{
   if(td[o1].innerText==="O" && td[o2].innerText==="O" && td[o3].innerText==="O" && td[b1].innerText==="" && td[b2].innerText==="" && td[b3].innerText==="")
   {
     td[x].textContent = "X";
     td[x].classList.add("displayStyleXtran");	
   }
}

function impossibleCounterO4(v)
{
   if(td[v].innerText==="")
   {
    td[v].textContent = "X";
     td[v].classList.add("displayStyleXtran");
   }
}

  //LOGIC
  var counter = 0;
  var counter1 = 0;
  var stopGame = false;
  var stopGame1 = false;
  var stopEasy = false;
  var stopImpossible = false;
  var counterX = 0;
  var counterO = 0;
  var stopO = false;
  var stopX = false;

/* E A S Y   L E V E L */
easy.addEventListener("click",function(){
    stopImpossible = true;
    easy1.style.color = "#017aff";
   easy.style.background = "white";
   impossible1.style.color = "white";
   impossible.style.background = "#017aff";

 //EASY LEVEL PLAYER X
 playerX.addEventListener("click",function(){
   stopGame1 = true;
   x1.style.color = "#017aff";
   playerX.style.background = "white";
   o1.style.color = "white";
   playerO.style.background = "#017aff";
   for(var i=0; i<td.length; i++){
     td[i].addEventListener("click",function(){

       if(!stopGame === true){
        setInterval(function(){
         //HORIZONTAL Os
         if(td[0].innerText==="O" && td[1].innerText==="O" && td[2].innerText==="O"){
              oWins();
              td[0].classList.add("cutting");
              td[1].classList.add("cutting");
              td[2].classList.add("cutting");
              stopGame = true;
         }
         if(td[3].innerText==="O" && td[4].innerText==="O" && td[5].innerText==="O"){
              oWins();
              td[3].classList.add("cutting");
              td[4].classList.add("cutting");
              td[5].classList.add("cutting");
              stopGame = true;
         }
         if(td[6].innerText==="O" && td[7].innerText==="O" && td[8].innerText==="O"){
             oWins();
              td[6].classList.add("cutting");
              td[7].classList.add("cutting");
              td[8].classList.add("cutting");
              stopGame = true;
         }
         //VERTICAL Os
         if(td[0].innerText==="O" && td[3].innerText==="O" && td[6].innerText==="O"){
             oWins();
              td[0].classList.add("cutting");
              td[3].classList.add("cutting");
              td[6].classList.add("cutting");
              stopGame = true;
         }
         if(td[1].innerText==="O" && td[4].innerText==="O" && td[7].innerText==="O"){
             oWins();
              td[1].classList.add("cutting");
              td[4].classList.add("cutting");
              td[7].classList.add("cutting");
              stopGame = true;
         }
         if(td[2].innerText==="O" && td[5].innerText==="O" && td[8].innerText==="O"){
             oWins();
              td[2].classList.add("cutting");
              td[5].classList.add("cutting");
              td[8].classList.add("cutting");
              stopGame = true;
         }
         //CROSS Os
         if(td[0].innerText==="O" && td[4].innerText==="O" && td[8].innerText==="O"){
              oWins();
              td[0].classList.add("cutting");
              td[4].classList.add("cutting");
              td[8].classList.add("cutting");
              stopGame = true;
         }
         if(td[2].innerText==="O" && td[4].innerText==="O" && td[6].innerText==="O"){
              oWins();
              td[2].classList.add("cutting");
              td[4].classList.add("cutting");
              td[6].classList.add("cutting");
              stopGame = true;
          }
        },100);

           if(!stopGame===true){
            counter++;
            this.textContent = "X";
            this.classList.add("displayStyleX");


              //HORIZONTAL Xs
         if(td[0].innerText==="X" && td[1].innerText==="X" && td[2].innerText==="X"){
             xWins();
             stopGame = true;
             td[0].classList.add("cutting");
             td[1].classList.add("cutting");
             td[2].classList.add("cutting");
         }
         else if(td[3].innerText==="X" && td[4].innerText==="X" && td[5].innerText==="X"){
              xWins();
              stopGame = true;
              td[3].classList.add("cutting");
              td[4].classList.add("cutting");
              td[5].classList.add("cutting");
         }
         else if(td[6].innerText==="X" && td[7].innerText==="X" && td[8].innerText==="X"){
              xWins();
              stopGame = true;
              td[6].classList.add("cutting");
              td[7].classList.add("cutting");
              td[8].classList.add("cutting");
         }
         //VERTICAL Xs
         else if(td[0].innerText==="X" && td[3].innerText==="X" && td[6].innerText==="X"){
              xWins();
              stopGame = true;
              td[0].classList.add("cutting");
              td[3].classList.add("cutting");
              td[6].classList.add("cutting");
         }
         else if(td[1].innerText==="X" && td[4].innerText==="X" && td[7].innerText==="X"){
              xWins();
              stopGame = true;
              td[1].classList.add("cutting");
              td[4].classList.add("cutting");
              td[7].classList.add("cutting");
         }
         else if(td[2].innerText==="X" && td[5].innerText==="X" && td[8].innerText==="X"){
              xWins();
              stopGame = true;
              td[2].classList.add("cutting");
              td[5].classList.add("cutting");
              td[8].classList.add("cutting");
         }
         //CROSS Xs
         else if(td[0].innerText==="X" && td[4].innerText==="X" && td[8].innerText==="X"){
              xWins();
              stopGame = true;
              td[0].classList.add("cutting");
              td[4].classList.add("cutting");
              td[8].classList.add("cutting");
         }
         else if(td[2].innerText==="X" && td[4].innerText==="X" && td[6].innerText==="X"){
              xWins();
              stopGame = true;
              td[2].classList.add("cutting");
              td[4].classList.add("cutting");
              td[6].classList.add("cutting");
         }
         else if(counter===5){
            draw();
         }
         else{
           var someVar = 99;
         }
           
       }  

         //FILLING Os RANDOMLY
            if(!stopGame===true){
               var r1 = randTd();
               if(td[r1].innerText === "X" || td[r1].innerText === "O")
               {
                 var r2 = randTd();
               }
                else
               { 
                 td[r1].textContent = "O";
                 td[r1].classList.add("displayStyleOtran");
               };

               if(td[r2].innerText=== "X" || td[r2].innerText=== "O")
               {
                 var r3 = randTd();
               }
                else
               { 
                 td[r2].textContent = "O";
                 td[r2].classList.add("displayStyleOtran");
               };

               if(td[r3].innerText === "X" || td[r3].innerText === "O")
               {
                 var r4 = randTd();
               }
                else
               { 
                 td[r3].textContent = "O";
                 td[r3].classList.add("displayStyleOtran");
               };
                if(td[r4].innerText === "X" || td[r4].innerText === "O")
               {
                 var r5 = randTd();
               }
                else
               { 
                 td[r4].textContent = "O";
                 td[r4].classList.add("displayStyleOtran");
               };
                if(td[r5].innerText === "X" || td[r5].innerText === "O")
               {
                 var r6 = randTd();
               }
                else
               { 
                 td[r5].textContent = "O";
                 td[r5].classList.add("displayStyleOtran");
               };
               if(td[r6].innerText === "X" || td[r6].innerText === "O")
               {
                 var r7 = randTd();
               }
                else
               { 
                 td[r6].textContent = "O";
                 td[r6].classList.add("displayStyleOtran");
               };
               if(td[r7].innerText === "X" || td[r7].innerText === "O")
               {
                 var r8 = randTd();
               }
                else
               { 
                 td[r7].textContent = "O";
                 td[r7].classList.add("displayStyleOtran");
               };
                if(td[r8].innerText === "X" || td[r8].innerText === "O")
               {
                 var r9 = randTd();
               }
                else
               { 
                 td[r8].textContent = "O";
                 td[r8].classList.add("displayStyleOtran");
               };
               if(td[r9].innerText === "X" || td[r9].innerText === "O")
               {
                 var r10 = randTd();
               }
                else
               { 
                 td[r9].textContent = "O";
                 td[r9].classList.add("displayStyleOtran");
               };
               if(td[r10].innerText === "X" || td[r10].innerText === "O")
               {
                 var r11 = randTd();
               }
                else
               { 
                 td[r10].textContent = "O";
                 td[r10].classList.add("displayStyleOtran");
               };
               if(td[r11].innerText === "X" || td[r11].innerText === "O")
               {
                 var r12 = randTd();
               }
                else
               { 
                 td[r11].textContent = "O";
                 td[r11].classList.add("displayStyleOtran");
               };
               if(td[r12].innerText === "X" || td[r12].innerText === "O")
               {
                 var r13 = randTd();
               }
                else
               { 
                 td[r12].textContent = "O";
                 td[r12].classList.add("displayStyleOtran");
               };
               if(td[r13].innerText === "X" || td[r13].innerText === "O")
               {
                 var r14 = randTd();
               }
                else
               { 
                 td[r13].textContent = "O";
                 td[r13].classList.add("displayStyleOtran");
               };
               if(td[r14].innerText === "X" || td[r14].innerText === "O")
               {
                 var r15 = randTd();
               }
                else
               { 
                 td[r14].textContent = "O";
                 td[r14].classList.add("displayStyleOtran");
               };

            };
        };
       });
   }; 
  }); 


  //EASY LEVEL PLAYER O
   playerO.addEventListener("click",function(){
    var v1 = randTd();
    td[v1].textContent = "X";
    td[v1].classList.add("displayStyleXtran");
   stopGame = true;
   // stopGame1 = false;
   o1.style.color = "#017aff";
   playerO.style.background = "white";
   x1.style.color = "white";
   playerX.style.background = "#017aff";
   for(var i=0; i<td.length; i++){
     td[i].addEventListener("click",function(){
        counter1++;
       if(!stopGame1 === true){
        setInterval(function(){
                                 //HORIZONTAL Xs
         if(td[0].innerText==="X" && td[1].innerText==="X" && td[2].innerText==="X"){
              xWins();
              td[0].classList.add("cutting");
              td[1].classList.add("cutting");
              td[2].classList.add("cutting");
              stopGame1 = true;
         }
         if(td[3].innerText==="X" && td[4].innerText==="X" && td[5].innerText==="X"){
              xWins();
              td[3].classList.add("cutting");
              td[4].classList.add("cutting");
              td[5].classList.add("cutting");
              stopGame1 = true;
         }
         if(td[6].innerText==="X" && td[7].innerText==="X" && td[8].innerText==="X"){
             xWins();
              td[6].classList.add("cutting");
              td[7].classList.add("cutting");
              td[8].classList.add("cutting");
              stopGame1 = true;
         }
         //VERTICAL Xs
         if(td[0].innerText==="X" && td[3].innerText==="X" && td[6].innerText==="X"){
             xWins();
              td[0].classList.add("cutting");
              td[3].classList.add("cutting");
              td[6].classList.add("cutting");
              stopGame1 = true;
         }
         if(td[1].innerText==="X" && td[4].innerText==="X" && td[7].innerText==="X"){
             xWins();
              td[1].classList.add("cutting");
              td[4].classList.add("cutting");
              td[7].classList.add("cutting");
              stopGame1 = true;
         }
         if(td[2].innerText==="X" && td[5].innerText==="X" && td[8].innerText==="X"){
             xWins();
              td[2].classList.add("cutting");
              td[5].classList.add("cutting");
              td[8].classList.add("cutting");
              stopGame1 = true;
         }
         //CROSS Xs
         if(td[0].innerText==="X" && td[4].innerText==="X" && td[8].innerText==="X"){
              xWins();
              td[0].classList.add("cutting");
              td[4].classList.add("cutting");
              td[8].classList.add("cutting");
              stopGame1 = true;
         }
         if(td[2].innerText==="X" && td[4].innerText==="X" && td[6].innerText==="X"){
              xWins();
              td[2].classList.add("cutting");
              td[4].classList.add("cutting");
              td[6].classList.add("cutting");
              stopGame1 = true;
          }
        },100);

           if(!stopGame1===true){

            this.textContent = "O";
            this.classList.add("displayStyleO");

              //HORIZONTAL Os
         if(td[0].innerText==="O" && td[1].innerText==="O" && td[2].innerText==="O"){
             oWins();
             stopGame1 = true;
             td[0].classList.add("cutting");
             td[1].classList.add("cutting");
             td[2].classList.add("cutting");
         }
         else if(td[3].innerText==="O" && td[4].innerText==="O" && td[5].innerText==="O"){
              oWins();
              stopGame1 = true;
              td[3].classList.add("cutting");
              td[4].classList.add("cutting");
              td[5].classList.add("cutting");
         }
         else if(td[6].innerText==="O" && td[7].innerText==="O" && td[8].innerText==="O"){
              oWins();
              stopGame1 = true;
              td[6].classList.add("cutting");
              td[7].classList.add("cutting");
              td[8].classList.add("cutting");
         }
         //VERTICAL Os
         else if(td[0].innerText==="O" && td[3].innerText==="O" && td[6].innerText==="O"){
              oWins();
              stopGame1 = true;
              td[0].classList.add("cutting");
              td[3].classList.add("cutting");
              td[6].classList.add("cutting");
         }
         else if(td[1].innerText==="O" && td[4].innerText==="O" && td[7].innerText==="O"){
              oWins();
              stopGame1 = true;
              td[1].classList.add("cutting");
              td[4].classList.add("cutting");
              td[7].classList.add("cutting");
         }
         else if(td[2].innerText==="O" && td[5].innerText==="O" && td[8].innerText==="O"){
              oWins();
              stopGame1 = true;
              td[2].classList.add("cutting");
              td[5].classList.add("cutting");
              td[8].classList.add("cutting");
         }
         //CROSS Os
         else if(td[0].innerText==="O" && td[4].innerText==="O" && td[8].innerText==="O"){
              oWins();
              stopGame1 = true;
              td[0].classList.add("cutting");
              td[4].classList.add("cutting");
              td[8].classList.add("cutting");
         }
         else if(td[2].innerText==="O" && td[4].innerText==="O" && td[6].innerText==="O"){
              oWins();
              stopGame1 = true;
              td[2].classList.add("cutting");
              td[4].classList.add("cutting");
              td[6].classList.add("cutting");
         }
         else if(counter1===4){
            draw();
         }
         else{
          var someAnotherVar = 99;
         }
           
       }  

         //FILLING Xs RANDOMLY
            if(!stopGame1===true){
              var a1 = randTd();
               if(td[a1].innerText === "X" || td[a1].innerText === "O")
               {
                 var a2 = randTd();
               }
                else
               { 
                 td[a1].textContent = "X";
                 td[a1].classList.add("displayStyleXtran");
               };
               if(td[a2].innerText === "X" || td[a2].innerText === "O")
               {
                 var a3 = randTd();
               }
                else
               { 
                 td[a2].textContent = "X";
                 td[a2].classList.add("displayStyleXtran");
               };
               if(td[a3].innerText === "X" || td[a3].innerText === "O")
               {
                 var a4 = randTd();
               }
                else
               { 
                 td[a3].textContent = "X";
                 td[a3].classList.add("displayStyleXtran");
               };
                if(td[a4].innerText === "X" || td[a4].innerText === "O")
               {
                 var a5 = randTd();
               }
                else
               { 
                 td[a4].textContent = "X";
                 td[a4].classList.add("displayStyleXtran");
               };
                if(td[a5].innerText === "X" || td[a5].innerText === "O")
               {
                 var a6 = randTd();
               }
                else
               { 
                 td[a5].textContent = "X";
                 td[a5].classList.add("displayStyleXtran");
               };
               if(td[a6].innerText === "X" || td[a6].innerText === "O")
               {
                 var a7 = randTd();
               }
                else
               { 
                 td[a6].textContent = "X";
                 td[a6].classList.add("displayStyleXtran");
               };
               if(td[a7].innerText === "X" || td[a7].innerText === "O")
               {
                 var a8 = randTd();
               }
                else
               { 
                 td[a7].textContent = "X";
                 td[a7].classList.add("displayStyleXtran");
               };
                if(td[a8].innerText === "X" || td[a8].innerText === "O")
               {
                 var a9 = randTd();
               }
                else
               { 
                 td[a8].textContent = "X";
                 td[a8].classList.add("displayStyleXtran");
               };
               if(td[a9].innerText === "X" || td[a9].innerText === "O")
               {
                 var a10 = randTd();
               }
                else
               { 
                 td[a9].textContent = "X";
                 td[a9].classList.add("displayStyleXtran");
               };
               if(td[a10].innerText === "X" || td[a10].innerText === "O")
               {
                 var a11 = randTd();
               }
                else
               { 
                 td[a10].textContent = "X";
                 td[a10].classList.add("displayStyleXtran");
               };
               if(td[a11].innerText === "X" || td[a11].innerText === "O")
               {
                 var a12 = randTd();
               }
                else
               { 
                 td[a11].textContent = "X";
                 td[a11].classList.add("displayStyleXtran");
               };
               if(td[a12].innerText === "X" || td[a12].innerText === "O")
               {
                 var a13 = randTd();
               }
                else
               { 
                 td[a12].textContent = "X";
                 td[a12].classList.add("displayStyleXtran");
               };
                if(td[a13].innerText === "X" || td[a13].innerText === "O")
               {
                 var a14 = randTd();
               }
                else
               { 
                 td[a13].textContent = "X";
                 td[a13].classList.add("displayStyleXtran");
               };
                if(td[a14].innerText === "X" || td[a14].innerText === "O")
               {
                 var a15 = randTd();
               }
                else
               { 
                 td[a14].textContent = "X";
                 td[a14].classList.add("displayStyleXtran");
               };
               if(td[a15].innerText === "X" || td[a15].innerText === "O")
               {
                 var a16 = randTd();
               }
                else
               { 
                 td[a15].textContent = "X";
                 td[a15].classList.add("displayStyleXtran");
               };
            };
        };
       });
   }; 
  }); 
});  


   
 /* I M P O S S I B L E    L E V E L */
impossible.addEventListener("click",function(){
    stopEasy = true;
    impossible1.style.color = "#017aff";
   impossible.style.background = "white";
   easy1.style.color = "white";
   easy.style.background = "#017aff";
    //IMPOSSIBLE LEVEL PLAYER X
   playerX.addEventListener("click",function(){
   stopO = true;
   x1.style.color = "#017aff";
   playerX.style.background = "white";
   o1.style.color = "white";
   playerO.style.background = "#017aff";

      for(var i=0; i<td.length; i++){
        td[i].addEventListener("click",function(){
          if(!stopX===true){
            counterX++;
            this.textContent = "X";
            this.classList.add("displayStyleX");

            //Winning Logic
            if(!stopX === true){
              setInterval(function(){
              //HORIZONTAL Os
              if(td[0].innerText==="O" && td[1].innerText==="O" && td[2].innerText==="O"){
                oWins();
                td[0].classList.add("cutting");
                td[1].classList.add("cutting");
                td[2].classList.add("cutting");
                stopX = true;
              }
             if(td[3].innerText==="O" && td[4].innerText==="O" && td[5].innerText==="O"){
                oWins();
                td[3].classList.add("cutting");
                td[4].classList.add("cutting");
                td[5].classList.add("cutting");
                stopX = true;
              }
              if(td[6].innerText==="O" && td[7].innerText==="O" && td[8].innerText==="O"){
                oWins();
                td[6].classList.add("cutting");
                td[7].classList.add("cutting");
                td[8].classList.add("cutting");
                stopX = true;
              }
              //VERTICAL Os
              if(td[0].innerText==="O" && td[3].innerText==="O" && td[6].innerText==="O"){
                oWins();
                td[0].classList.add("cutting");
                td[3].classList.add("cutting");
                td[6].classList.add("cutting");
                stopX = true;
              }
              if(td[1].innerText==="O" && td[4].innerText==="O" && td[7].innerText==="O"){
                oWins();
                td[1].classList.add("cutting");
                td[4].classList.add("cutting");
                td[7].classList.add("cutting");
                stopX = true;
              }
              if(td[2].innerText==="O" && td[5].innerText==="O" && td[8].innerText==="O"){
                oWins();
                td[2].classList.add("cutting");
                td[5].classList.add("cutting");
                td[8].classList.add("cutting");
                stopX = true;
              }
              //CROSS Os
              if(td[0].innerText==="O" && td[4].innerText==="O" && td[8].innerText==="O"){
                oWins();
                td[0].classList.add("cutting");
                td[4].classList.add("cutting");
                td[8].classList.add("cutting");
                stopX = true;
              }
              if(td[2].innerText==="O" && td[4].innerText==="O" && td[6].innerText==="O"){
                oWins();
                td[2].classList.add("cutting");
                td[4].classList.add("cutting");
                td[6].classList.add("cutting");
                stopX = true;
              }
             },100);
            }

            //FILLING Os systematically
            if(counterX===1)
            {
              if(td[0].innerText==="X" || td[1].innerText==="X" || td[2].innerText==="X" || td[3].innerText==="X"|| td[5].innerText==="X" || td[6].innerText==="X" || td[7].innerText==="X" || td[8].innerText==="X")
              {
                td[4].textContent="O";
                td[4].classList.add("displayStyleOtran");
              }
              if(td[4].innerText==="X")
              {
                td[6].textContent="O";
                td[6].classList.add("displayStyleOtran");
              }
            }
            
             //COUNTERX = 2
            if(counterX===2)
            {
              //x = 0 & 1
              if(td[0].innerText==="X" && td[1].innerText==="X")
              {
               td[2].textContent="O";
               td[2].classList.add("displayStyleOtran");
              }
              //x = 0 & 3
              if(td[0].innerText==="X" && td[3].innerText==="X")
              {
               td[6].textContent="O";
               td[6].classList.add("displayStyleOtran");
              }
              //x = 0 & 2
              if(td[0].innerText==="X" && td[2].innerText==="X")
              {
               td[1].textContent="O";
               td[1].classList.add("displayStyleOtran");
              }
              //x = 0 & 6
              if(td[0].innerText==="X" && td[6].innerText==="X")
              {
               td[3].textContent="O";
               td[3].classList.add("displayStyleOtran");
              }
              //x = 0 & 5
              if(td[0].innerText==="X" && td[5].innerText==="X")
              {
               td[8].textContent="O";
               td[8].classList.add("displayStyleOtran");
              }
              //x = 0 & 7
              if(td[0].innerText==="X" && td[7].innerText==="X")
              {
               td[8].textContent="O";
               td[8].classList.add("displayStyleOtran");
              }
              //x = 0 & 8
              if(td[0].innerText==="X" && td[8].innerText==="X")
              {
               td[5].textContent="O";
               td[5].classList.add("displayStyleOtran");
              }
              //x = 0 & 4
              if(td[0].innerText==="X" && td[4].innerText==="X")
              {
               td[8].textContent="O";
               td[8].classList.add("displayStyleOtran");
              }

              //x = 1 & 2
              if(td[1].innerText==="X" && td[2].innerText==="X")
              {
               td[0].textContent="O";
               td[0].classList.add("displayStyleOtran");
              }
              //x = 1 & 3
              if(td[1].innerText==="X" && td[3].innerText==="X")
              {
               td[0].textContent="O";
               td[0].classList.add("displayStyleOtran");
              }
              //x = 1 & 4
              if(td[1].innerText==="X" && td[4].innerText==="X")
              {
               td[7].textContent="O";
               td[7].classList.add("displayStyleOtran");
              }
              //x = 1 & 5
              if(td[1].innerText==="X" && td[5].innerText==="X")
              {
               td[2].textContent="O";
               td[2].classList.add("displayStyleOtran");
              }
              //x = 1 & 6
              if(td[1].innerText==="X" && td[6].innerText==="X")
              {
               td[2].textContent="O";
               td[2].classList.add("displayStyleOtran");
              }
              //x = 1 & 7
              if(td[1].innerText==="X" && td[7].innerText==="X")
              {
               td[3].textContent="O";
               td[3].classList.add("displayStyleOtran");
              }
              //x = 1 & 8
              if(td[1].innerText==="X" && td[8].innerText==="X")
              {
               td[0].textContent="O";
               td[0].classList.add("displayStyleOtran");
              }

              //x = 2 & 3
              if(td[2].innerText==="X" && td[3].innerText==="X")
              {
               td[6].textContent="O";
               td[6].classList.add("displayStyleOtran");
              }
              //x = 2 & 4
              if(td[2].innerText==="X" && td[4].innerText==="X")
              {
               td[0].textContent="O";
               td[0].classList.add("displayStyleOtran");
              }
              //x = 2 & 5
              if(td[2].innerText==="X" && td[5].innerText==="X")
              {
               td[8].textContent="O";
               td[8].classList.add("displayStyleOtran");
              }
              //x = 2 & 6
              if(td[2].innerText==="X" && td[6].innerText==="X")
              {
               td[3].textContent="O";
               td[3].classList.add("displayStyleOtran");
              }
              //x = 2 & 7
              if(td[2].innerText==="X" && td[7].innerText==="X")
              {
               td[6].textContent="O";
               td[6].classList.add("displayStyleOtran");
              }
              //x = 2 & 8
              if(td[2].innerText==="X" && td[8].innerText==="X")
              {
               td[5].textContent="O";
               td[5].classList.add("displayStyleOtran");
              }

              //x = 3 & 4
              if(td[3].innerText==="X" && td[4].innerText==="X")
              {
               td[5].textContent="O";
               td[5].classList.add("displayStyleOtran");
              }
              //x = 3 & 5
              if(td[3].innerText==="X" && td[5].innerText==="X")
              {
               td[1].textContent="O";
               td[1].classList.add("displayStyleOtran");
              }
              //x = 3 & 6
              if(td[3].innerText==="X" && td[6].innerText==="X")
              {
               td[0].textContent="O";
               td[0].classList.add("displayStyleOtran");
              }
              //x = 3 & 7
              if(td[3].innerText==="X" && td[7].innerText==="X")
              {
               td[6].textContent="O";
               td[6].classList.add("displayStyleOtran");
              }
              //x = 3 & 8
              if(td[3].innerText==="X" && td[8].innerText==="X")
              {
               td[0].textContent="O";
               td[0].classList.add("displayStyleOtran");
              }

              //x = 4 & 5
              if(td[4].innerText==="X" && td[5].innerText==="X")
              {
               td[3].textContent="O";
               td[3].classList.add("displayStyleOtran");
              }
              //x = 4 & 7
              if(td[4].innerText==="X" && td[7].innerText==="X")
              {
               td[1].textContent="O";
               td[1].classList.add("displayStyleOtran");
              }
              //x = 4 & 8
              if(td[4].innerText==="X" && td[8].innerText==="X")
              {
               td[0].textContent="O";
               td[0].classList.add("displayStyleOtran");
              }

              //x = 5 & 6
              if(td[5].innerText==="X" && td[6].innerText==="X")
              {
               td[2].textContent="O";
               td[2].classList.add("displayStyleOtran");
              }
              //x = 5 & 7
              if(td[5].innerText==="X" && td[7].innerText==="X")
              {
               td[8].textContent="O";
               td[8].classList.add("displayStyleOtran");
              }
              //x = 5 & 8
              if(td[5].innerText==="X" && td[8].innerText==="X")
              {
               td[2].textContent="O";
               td[2].classList.add("displayStyleOtran");
              }

              //x = 6 & 7
              if(td[6].innerText==="X" && td[7].innerText==="X")
              {
               td[8].textContent="O";
               td[8].classList.add("displayStyleOtran");
              }
              //x = 6 & 8
              if(td[6].innerText==="X" && td[8].innerText==="X")
              {
               td[7].textContent="O";
               td[7].classList.add("displayStyleOtran");
              }

              //x = 7 & 8
              if(td[7].innerText==="X" && td[8].innerText==="X")
              {
               td[6].textContent="O";
               td[6].classList.add("displayStyleOtran");
              }
            }
             
            // counterX = 3
            if(counterX===3)
            {

                //x = 0 & 1 (6)
              if(td[0].innerText==="X" && td[1].innerText==="X" && td[6].innerText==="X" && td[2].innerText==="O" && td[4].innerText==="O"  && td[3].innerText==="")
              {
               td[3].textContent="O";
               td[3].classList.add("displayStyleOtran");
              }
              //x = 0 & 1 (3 or 5 or 7 or 8) case 1
              if(td[0].innerText==="X" && td[1].innerText==="X" && (td[3].innerText==="X" && td[5].innerText==="" && td[7].innerText==="" && td[8].innerText==="") && td[2].innerText==="O" && td[4].innerText==="O"  && td[6].innerText==="")
              {
               td[6].textContent="O";
               td[6].classList.add("displayStyleOtran");
              }
              //x = 0 & 1 (3 or 5 or 7 or 8) case 2
              if(td[0].innerText==="X" && td[1].innerText==="X" && (td[3].innerText==="" && td[5].innerText==="X" && td[7].innerText==="" && td[8].innerText==="") && td[2].innerText==="O" && td[4].innerText==="O"  && td[6].innerText==="")
              {
               td[6].textContent="O";
               td[6].classList.add("displayStyleOtran");
              }
              //x = 0 & 1 (3 or 5 or 7 or 8) case 3
              if(td[0].innerText==="X" && td[1].innerText==="X" && (td[3].innerText==="" && td[5].innerText==="" && td[7].innerText==="X" && td[8].innerText==="") && td[2].innerText==="O" && td[4].innerText==="O"  && td[6].innerText==="")
              {
               td[6].textContent="O";
               td[6].classList.add("displayStyleOtran");
              }
              //x = 0 & 1 (3 or 5 or 7 or 8) case 4
              if(td[0].innerText==="X" && td[1].innerText==="X" && (td[3].innerText==="" && td[5].innerText==="" && td[7].innerText==="" && td[8].innerText==="X") && td[2].innerText==="O" && td[4].innerText==="O"  && td[6].innerText==="")
              {
               td[6].textContent="O";
               td[6].classList.add("displayStyleOtran");
              }
              //x = 0 & 2 (7)
              if(td[0].innerText==="X" && td[2].innerText==="X" && td[7].innerText==="X" && td[1].innerText==="O" && td[4].innerText==="O"  && td[8].innerText==="")
              {
               td[8].textContent="O";
               td[8].classList.add("displayStyleOtran");
              }
              //x = 0 & 2 (3 or 5 or 6 or 8) case 1
              if(td[0].innerText==="X" && td[2].innerText==="X" && (td[3].innerText==="X" && td[5].innerText==="" && td[6].innerText==="" && td[8].innerText==="") && td[1].innerText==="O" && td[4].innerText==="O"  && td[7].innerText==="")
              {
               td[7].textContent="O";
               td[7].classList.add("displayStyleOtran");
              }
              //x = 0 & 2 (3 or 5 or 6 or 8) case 2
              if(td[0].innerText==="X" && td[2].innerText==="X" && (td[3].innerText==="" && td[5].innerText==="X" && td[6].innerText==="" && td[8].innerText==="") && td[1].innerText==="O" && td[4].innerText==="O"  && td[7].innerText==="")
              {
               td[7].textContent="O";
               td[7].classList.add("displayStyleOtran");
              }
              //x = 0 & 2 (3 or 5 or 6 or 8) case 3
              if(td[0].innerText==="X" && td[2].innerText==="X" && (td[3].innerText==="" && td[5].innerText==="" && td[6].innerText==="X" && td[8].innerText==="") && td[1].innerText==="O" && td[4].innerText==="O"  && td[7].innerText==="")
              {
               td[7].textContent="O";
               td[7].classList.add("displayStyleOtran");
              }
              //x = 0 & 2 (3 or 5 or 6 or 8) case 4
              if(td[0].innerText==="X" && td[2].innerText==="X" && (td[3].innerText==="" && td[5].innerText==="" && td[6].innerText==="" && td[8].innerText==="X") && td[1].innerText==="O" && td[4].innerText==="O"  && td[7].innerText==="")
              {
               td[7].textContent="O";
               td[7].classList.add("displayStyleOtran");
              }
              //x = 0 & 3 (2)
              if(td[0].innerText==="X" && td[3].innerText==="X" && td[2].innerText==="X" && td[4].innerText==="O" && td[6].innerText==="O"  && td[1].innerText==="")
              {
               td[1].textContent="O";
               td[1].classList.add("displayStyleOtran");
              }
              //x = 0 & 3 (1 or 5 or 7 or 8) case 1
              if(td[0].innerText==="X" && td[3].innerText==="X" && (td[1].innerText==="X" && td[5].innerText==="" && td[7].innerText==="" && td[8].innerText==="") && td[4].innerText==="O" && td[6].innerText==="O"  && td[2].innerText==="")
              {
               td[2].textContent="O";
               td[2].classList.add("displayStyleOtran");
              }
              //x = 0 & 3 (1 or 5 or 7 or 8) case 2
              if(td[0].innerText==="X" && td[3].innerText==="X" && (td[1].innerText==="" && td[5].innerText==="X" && td[7].innerText==="" && td[8].innerText==="") && td[4].innerText==="O" && td[6].innerText==="O"  && td[2].innerText==="")
              {
               td[2].textContent="O";
               td[2].classList.add("displayStyleOtran");
              }
              //x = 0 & 3 (1 or 5 or 7 or 8) case 3
              if(td[0].innerText==="X" && td[3].innerText==="X" && (td[1].innerText==="" && td[5].innerText==="" && td[7].innerText==="X" && td[8].innerText==="") && td[4].innerText==="O" && td[6].innerText==="O"  && td[2].innerText==="")
              {
               td[2].textContent="O";
               td[2].classList.add("displayStyleOtran");
              }
              //x = 0 & 3 (1 or 5 or 7 or 8) case 4
              if(td[0].innerText==="X" && td[3].innerText==="X" && (td[1].innerText==="" && td[5].innerText==="" && td[7].innerText==="" && td[8].innerText==="X") && td[4].innerText==="O" && td[6].innerText==="O"  && td[2].innerText==="")
              {
               td[2].textContent="O";
               td[2].classList.add("displayStyleOtran");
              }
              //x = 0 & 4 (7)
              if(td[0].innerText==="X" && td[4].innerText==="X" && td[7].innerText==="X" && td[6].innerText==="O" && td[8].innerText==="O"  && td[1].innerText==="")
              {
               td[1].textContent="O";
               td[1].classList.add("displayStyleOtran");
              }
              //x = 0 & 4 (1 or 2 or 3 or 5) case 1
              if(td[0].innerText==="X" && td[4].innerText==="X" && (td[1].innerText==="X" && td[2].innerText==="" && td[3].innerText==="" && td[5].innerText==="") && td[6].innerText==="O" && td[8].innerText==="O"  && td[7].innerText==="")
              {
               td[7].textContent="O";
               td[7].classList.add("displayStyleOtran");
              }
              //x = 0 & 4 (1 or 2 or 3 or 5) case 2
              if(td[0].innerText==="X" && td[4].innerText==="X" && (td[1].innerText==="" && td[2].innerText==="X" && td[3].innerText==="" && td[5].innerText==="") && td[6].innerText==="O" && td[8].innerText==="O"  && td[7].innerText==="")
              {
               td[7].textContent="O";
               td[7].classList.add("displayStyleOtran");
              }
              //x = 0 & 4 (1 or 2 or 3 or 5) case 3
              if(td[0].innerText==="X" && td[4].innerText==="X" && (td[1].innerText==="" && td[2].innerText==="" && td[3].innerText==="X" && td[5].innerText==="") && td[6].innerText==="O" && td[8].innerText==="O"  && td[7].innerText==="")
              {
               td[7].textContent="O";
               td[7].classList.add("displayStyleOtran");
              }
              //x = 0 & 4 (1 or 2 or 3 or 5) case 4
              if(td[0].innerText==="X" && td[4].innerText==="X" && (td[1].innerText==="" && td[2].innerText==="" && td[3].innerText==="" && td[5].innerText==="X") && td[6].innerText==="O" && td[8].innerText==="O"  && td[7].innerText==="")
              {
               td[7].textContent="O";
               td[7].classList.add("displayStyleOtran");
              }
              //x = 0 & 5 (1)()()()()
              if(td[0].innerText==="X" && td[5].innerText==="X" && td[1].innerText==="X" && td[4].innerText==="O" && td[8].innerText==="O"  && td[2].innerText==="")
              {
               td[2].textContent="O";
               td[2].classList.add("displayStyleOtran");
              }
              //x = 0 & 5 ()(2)()()()
              if(td[0].innerText==="X" && td[5].innerText==="X" && td[2].innerText==="X" && td[4].innerText==="O" && td[8].innerText==="O"  && td[1].innerText==="")
              {
               td[1].textContent="O";
               td[1].classList.add("displayStyleOtran");
              }
              //x = 0 & 5 ()()(3)()()
              if(td[0].innerText==="X" && td[5].innerText==="X" && td[3].innerText==="X" && td[4].innerText==="O" && td[8].innerText==="O"  && td[6].innerText==="")
              {
               td[6].textContent="O";
               td[6].classList.add("displayStyleOtran");
              }
              //x = 0 & 5 ()()()(6)()
              if(td[0].innerText==="X" && td[5].innerText==="X" && td[6].innerText==="X" && td[4].innerText==="O" && td[8].innerText==="O"  && td[3].innerText==="")
              {
               td[3].textContent="O";
               td[3].classList.add("displayStyleOtran");
              }
              //x = 0 & 5 ()()()()(7)
              if(td[0].innerText==="X" && td[5].innerText==="X" && td[7].innerText==="X" && td[4].innerText==="O" && td[8].innerText==="O"  && td[1].innerText==="")
              {
               td[1].textContent="O";
               td[1].classList.add("displayStyleOtran");
              }
              //x = 0 & 6 (5)
              if(td[0].innerText==="X" && td[6].innerText==="X" && td[5].innerText==="X" && td[3].innerText==="O" && td[4].innerText==="O"  && td[8].innerText==="")
              {
               td[8].textContent="O";
               td[8].classList.add("displayStyleOtran");
              }
              //x = 0 & 6 (1 or 2 or 7 or 8) case 1
              if(td[0].innerText==="X" && td[6].innerText==="X" && (td[1].innerText==="X" && td[2].innerText==="" && td[7].innerText==="" && td[8].innerText==="") && td[3].innerText==="O" && td[4].innerText==="O"  && td[5].innerText==="")
              {
               td[5].textContent="O";
               td[5].classList.add("displayStyleOtran");
              }
              //x = 0 & 6 (1 or 2 or 7 or 8) case 2
              if(td[0].innerText==="X" && td[6].innerText==="X" && (td[1].innerText==="" && td[2].innerText==="X" && td[7].innerText==="" && td[8].innerText==="") && td[3].innerText==="O" && td[4].innerText==="O"  && td[5].innerText==="")
              {
               td[5].textContent="O";
               td[5].classList.add("displayStyleOtran");
              }
              //x = 0 & 6 (1 or 2 or 7 or 8) case 3
              if(td[0].innerText==="X" && td[6].innerText==="X" && (td[1].innerText==="" && td[2].innerText==="" && td[7].innerText==="X" && td[8].innerText==="") && td[3].innerText==="O" && td[4].innerText==="O"  && td[5].innerText==="")
              {
               td[5].textContent="O";
               td[5].classList.add("displayStyleOtran");
              }
              //x = 0 & 6 (1 or 2 or 7 or 8) case 4
              if(td[0].innerText==="X" && td[6].innerText==="X" && (td[1].innerText==="" && td[2].innerText==="" && td[7].innerText==="" && td[8].innerText==="X") && td[3].innerText==="O" && td[4].innerText==="O"  && td[5].innerText==="")
              {
               td[5].textContent="O";
               td[5].classList.add("displayStyleOtran");
              }
              //x = 0 & 7 (1)()()()()
              if(td[0].innerText==="X" && td[7].innerText==="X" && td[1].innerText==="X" && td[4].innerText==="O" && td[8].innerText==="O"  && td[2].innerText==="")
              {
               td[2].textContent="O";
               td[2].classList.add("displayStyleOtran");
              }
              //x = 0 & 7 ()(2)()()()
              if(td[0].innerText==="X" && td[7].innerText==="X" && td[2].innerText==="X" && td[4].innerText==="O" && td[8].innerText==="O"  && td[1].innerText==="")
              {
               td[1].textContent="O";
               td[1].classList.add("displayStyleOtran");
              }
              //x = 0 & 7 ()()(3)()()
              if(td[0].innerText==="X" && td[7].innerText==="X" && td[3].innerText==="X" && td[4].innerText==="O" && td[8].innerText==="O"  && td[6].innerText==="")
              {
               td[6].textContent="O";
               td[6].classList.add("displayStyleOtran");
              }
              //x = 0 & 7 ()()()(5)()
              if(td[0].innerText==="X" && td[7].innerText==="X" && td[5].innerText==="X" && td[4].innerText==="O" && td[8].innerText==="O"  && td[1].innerText==="")
              {
               td[1].textContent="O";
               td[1].classList.add("displayStyleOtran");
              }
              //x = 0 & 7 ()()()()(6)
              if(td[0].innerText==="X" && td[7].innerText==="X" && td[6].innerText==="X" && td[4].innerText==="O" && td[8].innerText==="O"  && td[3].innerText==="")
              {
               td[3].textContent="O";
               td[3].classList.add("displayStyleOtran");
              }
              //x = 0 & 8 (3)
              if(td[0].innerText==="X" && td[8].innerText==="X" && td[3].innerText==="X" && td[4].innerText==="O" && td[5].innerText==="O"  && td[6].innerText==="")
              {
               td[6].textContent="O";
               td[6].classList.add("displayStyleOtran");
              }
              //x = 0 & 8 (1 or 2 or 6 or 7) case 1
              if(td[0].innerText==="X" && td[8].innerText==="X" && (td[1].innerText==="X" && td[2].innerText==="" && td[6].innerText==="" && td[7].innerText==="") && td[4].innerText==="O" && td[5].innerText==="O"  && td[3].innerText==="")
              {
               td[3].textContent="O";
               td[3].classList.add("displayStyleOtran");
              }
              //x = 0 & 8 (1 or 2 or 6 or 7) case 2
              if(td[0].innerText==="X" && td[8].innerText==="X" && (td[1].innerText==="" && td[2].innerText==="X" && td[6].innerText==="" && td[7].innerText==="") && td[4].innerText==="O" && td[5].innerText==="O"  && td[3].innerText==="")
              {
               td[3].textContent="O";
               td[3].classList.add("displayStyleOtran");
              }
              //x = 0 & 8 (1 or 2 or 6 or 7) case 3
              if(td[0].innerText==="X" && td[8].innerText==="X" && (td[1].innerText==="" && td[2].innerText==="" && td[6].innerText==="X" && td[7].innerText==="") && td[4].innerText==="O" && td[5].innerText==="O"  && td[3].innerText==="")
              {
               td[3].textContent="O";
               td[3].classList.add("displayStyleOtran");
              }
              //x = 0 & 8 (1 or 2 or 6 or 7) case 4
              if(td[0].innerText==="X" && td[8].innerText==="X" && (td[1].innerText==="" && td[2].innerText==="" && td[6].innerText==="" && td[7].innerText==="X") && td[4].innerText==="O" && td[5].innerText==="O"  && td[3].innerText==="")
              {
               td[3].textContent="O";
               td[3].classList.add("displayStyleOtran");
              }

              //x = 1 & 2 (8)
              if(td[1].innerText==="X" && td[2].innerText==="X" && td[8].innerText==="X" && td[0].innerText==="O" && td[4].innerText==="O"  && td[5].innerText==="")
              {
               td[5].textContent="O";
               td[5].classList.add("displayStyleOtran");
              }
              //x = 1 & 2 (3 or 5 or 6 or 7) case 1
              if(td[1].innerText==="X" && td[2].innerText==="X" && (td[3].innerText==="X" && td[5].innerText==="" && td[6].innerText==="" && td[7].innerText==="") && td[0].innerText==="O" && td[4].innerText==="O"  && td[8].innerText==="")
              {
               td[8].textContent="O";
               td[8].classList.add("displayStyleOtran");
              }
              //x = 1 & 2 (3 or 5 or 6 or 7) case 2
              if(td[1].innerText==="X" && td[2].innerText==="X" && (td[3].innerText==="" && td[5].innerText==="X" && td[6].innerText==="" && td[7].innerText==="") && td[0].innerText==="O" && td[4].innerText==="O"  && td[8].innerText==="")
              {
               td[8].textContent="O";
               td[8].classList.add("displayStyleOtran");
              }
              //x = 1 & 2 (3 or 5 or 6 or 7) case 3
              if(td[1].innerText==="X" && td[2].innerText==="X" && (td[3].innerText==="" && td[5].innerText==="" && td[6].innerText==="X" && td[7].innerText==="") && td[0].innerText==="O" && td[4].innerText==="O"  && td[8].innerText==="")
              {
               td[8].textContent="O";
               td[8].classList.add("displayStyleOtran");
              }
              //x = 1 & 2 (3 or 5 or 6 or 7) case 4
              if(td[1].innerText==="X" && td[2].innerText==="X" && (td[3].innerText==="" && td[5].innerText==="" && td[6].innerText==="" && td[7].innerText==="X") && td[0].innerText==="O" && td[4].innerText==="O"  && td[8].innerText==="")
              {
               td[8].textContent="O";
               td[8].classList.add("displayStyleOtran");
              }
              //x = 1 & 3 (8)
              if(td[1].innerText==="X" && td[3].innerText==="X" && td[8].innerText==="X" && td[0].innerText==="O" && td[4].innerText==="O"  && td[7].innerText==="")
              {
               td[7].textContent="O";
               td[7].classList.add("displayStyleOtran");
              }
              //x = 1 & 3 (2 or 5 or 6 or 7) case 1
              if(td[1].innerText==="X" && td[3].innerText==="X" && (td[2].innerText==="X" && td[5].innerText==="" && td[6].innerText==="" && td[7].innerText==="") && td[0].innerText==="O" && td[4].innerText==="O"  && td[8].innerText==="")
              {
               td[8].textContent="O";
               td[8].classList.add("displayStyleOtran");
              }
              //x = 1 & 3 (2 or 5 or 6 or 7) case 2
              if(td[1].innerText==="X" && td[3].innerText==="X" && (td[2].innerText==="" && td[5].innerText==="X" && td[6].innerText==="" && td[7].innerText==="") && td[0].innerText==="O" && td[4].innerText==="O"  && td[8].innerText==="")
              {
               td[8].textContent="O";
               td[8].classList.add("displayStyleOtran");
              }
              //x = 1 & 3 (2 or 5 or 6 or 7) case 3
              if(td[1].innerText==="X" && td[3].innerText==="X" && (td[2].innerText==="" && td[5].innerText==="" && td[6].innerText==="X" && td[7].innerText==="") && td[0].innerText==="O" && td[4].innerText==="O"  && td[8].innerText==="")
              {
               td[8].textContent="O";
               td[8].classList.add("displayStyleOtran");
              }
              //x = 1 & 3 (2 or 5 or 6 or 7) case 4
              if(td[1].innerText==="X" && td[3].innerText==="X" && (td[2].innerText==="" && td[5].innerText==="" && td[6].innerText==="" && td[7].innerText==="X") && td[0].innerText==="O" && td[4].innerText==="O"  && td[8].innerText==="")
              {
               td[8].textContent="O";
               td[8].classList.add("displayStyleOtran");
              }
              //x = 1 & 4 (8)
              if(td[1].innerText==="X" && td[4].innerText==="X" && td[8].innerText==="X" && td[6].innerText==="O" && td[7].innerText==="O"  && td[0].innerText==="")
              {
               td[0].textContent="O";
               td[0].classList.add("displayStyleOtran");
              }
              //x = 1 & 4 (0 or 2 or 3 or 5) case 1
              if(td[1].innerText==="X" && td[4].innerText==="X" && (td[0].innerText==="X" && td[2].innerText==="" && td[3].innerText==="" && td[5].innerText==="") && td[6].innerText==="O" && td[7].innerText==="O"  && td[8].innerText==="")
              {
               td[8].textContent="O";
               td[8].classList.add("displayStyleOtran");
              }
              //x = 1 & 4 (0 or 2 or 3 or 5) case 2
              if(td[1].innerText==="X" && td[4].innerText==="X" && (td[0].innerText==="" && td[2].innerText==="X" && td[3].innerText==="" && td[5].innerText==="") && td[6].innerText==="O" && td[7].innerText==="O"  && td[8].innerText==="")
              {
               td[8].textContent="O";
               td[8].classList.add("displayStyleOtran");
              }
              //x = 1 & 4 (0 or 2 or 3 or 5) case 3
              if(td[1].innerText==="X" && td[4].innerText==="X" && (td[0].innerText==="" && td[2].innerText==="" && td[3].innerText==="X" && td[5].innerText==="") && td[6].innerText==="O" && td[7].innerText==="O"  && td[8].innerText==="")
              {
               td[8].textContent="O";
               td[8].classList.add("displayStyleOtran");
              }
              //x = 1 & 4 (0 or 2 or 3 or 5) case 4
              if(td[1].innerText==="X" && td[4].innerText==="X" && (td[0].innerText==="" && td[2].innerText==="" && td[3].innerText==="" && td[5].innerText==="X") && td[6].innerText==="O" && td[7].innerText==="O"  && td[8].innerText==="")
              {
               td[8].textContent="O";
               td[8].classList.add("displayStyleOtran");
              }
              //x = 1 & 5 (6)
              if(td[1].innerText==="X" && td[5].innerText==="X" && td[6].innerText==="X" && td[2].innerText==="O" && td[4].innerText==="O"  && td[7].innerText==="")
              {
               td[7].textContent="O";
               td[7].classList.add("displayStyleOtran");
              }
              //x = 1 & 5 (0 or 3 or 7 or 8) case 1
              if(td[1].innerText==="X" && td[5].innerText==="X" && (td[0].innerText==="X" && td[3].innerText==="" && td[7].innerText==="" && td[8].innerText==="") && td[2].innerText==="O" && td[4].innerText==="O"  && td[6].innerText==="")
              {
               td[6].textContent="O";
               td[6].classList.add("displayStyleOtran");
              }
              //x = 1 & 5 (0 or 3 or 7 or 8) case 2
              if(td[1].innerText==="X" && td[5].innerText==="X" && (td[0].innerText==="" && td[3].innerText==="X" && td[7].innerText==="" && td[8].innerText==="") && td[2].innerText==="O" && td[4].innerText==="O"  && td[6].innerText==="")
              {
               td[6].textContent="O";
               td[6].classList.add("displayStyleOtran");
              }
              //x = 1 & 5 (0 or 3 or 7 or 8) case 3
              if(td[1].innerText==="X" && td[5].innerText==="X" && (td[0].innerText==="" && td[3].innerText==="" && td[7].innerText==="X" && td[8].innerText==="") && td[2].innerText==="O" && td[4].innerText==="O"  && td[6].innerText==="")
              {
               td[6].textContent="O";
               td[6].classList.add("displayStyleOtran");
              }
              //x = 1 & 5 (0 or 3 or 7 or 8) case 4
              if(td[1].innerText==="X" && td[5].innerText==="X" && (td[0].innerText==="" && td[3].innerText==="" && td[7].innerText==="" && td[8].innerText==="X") && td[2].innerText==="O" && td[4].innerText==="O"  && td[6].innerText==="")
              {
               td[6].textContent="O";
               td[6].classList.add("displayStyleOtran");
              }
              //x = 1 & 6 (0)()()()()
              if(td[1].innerText==="X" && td[6].innerText==="X" && td[0].innerText==="X" && td[2].innerText==="O" && td[4].innerText==="O"  && td[3].innerText==="")
              {
               td[3].textContent="O";
               td[3].classList.add("displayStyleOtran");
              }
              //x = 1 & 6 ()(3)()()()
              if(td[1].innerText==="X" && td[6].innerText==="X" && td[3].innerText==="X" && td[2].innerText==="O" && td[4].innerText==="O"  && td[0].innerText==="")
              {
               td[0].textContent="O";
               td[0].classList.add("displayStyleOtran");
              }
              //x = 1 & 6 ()()(5)()()
              if(td[1].innerText==="X" && td[6].innerText==="X" && td[5].innerText==="X" && td[2].innerText==="O" && td[4].innerText==="O"  && td[7].innerText==="")
              {
               td[7].textContent="O";
               td[7].classList.add("displayStyleOtran");
              }
              //x = 1 & 6 ()()()(7)()
              if(td[1].innerText==="X" && td[6].innerText==="X" && td[7].innerText==="X" && td[2].innerText==="O" && td[4].innerText==="O"  && td[8].innerText==="")
              {
               td[8].textContent="O";
               td[8].classList.add("displayStyleOtran");
              }
              //x = 1 & 6 ()()()()(8)
              if(td[1].innerText==="X" && td[6].innerText==="X" && td[8].innerText==="X" && td[2].innerText==="O" && td[4].innerText==="O"  && td[7].innerText==="")
              {
               td[7].textContent="O";
               td[7].classList.add("displayStyleOtran");
              }
              //x = 1 & 7 (5)
              if(td[1].innerText==="X" && td[7].innerText==="X" && td[5].innerText==="X" && td[3].innerText==="O" && td[4].innerText==="O"  && td[6].innerText==="")
              {
               td[6].textContent="O";
               td[6].classList.add("displayStyleOtran");
              }
              //x = 1 & 7 (0 or 2 or 6 or 8) case 1
              if(td[1].innerText==="X" && td[7].innerText==="X" && (td[0].innerText==="X" && td[2].innerText==="" && td[6].innerText==="" && td[8].innerText==="") && td[3].innerText==="O" && td[4].innerText==="O"  && td[5].innerText==="")
              {
               td[5].textContent="O";
               td[5].classList.add("displayStyleOtran");
              }
              //x = 1 & 7 (0 or 2 or 6 or 8) case 2
              if(td[1].innerText==="X" && td[7].innerText==="X" && (td[0].innerText==="" && td[2].innerText==="X" && td[6].innerText==="" && td[8].innerText==="") && td[3].innerText==="O" && td[4].innerText==="O"  && td[5].innerText==="")
              {
               td[5].textContent="O";
               td[5].classList.add("displayStyleOtran");
              }
              //x = 1 & 7 (0 or 2 or 6 or 8) case 3
              if(td[1].innerText==="X" && td[7].innerText==="X" && (td[0].innerText==="" && td[2].innerText==="" && td[6].innerText==="X" && td[8].innerText==="") && td[3].innerText==="O" && td[4].innerText==="O"  && td[5].innerText==="")
              {
               td[5].textContent="O";
               td[5].classList.add("displayStyleOtran");
              }
              //x = 1 & 7 (0 or 2 or 6 or 8) case 4
              if(td[1].innerText==="X" && td[7].innerText==="X" && (td[0].innerText==="" && td[2].innerText==="" && td[6].innerText==="" && td[8].innerText==="X") && td[3].innerText==="O" && td[4].innerText==="O"  && td[5].innerText==="")
              {
               td[5].textContent="O";
               td[5].classList.add("displayStyleOtran");
              }
              //x = 1 & 8 (2)()()()()
              if(td[1].innerText==="X" && td[8].innerText==="X" && td[2].innerText==="X" && td[0].innerText==="O" && td[4].innerText==="O"  && td[5].innerText==="")
              {
               td[5].textContent="O";
               td[5].classList.add("displayStyleOtran");
              }
              //x = 1 & 8 ()(3)()()()
              if(td[1].innerText==="X" && td[8].innerText==="X" && td[3].innerText==="X" && td[0].innerText==="O" && td[4].innerText==="O"  && td[7].innerText==="")
              {
               td[7].textContent="O";
               td[7].classList.add("displayStyleOtran");
              }
              //x = 1 & 8 ()()(5)()()
              if(td[1].innerText==="X" && td[8].innerText==="X" && td[5].innerText==="X" && td[0].innerText==="O" && td[4].innerText==="O"  && td[2].innerText==="")
              {
               td[2].textContent="O";
               td[2].classList.add("displayStyleOtran");
              }
              //x = 1 & 8 ()()()(6)()
              if(td[1].innerText==="X" && td[8].innerText==="X" && td[6].innerText==="X" && td[0].innerText==="O" && td[4].innerText==="O"  && td[7].innerText==="")
              {
               td[7].textContent="O";
               td[7].classList.add("displayStyleOtran");
              }
              //x = 1 & 8 ()()()()(7)
              if(td[1].innerText==="X" && td[8].innerText==="X" && td[7].innerText==="X" && td[0].innerText==="O" && td[4].innerText==="O"  && td[6].innerText==="")
              {
               td[6].textContent="O";
               td[6].classList.add("displayStyleOtran");
              }

              //x = 2 & 3 (0)()()()()
              if(td[2].innerText==="X" && td[3].innerText==="X" && td[0].innerText==="X" && td[4].innerText==="O" && td[6].innerText==="O"  && td[1].innerText==="")
              {
               td[1].textContent="O";
               td[1].classList.add("displayStyleOtran");
              }
              //x = 2 & 3 ()(1)()()()
              if(td[2].innerText==="X" && td[3].innerText==="X" && td[1].innerText==="X" && td[4].innerText==="O" && td[6].innerText==="O"  && td[0].innerText==="")
              {
               td[0].textContent="O";
               td[0].classList.add("displayStyleOtran");
              }
              //x = 2 & 3 ()()(5)()()
              if(td[2].innerText==="X" && td[3].innerText==="X" && td[5].innerText==="X" && td[4].innerText==="O" && td[6].innerText==="O"  && td[8].innerText==="")
              {
               td[8].textContent="O";
               td[8].classList.add("displayStyleOtran");
              }
              //x = 2 & 3 ()()()(7)()
              if(td[2].innerText==="X" && td[3].innerText==="X" && td[7].innerText==="X" && td[4].innerText==="O" && td[6].innerText==="O"  && td[1].innerText==="")
              {
               td[1].textContent="O";
               td[1].classList.add("displayStyleOtran");
              }
              //x = 2 & 3 ()()()()(8)
              if(td[2].innerText==="X" && td[3].innerText==="X" && td[8].innerText==="X" && td[4].innerText==="O" && td[6].innerText==="O"  && td[5].innerText==="")
              {
               td[5].textContent="O";
               td[5].classList.add("displayStyleOtran");
              }
              //x = 2 & 4 (3)
              if(td[2].innerText==="X" && td[4].innerText==="X" && td[3].innerText==="X" && td[0].innerText==="O" && td[6].innerText==="O"  && td[5].innerText==="")
              {
               td[5].textContent="O";
               td[5].classList.add("displayStyleOtran");
              }
              //x = 2 & 4 (1 or 5 or 7 or 8) case 1
              if(td[2].innerText==="X" && td[4].innerText==="X" && (td[1].innerText==="X" && td[5].innerText==="" && td[7].innerText==="" && td[8].innerText==="") && td[0].innerText==="O" && td[6].innerText==="O"  && td[3].innerText==="")
              {
               td[3].textContent="O";
               td[3].classList.add("displayStyleOtran");
              }
              //x = 2 & 4 (1 or 5 or 7 or 8) case 2
              if(td[2].innerText==="X" && td[4].innerText==="X" && (td[1].innerText==="" && td[5].innerText==="X" && td[7].innerText==="" && td[8].innerText==="") && td[0].innerText==="O" && td[6].innerText==="O"  && td[3].innerText==="")
              {
               td[3].textContent="O";
               td[3].classList.add("displayStyleOtran");
              }
              //x = 2 & 4 (1 or 5 or 7 or 8) case 3
              if(td[2].innerText==="X" && td[4].innerText==="X" && (td[1].innerText==="" && td[5].innerText==="" && td[7].innerText==="X" && td[8].innerText==="") && td[0].innerText==="O" && td[6].innerText==="O"  && td[3].innerText==="")
              {
               td[3].textContent="O";
               td[3].classList.add("displayStyleOtran");
              }
              //x = 2 & 4 (1 or 5 or 7 or 8) case 4
              if(td[2].innerText==="X" && td[4].innerText==="X" && (td[1].innerText==="" && td[5].innerText==="" && td[7].innerText==="" && td[8].innerText==="X") && td[0].innerText==="O" && td[6].innerText==="O"  && td[3].innerText==="")
              {
               td[3].textContent="O";
               td[3].classList.add("displayStyleOtran");
              }
              //x = 2 & 5 (0)
              if(td[2].innerText==="X" && td[5].innerText==="X" && td[0].innerText==="X" && td[4].innerText==="O" && td[8].innerText==="O"  && td[1].innerText==="")
              {
               td[1].textContent="O";
               td[1].classList.add("displayStyleOtran");
              }
              //x = 2 & 5 (1 or 3 or 6 or 7) case 1
              if(td[2].innerText==="X" && td[5].innerText==="X" && (td[1].innerText==="X" && td[3].innerText==="" && td[6].innerText==="" && td[7].innerText==="") && td[4].innerText==="O" && td[8].innerText==="O"  && td[0].innerText==="")
              {
               td[0].textContent="O";
               td[0].classList.add("displayStyleOtran");
              }
              //x = 2 & 5 (1 or 3 or 6 or 7) case 2
              if(td[2].innerText==="X" && td[5].innerText==="X" && (td[1].innerText==="" && td[3].innerText==="X" && td[6].innerText==="" && td[7].innerText==="") && td[4].innerText==="O" && td[8].innerText==="O"  && td[0].innerText==="")
              {
               td[0].textContent="O";
               td[0].classList.add("displayStyleOtran");
              }
              //x = 2 & 5 (1 or 3 or 6 or 7) case 3
              if(td[2].innerText==="X" && td[5].innerText==="X" && (td[1].innerText==="" && td[3].innerText==="" && td[6].innerText==="X" && td[7].innerText==="") && td[4].innerText==="O" && td[8].innerText==="O"  && td[0].innerText==="")
              {
               td[0].textContent="O";
               td[0].classList.add("displayStyleOtran");
              }
              //x = 2 & 5 (1 or 3 or 6 or 7) case 4
              if(td[2].innerText==="X" && td[5].innerText==="X" && (td[1].innerText==="" && td[3].innerText==="" && td[6].innerText==="" && td[7].innerText==="X") && td[4].innerText==="O" && td[8].innerText==="O"  && td[0].innerText==="")
              {
               td[0].textContent="O";
               td[0].classList.add("displayStyleOtran");
              }
              //x = 2 & 6 (5)
              if(td[2].innerText==="X" && td[6].innerText==="X" && td[5].innerText==="X" && td[3].innerText==="O" && td[4].innerText==="O"  && td[8].innerText==="")
              {
               td[8].textContent="O";
               td[8].classList.add("displayStyleOtran");
              }
              //x = 2 & 6 (0 or 1 or 7 or 8) case 1
              if(td[2].innerText==="X" && td[6].innerText==="X" && (td[0].innerText==="X" && td[1].innerText==="" && td[7].innerText==="" && td[8].innerText==="") && td[3].innerText==="O" && td[4].innerText==="O"  && td[5].innerText==="")
              {
               td[5].textContent="O";
               td[5].classList.add("displayStyleOtran");
              }
              //x = 2 & 6 (0 or 1 or 7 or 8) case 2
              if(td[2].innerText==="X" && td[6].innerText==="X" && (td[0].innerText==="" && td[1].innerText==="X" && td[7].innerText==="" && td[8].innerText==="") && td[3].innerText==="O" && td[4].innerText==="O"  && td[5].innerText==="")
              {
               td[5].textContent="O";
               td[5].classList.add("displayStyleOtran");
              }
              //x = 2 & 6 (0 or 1 or 7 or 8) case 3
              if(td[2].innerText==="X" && td[6].innerText==="X" && (td[0].innerText==="" && td[1].innerText==="" && td[7].innerText==="X" && td[8].innerText==="") && td[3].innerText==="O" && td[4].innerText==="O"  && td[5].innerText==="")
              {
               td[5].textContent="O";
               td[5].classList.add("displayStyleOtran");
              }
              //x = 2 & 6 (0 or 1 or 7 or 8) case 4
              if(td[2].innerText==="X" && td[6].innerText==="X" && (td[0].innerText==="" && td[1].innerText==="" && td[7].innerText==="" && td[8].innerText==="X") && td[3].innerText==="O" && td[4].innerText==="O"  && td[5].innerText==="")
              {
               td[5].textContent="O";
               td[5].classList.add("displayStyleOtran");
              }
              //x = 2 & 7 (0)()()()()
              if(td[2].innerText==="X" && td[7].innerText==="X" && td[0].innerText==="X" && td[4].innerText==="O" && td[6].innerText==="O"  && td[1].innerText==="")
              {
               td[1].textContent="O";
               td[1].classList.add("displayStyleOtran");
              }
              //x = 2 & 7 ()(1)()()()
              if(td[2].innerText==="X" && td[7].innerText==="X" && td[1].innerText==="X" && td[4].innerText==="O" && td[6].innerText==="O"  && td[0].innerText==="")
              {
               td[0].textContent="O";
               td[0].classList.add("displayStyleOtran");
              }
              //x = 2 & 7 ()()(3)()()
              if(td[2].innerText==="X" && td[7].innerText==="X" && td[3].innerText==="X" && td[4].innerText==="O" && td[6].innerText==="O"  && td[1].innerText==="")
              {
               td[1].textContent="O";
               td[1].classList.add("displayStyleOtran");
              }
              //x = 2 & 7 ()()()(5)()
              if(td[2].innerText==="X" && td[7].innerText==="X" && td[5].innerText==="X" && td[4].innerText==="O" && td[6].innerText==="O"  && td[8].innerText==="")
              {
               td[8].textContent="O";
               td[8].classList.add("displayStyleOtran");
              }
              //x = 2 & 7 ()()()()(8)
              if(td[2].innerText==="X" && td[7].innerText==="X" && td[8].innerText==="X" && td[4].innerText==="O" && td[6].innerText==="O"  && td[5].innerText==="")
              {
               td[5].textContent="O";
               td[5].classList.add("displayStyleOtran");
              }
              //x = 2 & 8 (3)
              if(td[2].innerText==="X" && td[8].innerText==="X" && td[3].innerText==="X" && td[4].innerText==="O" && td[5].innerText==="O"  && td[6].innerText==="")
              {
               td[6].textContent="O";
               td[6].classList.add("displayStyleOtran");
              }
              //x = 2 & 8 (0 or 1 or 6 or 7) case 1
              if(td[2].innerText==="X" && td[8].innerText==="X" && (td[0].innerText==="X" && td[1].innerText==="" && td[6].innerText==="" && td[7].innerText==="") && td[4].innerText==="O" && td[5].innerText==="O"  && td[3].innerText==="")
              {
               td[3].textContent="O";
               td[3].classList.add("displayStyleOtran");
              }
              //x = 2 & 8 (0 or 1 or 6 or 7) case 2
              if(td[2].innerText==="X" && td[8].innerText==="X" && (td[0].innerText==="" && td[1].innerText==="X" && td[6].innerText==="" && td[7].innerText==="") && td[4].innerText==="O" && td[5].innerText==="O"  && td[3].innerText==="")
              {
               td[3].textContent="O";
               td[3].classList.add("displayStyleOtran");
              }
              //x = 2 & 8 (0 or 1 or 6 or 7) case 3
              if(td[2].innerText==="X" && td[8].innerText==="X" && (td[0].innerText==="" && td[1].innerText==="" && td[6].innerText==="X" && td[7].innerText==="") && td[4].innerText==="O" && td[5].innerText==="O"  && td[3].innerText==="")
              {
               td[3].textContent="O";
               td[3].classList.add("displayStyleOtran");
              }
              //x = 2 & 8 (0 or 1 or 6 or 7) case 4
              if(td[2].innerText==="X" && td[8].innerText==="X" && (td[0].innerText==="" && td[1].innerText==="" && td[6].innerText==="" && td[7].innerText==="X") && td[4].innerText==="O" && td[5].innerText==="O"  && td[3].innerText==="")
              {
               td[3].textContent="O";
               td[3].classList.add("displayStyleOtran");
              }

              //x = 3 & 4 (0)()()()()
              if(td[3].innerText==="X" && td[4].innerText==="X" && td[0].innerText==="X" && td[5].innerText==="O" && td[6].innerText==="O"  && td[8].innerText==="")
              {
               td[8].textContent="O";
               td[8].classList.add("displayStyleOtran");
              }
              //x = 3 & 4 ()(1)()()()
              if(td[3].innerText==="X" && td[4].innerText==="X" && td[1].innerText==="X" && td[5].innerText==="O" && td[6].innerText==="O"  && td[7].innerText==="")
              {
               td[7].textContent="O";
               td[7].classList.add("displayStyleOtran");
              }
              //x = 3 & 4 ()()(2)()()
              if(td[3].innerText==="X" && td[4].innerText==="X" && td[2].innerText==="X" && td[5].innerText==="O" && td[6].innerText==="O" && td[0].innerText==="" && td[1].innerText==="" && td[7].innerText==="" && td[8].innerText==="")
              {
               td[8].textContent="O";
               td[8].classList.add("displayStyleOtran");
              }
              //x = 3 & 4 ()()()(7)()
              if(td[3].innerText==="X" && td[4].innerText==="X" && td[7].innerText==="X" && td[5].innerText==="O" && td[6].innerText==="O"  && td[1].innerText==="")
              {
               td[1].textContent="O";
               td[1].classList.add("displayStyleOtran");
              }
              //x = 3 & 4 ()()()()(8)
              if(td[3].innerText==="X" && td[4].innerText==="X" && td[8].innerText==="X" && td[5].innerText==="O" && td[6].innerText==="O"  && td[0].innerText==="")
              {
               td[0].textContent="O";
               td[0].classList.add("displayStyleOtran");
              }
              //x = 3 & 5 (7)
              if(td[3].innerText==="X" && td[5].innerText==="X" && td[7].innerText==="X" && td[1].innerText==="O" && td[4].innerText==="O"  && td[2].innerText==="")
              {
               td[2].textContent="O";
               td[2].classList.add("displayStyleOtran");
              }
              //x = 3 & 5 (0 or 2 or 6 or 8) case 1
              if(td[3].innerText==="X" && td[5].innerText==="X" && (td[0].innerText==="X" && td[2].innerText==="" && td[6].innerText==="" && td[8].innerText==="") && td[1].innerText==="O" && td[4].innerText==="O"  && td[7].innerText==="")
              {
               td[7].textContent="O";
               td[7].classList.add("displayStyleOtran");
              }
              //x = 3 & 5 (0 or 2 or 6 or 8) case 2
              if(td[3].innerText==="X" && td[5].innerText==="X" && (td[0].innerText==="" && td[2].innerText==="X" && td[6].innerText==="" && td[8].innerText==="") && td[1].innerText==="O" && td[4].innerText==="O"  && td[7].innerText==="")
              {
               td[7].textContent="O";
               td[7].classList.add("displayStyleOtran");
              }
              //x = 3 & 5 (0 or 2 or 6 or 8) case 3
              if(td[3].innerText==="X" && td[5].innerText==="X" && (td[0].innerText==="" && td[2].innerText==="" && td[6].innerText==="X" && td[8].innerText==="") && td[1].innerText==="O" && td[4].innerText==="O"  && td[7].innerText==="")
              {
               td[7].textContent="O";
               td[7].classList.add("displayStyleOtran");
              }
              //x = 3 & 5 (0 or 2 or 6 or 8) case 4
              if(td[3].innerText==="X" && td[5].innerText==="X" && (td[0].innerText==="" && td[2].innerText==="" && td[6].innerText==="" && td[8].innerText==="X") && td[1].innerText==="O" && td[4].innerText==="O"  && td[7].innerText==="")
              {
               td[7].textContent="O";
               td[7].classList.add("displayStyleOtran");
              }
              //x = 3 & 6 (8)
              if(td[3].innerText==="X" && td[6].innerText==="X" && td[8].innerText==="X" && td[0].innerText==="O" && td[4].innerText==="O"  && td[7].innerText==="")
              {
               td[7].textContent="O";
               td[7].classList.add("displayStyleOtran");
              }
              //x = 3 & 6 (1 or 2 or 5 or 7) case 1
              if(td[3].innerText==="X" && td[6].innerText==="X" && (td[1].innerText==="X" && td[2].innerText==="" && td[5].innerText==="" && td[7].innerText==="") && td[0].innerText==="O" && td[4].innerText==="O"  && td[8].innerText==="")
              {
               td[8].textContent="O";
               td[8].classList.add("displayStyleOtran");
              }
              //x = 3 & 6 (1 or 2 or 5 or 7) case 2
              if(td[3].innerText==="X" && td[6].innerText==="X" && (td[1].innerText==="" && td[2].innerText==="X" && td[5].innerText==="" && td[7].innerText==="") && td[0].innerText==="O" && td[4].innerText==="O"  && td[8].innerText==="")
              {
               td[8].textContent="O";
               td[8].classList.add("displayStyleOtran");
              }
              //x = 3 & 6 (1 or 2 or 5 or 7) case 3
              if(td[3].innerText==="X" && td[6].innerText==="X" && (td[1].innerText==="" && td[2].innerText==="" && td[5].innerText==="X" && td[7].innerText==="") && td[0].innerText==="O" && td[4].innerText==="O"  && td[8].innerText==="")
              {
               td[8].textContent="O";
               td[8].classList.add("displayStyleOtran");
              }
              //x = 3 & 6 (1 or 2 or 5 or 7) case 4
              if(td[3].innerText==="X" && td[6].innerText==="X" && (td[1].innerText==="" && td[2].innerText==="" && td[5].innerText==="" && td[7].innerText==="X") && td[0].innerText==="O" && td[4].innerText==="O"  && td[8].innerText==="")
              {
               td[8].textContent="O";
               td[8].classList.add("displayStyleOtran");
              }
              //x = 3 & 7 (2)
              if(td[3].innerText==="X" && td[7].innerText==="X" && td[2].innerText==="X" && td[4].innerText==="O" && td[6].innerText==="O"  && td[1].innerText==="")
              {
               td[1].textContent="O";
               td[1].classList.add("displayStyleOtran");
              }
              //x = 3 & 7 (0 or 1 or 5 or 8) case 1
              if(td[3].innerText==="X" && td[7].innerText==="X" && (td[0].innerText==="X" && td[1].innerText==="" && td[5].innerText==="" && td[8].innerText==="") && td[4].innerText==="O" && td[6].innerText==="O"  && td[2].innerText==="")
              {
               td[2].textContent="O";
               td[2].classList.add("displayStyleOtran");
              }
              //x = 3 & 7 (0 or 1 or 5 or 8) case 2
              if(td[3].innerText==="X" && td[7].innerText==="X" && (td[0].innerText==="" && td[1].innerText==="X" && td[5].innerText==="" && td[8].innerText==="") && td[4].innerText==="O" && td[6].innerText==="O"  && td[2].innerText==="")
              {
               td[2].textContent="O";
               td[2].classList.add("displayStyleOtran");
              }
              //x = 3 & 7 (0 or 1 or 5 or 8) case 3
              if(td[3].innerText==="X" && td[7].innerText==="X" && (td[0].innerText==="" && td[1].innerText==="" && td[5].innerText==="X" && td[8].innerText==="") && td[4].innerText==="O" && td[6].innerText==="O"  && td[2].innerText==="")
              {
               td[2].textContent="O";
               td[2].classList.add("displayStyleOtran");
              }
              //x = 3 & 7 (0 or 1 or 5 or 8) case 4
              if(td[3].innerText==="X" && td[7].innerText==="X" && (td[0].innerText==="" && td[1].innerText==="" && td[5].innerText==="" && td[8].innerText==="X") && td[4].innerText==="O" && td[6].innerText==="O"  && td[2].innerText==="")
              {
               td[2].textContent="O";
               td[2].classList.add("displayStyleOtran");
              }
              //x = 3 & 8 (1)()()()()
              if(td[3].innerText==="X" && td[8].innerText==="X" && td[1].innerText==="X" && td[0].innerText==="O" && td[4].innerText==="O"  && td[7].innerText==="")
              {
               td[7].textContent="O";
               td[7].classList.add("displayStyleOtran");
              }
              //x = 3 & 8 ()(2)()()()
              if(td[3].innerText==="X" && td[8].innerText==="X" && td[2].innerText==="X" && td[0].innerText==="O" && td[4].innerText==="O"  && td[5].innerText==="")
              {
               td[5].textContent="O";
               td[5].classList.add("displayStyleOtran");
              }
              //x = 3 & 8 ()()(5)()()
              if(td[3].innerText==="X" && td[8].innerText==="X" && td[5].innerText==="X" && td[0].innerText==="O" && td[4].innerText==="O"  && td[2].innerText==="")
              {
               td[2].textContent="O";
               td[2].classList.add("displayStyleOtran");
              }
              //x = 3 & 8 ()()()(6)()
              if(td[3].innerText==="X" && td[8].innerText==="X" && td[6].innerText==="X" && td[0].innerText==="O" && td[4].innerText==="O"  && td[7].innerText==="")
              {
               td[7].textContent="O";
               td[7].classList.add("displayStyleOtran");
              }
              //x = 3 & 8 ()()()()(7)
              if(td[3].innerText==="X" && td[8].innerText==="X" && td[7].innerText==="X" && td[0].innerText==="O" && td[4].innerText==="O"  && td[6].innerText==="")
              {
               td[6].textContent="O";
               td[6].classList.add("displayStyleOtran");
              }

              //x = 4 & 5 (0)
              if(td[4].innerText==="X" && td[5].innerText==="X" && td[0].innerText==="X" && td[3].innerText==="O" && td[6].innerText==="O"  && td[8].innerText==="")
              {
               td[8].textContent="O";
               td[8].classList.add("displayStyleOtran");
              }
              //x = 4 & 5 (1 or 2 or 7 or 8) case 1
              if(td[4].innerText==="X" && td[5].innerText==="X" && (td[1].innerText==="X" && td[2].innerText==="" && td[7].innerText==="" && td[8].innerText==="") && td[3].innerText==="O" && td[6].innerText==="O"  && td[0].innerText==="")
              {
               td[0].textContent="O";
               td[0].classList.add("displayStyleOtran");
              }
              //x = 4 & 5 (1 or 2 or 7 or 8) case 2
              if(td[4].innerText==="X" && td[5].innerText==="X" && (td[1].innerText==="" && td[2].innerText==="X" && td[7].innerText==="" && td[8].innerText==="") && td[3].innerText==="O" && td[6].innerText==="O"  && td[0].innerText==="")
              {
               td[0].textContent="O";
               td[0].classList.add("displayStyleOtran");
              }
              //x = 4 & 5 (1 or 2 or 7 or 8) case 3
              if(td[4].innerText==="X" && td[5].innerText==="X" && (td[1].innerText==="" && td[2].innerText==="" && td[7].innerText==="X" && td[8].innerText==="") && td[3].innerText==="O" && td[6].innerText==="O"  && td[0].innerText==="")
              {
               td[0].textContent="O";
               td[0].classList.add("displayStyleOtran");
              }
              //x = 4 & 5 (1 or 2 or 7 or 8) case 4
              if(td[4].innerText==="X" && td[5].innerText==="X" && (td[1].innerText==="" && td[2].innerText==="" && td[7].innerText==="" && td[8].innerText==="X") && td[3].innerText==="O" && td[6].innerText==="O"  && td[0].innerText==="")
              {
               td[0].textContent="O";
               td[0].classList.add("displayStyleOtran");
              }
              //x = 4 & 7 (0)()()()()
              if(td[4].innerText==="X" && td[7].innerText==="X" && td[0].innerText==="X" && td[1].innerText==="O" && td[6].innerText==="O"  && td[8].innerText==="")
              {
               td[8].textContent="O";
               td[8].classList.add("displayStyleOtran");
              }
              //x = 4 & 7 ()(2)()()()
              if(td[4].innerText==="X" && td[7].innerText==="X" && td[2].innerText==="X" && td[1].innerText==="O" && td[6].innerText==="O"  && td[0].innerText==="")
              {
               td[0].textContent="O";
               td[0].classList.add("displayStyleOtran");
              }
              //x = 4 & 7 ()()(3)()()
              if(td[4].innerText==="X" && td[7].innerText==="X" && td[3].innerText==="X" && td[1].innerText==="O" && td[6].innerText==="O"  && td[5].innerText==="")
              {
               td[5].textContent="O";
               td[5].classList.add("displayStyleOtran");
              }
              //x = 4 & 7 ()()()(5)()
              if(td[4].innerText==="X" && td[7].innerText==="X" && td[5].innerText==="X" && td[1].innerText==="O" && td[6].innerText==="O"  && td[3].innerText==="")
              {
               td[3].textContent="O";
               td[3].classList.add("displayStyleOtran");
              }
              //x = 4 & 7 ()()()()(8)
              if(td[4].innerText==="X" && td[7].innerText==="X" && td[8].innerText==="X" && td[1].innerText==="O" && td[6].innerText==="O"  && td[0].innerText==="")
              {
               td[0].textContent="O";
               td[0].classList.add("displayStyleOtran");
              }
              //x = 4 & 8 (3)
              if(td[4].innerText==="X" && td[8].innerText==="X" && td[3].innerText==="X" && td[0].innerText==="O" && td[6].innerText==="O"  && td[5].innerText==="")
              {
               td[5].textContent="O";
               td[5].classList.add("displayStyleOtran");
              }
              //x = 4 & 8 (1 or 2 or 5 or 7) case 1
              if(td[4].innerText==="X" && td[8].innerText==="X" && (td[1].innerText==="X" && td[2].innerText==="" && td[5].innerText==="" && td[7].innerText==="") && td[0].innerText==="O" && td[6].innerText==="O"  && td[3].innerText==="")
              {
               td[3].textContent="O";
               td[3].classList.add("displayStyleOtran");
              }
              //x = 4 & 8 (1 or 2 or 5 or 7) case 2
              if(td[4].innerText==="X" && td[8].innerText==="X" && (td[1].innerText==="" && td[2].innerText==="X" && td[5].innerText==="" && td[7].innerText==="") && td[0].innerText==="O" && td[6].innerText==="O"  && td[3].innerText==="")
              {
               td[3].textContent="O";
               td[3].classList.add("displayStyleOtran");
              }
              //x = 4 & 8 (1 or 2 or 5 or 7) case 3
              if(td[4].innerText==="X" && td[8].innerText==="X" && (td[1].innerText==="" && td[2].innerText==="" && td[5].innerText==="X" && td[7].innerText==="") && td[0].innerText==="O" && td[6].innerText==="O"  && td[3].innerText==="")
              {
               td[3].textContent="O";
               td[3].classList.add("displayStyleOtran");
              }
              //x = 4 & 8 (1 or 2 or 5 or 7) case 4
              if(td[4].innerText==="X" && td[8].innerText==="X" && (td[1].innerText==="" && td[2].innerText==="" && td[5].innerText==="" && td[7].innerText==="X") && td[0].innerText==="O" && td[6].innerText==="O"  && td[3].innerText==="")
              {
               td[3].textContent="O";
               td[3].classList.add("displayStyleOtran");
              }

              //x = 5 & 6 (0)()()()()
              if(td[5].innerText==="X" && td[6].innerText==="X" && td[0].innerText==="X" && td[2].innerText==="O" && td[4].innerText==="O"  && td[3].innerText==="")
              {
               td[3].textContent="O";
               td[3].classList.add("displayStyleOtran");
              }
              //x = 5 & 6 ()(1)()()()
              if(td[5].innerText==="X" && td[6].innerText==="X" && td[1].innerText==="X" && td[2].innerText==="O" && td[4].innerText==="O"  && td[7].innerText==="")
              {
               td[7].textContent="O";
               td[7].classList.add("displayStyleOtran");
              }
              //x = 5 & 6 ()()(3)()()
              if(td[5].innerText==="X" && td[6].innerText==="X" && td[3].innerText==="X" && td[2].innerText==="O" && td[4].innerText==="O"  && td[0].innerText==="")
              {
               td[0].textContent="O";
               td[0].classList.add("displayStyleOtran");
              }
              //x = 5 & 6 ()()()(7)()
              if(td[5].innerText==="X" && td[6].innerText==="X" && td[7].innerText==="X" && td[2].innerText==="O" && td[4].innerText==="O"  && td[8].innerText==="")
              {
               td[8].textContent="O";
               td[8].classList.add("displayStyleOtran");
              }
              //x = 5 & 6 ()()()()(8)
              if(td[5].innerText==="X" && td[6].innerText==="X" && td[8].innerText==="X" && td[2].innerText==="O" && td[4].innerText==="O"  && td[7].innerText==="")
              {
               td[7].textContent="O";
               td[7].classList.add("displayStyleOtran");
              }
              //x = 5 & 7 (0)
              if(td[5].innerText==="X" && td[7].innerText==="X" && td[0].innerText==="X" && td[4].innerText==="O" && td[8].innerText==="O"  && td[1].innerText==="")
              {
               td[1].textContent="O";
               td[1].classList.add("displayStyleOtran");
              }
              //x = 5 & 7 (1 or 2 or 3 or 6) case 1
              if(td[5].innerText==="X" && td[7].innerText==="X" && (td[1].innerText==="X" && td[2].innerText==="" && td[3].innerText==="" && td[6].innerText==="") && td[4].innerText==="O" && td[8].innerText==="O"  && td[0].innerText==="")
              {
               td[0].textContent="O";
               td[0].classList.add("displayStyleOtran");
              }
              //x = 5 & 7 (1 or 2 or 3 or 6) case 2
              if(td[5].innerText==="X" && td[7].innerText==="X" && (td[1].innerText==="" && td[2].innerText==="X" && td[3].innerText==="" && td[6].innerText==="") && td[4].innerText==="O" && td[8].innerText==="O"  && td[0].innerText==="")
              {
               td[0].textContent="O";
               td[0].classList.add("displayStyleOtran");
              }
              //x = 5 & 7 (1 or 2 or 3 or 6) case 3
              if(td[5].innerText==="X" && td[7].innerText==="X" && (td[1].innerText==="" && td[2].innerText==="" && td[3].innerText==="X" && td[6].innerText==="") && td[4].innerText==="O" && td[8].innerText==="O"  && td[0].innerText==="")
              {
               td[0].textContent="O";
               td[0].classList.add("displayStyleOtran");
              }
              //x = 5 & 7 (1 or 2 or 3 or 6) case 4
              if(td[5].innerText==="X" && td[7].innerText==="X" && (td[1].innerText==="" && td[2].innerText==="" && td[3].innerText==="" && td[6].innerText==="X") && td[4].innerText==="O" && td[8].innerText==="O"  && td[0].innerText==="")
              {
               td[0].textContent="O";
               td[0].classList.add("displayStyleOtran");
              }
              //x = 5 & 8 (6)
              if(td[5].innerText==="X" && td[8].innerText==="X" && td[6].innerText==="X" && td[2].innerText==="O" && td[4].innerText==="O"  && td[7].innerText==="")
              {
               td[7].textContent="O";
               td[7].classList.add("displayStyleOtran");
              }
              //x = 5 & 8 (0 or 1 or 3 or 7) case 1
              if(td[5].innerText==="X" && td[8].innerText==="X" && (td[0].innerText==="X" && td[1].innerText==="" && td[3].innerText==="" && td[7].innerText==="") && td[2].innerText==="O" && td[4].innerText==="O"  && td[6].innerText==="")
              {
               td[6].textContent="O";
               td[6].classList.add("displayStyleOtran");
              }
              //x = 5 & 8 (0 or 1 or 3 or 7) case 2
              if(td[5].innerText==="X" && td[8].innerText==="X" && (td[0].innerText==="" && td[1].innerText==="X" && td[3].innerText==="" && td[7].innerText==="") && td[2].innerText==="O" && td[4].innerText==="O"  && td[6].innerText==="")
              {
               td[6].textContent="O";
               td[6].classList.add("displayStyleOtran");
              }
              //x = 5 & 8 (0 or 1 or 3 or 7) case 3
              if(td[5].innerText==="X" && td[8].innerText==="X" && (td[0].innerText==="" && td[1].innerText==="" && td[3].innerText==="X" && td[7].innerText==="") && td[2].innerText==="O" && td[4].innerText==="O"  && td[6].innerText==="")
              {
               td[6].textContent="O";
               td[6].classList.add("displayStyleOtran");
              }
              //x = 5 & 8 (0 or 1 or 3 or 7) case 4
              if(td[5].innerText==="X" && td[8].innerText==="X" && (td[0].innerText==="" && td[1].innerText==="" && td[3].innerText==="" && td[7].innerText==="X") && td[2].innerText==="O" && td[4].innerText==="O"  && td[6].innerText==="")
              {
               td[6].textContent="O";
               td[6].classList.add("displayStyleOtran");
              }

              //x = 6 & 7 (0)
              if(td[6].innerText==="X" && td[7].innerText==="X" && td[0].innerText==="X" && td[4].innerText==="O" && td[8].innerText==="O"  && td[3].innerText==="")
              {
               td[3].textContent="O";
               td[3].classList.add("displayStyleOtran");
              }
              //x = 6 & 7 (1 or 2 or 3 or 5) case 1
              if(td[6].innerText==="X" && td[7].innerText==="X" && (td[1].innerText==="X" && td[2].innerText==="" && td[3].innerText==="" && td[5].innerText==="") && td[4].innerText==="O" && td[8].innerText==="O"  && td[0].innerText==="")
              {
               td[0].textContent="O";
               td[0].classList.add("displayStyleOtran");
              }
              //x = 6 & 7 (1 or 2 or 3 or 5) case 2
              if(td[6].innerText==="X" && td[7].innerText==="X" && (td[1].innerText==="" && td[2].innerText==="X" && td[3].innerText==="" && td[5].innerText==="") && td[4].innerText==="O" && td[8].innerText==="O"  && td[0].innerText==="")
              {
               td[0].textContent="O";
               td[0].classList.add("displayStyleOtran");
              }
              //x = 6 & 7 (1 or 2 or 3 or 5) case 3
              if(td[6].innerText==="X" && td[7].innerText==="X" && (td[1].innerText==="" && td[2].innerText==="" && td[3].innerText==="X" && td[5].innerText==="") && td[4].innerText==="O" && td[8].innerText==="O"  && td[0].innerText==="")
              {
               td[0].textContent="O";
               td[0].classList.add("displayStyleOtran");
              }
              //x = 6 & 7 (1 or 2 or 3 or 5) case 4
              if(td[6].innerText==="X" && td[7].innerText==="X" && (td[1].innerText==="" && td[2].innerText==="" && td[3].innerText==="" && td[5].innerText==="X") && td[4].innerText==="O" && td[8].innerText==="O"  && td[0].innerText==="")
              {
               td[0].textContent="O";
               td[0].classList.add("displayStyleOtran");
              }
              //x = 6 & 8 (1)
              if(td[6].innerText==="X" && td[8].innerText==="X" && td[1].innerText==="X" && td[4].innerText==="O" && td[7].innerText==="O"  && td[0].innerText==="" && td[2].innerText==="" && td[3].innerText==="" && td[5].innerText==="")
              {
               td[2].textContent="O";
               td[2].classList.add("displayStyleOtran");
              }
              //x = 6 & 8 (0 or 2 or 3 or 5) case 1
              if(td[6].innerText==="X" && td[8].innerText==="X" && (td[0].innerText==="X" && td[2].innerText==="" && td[3].innerText==="" && td[5].innerText==="") && td[4].innerText==="O" && td[7].innerText==="O"  && td[1].innerText==="")
              {
               td[1].textContent="O";
               td[1].classList.add("displayStyleOtran");
              }
              //x = 6 & 8 (0 or 2 or 3 or 5) case 2
              if(td[6].innerText==="X" && td[8].innerText==="X" && (td[0].innerText==="" && td[2].innerText==="X" && td[3].innerText==="" && td[5].innerText==="") && td[4].innerText==="O" && td[7].innerText==="O"  && td[1].innerText==="")
              {
               td[1].textContent="O";
               td[1].classList.add("displayStyleOtran");
              }
              //x = 6 & 8 (0 or 2 or 3 or 5) case 3
              if(td[6].innerText==="X" && td[8].innerText==="X" && (td[0].innerText==="" && td[2].innerText==="" && td[3].innerText==="X" && td[5].innerText==="") && td[4].innerText==="O" && td[7].innerText==="O"  && td[1].innerText==="")
              {
               td[1].textContent="O";
               td[1].classList.add("displayStyleOtran");
              }
              //x = 6 & 8 (0 or 2 or 3 or 5) case 4
              if(td[6].innerText==="X" && td[8].innerText==="X" && (td[0].innerText==="" && td[2].innerText==="" && td[3].innerText==="" && td[5].innerText==="X") && td[4].innerText==="O" && td[7].innerText==="O"  && td[1].innerText==="")
              {
               td[1].textContent="O";
               td[1].classList.add("displayStyleOtran");
              }

              //x = 7 & 8 (2)
              if(td[7].innerText==="X" && td[8].innerText==="X" && td[2].innerText==="X" && td[4].innerText==="O" && td[6].innerText==="O"  && td[5].innerText==="")
              {
               td[5].textContent="O";
               td[5].classList.add("displayStyleOtran");
              }
              //x = 7 & 8 (0 or 1 or 3 or 5) case 1
              if(td[7].innerText==="X" && td[8].innerText==="X" && (td[0].innerText==="X" && td[1].innerText==="" && td[3].innerText==="" && td[5].innerText==="") && td[4].innerText==="O" && td[6].innerText==="O"  && td[2].innerText==="")
              {
               td[2].textContent="O";
               td[2].classList.add("displayStyleOtran");
              }
              //x = 7 & 8 (0 or 1 or 3 or 5) case 2
              if(td[7].innerText==="X" && td[8].innerText==="X" && (td[0].innerText==="" && td[1].innerText==="X" && td[3].innerText==="" && td[5].innerText==="") && td[4].innerText==="O" && td[6].innerText==="O"  && td[2].innerText==="")
              {
               td[2].textContent="O";
               td[2].classList.add("displayStyleOtran");
              }
              //x = 7 & 8 (0 or 1 or 3 or 5) case 3
              if(td[7].innerText==="X" && td[8].innerText==="X" && (td[0].innerText==="" && td[1].innerText==="" && td[3].innerText==="X" && td[5].innerText==="") && td[4].innerText==="O" && td[6].innerText==="O"  && td[2].innerText==="")
              {
               td[2].textContent="O";
               td[2].classList.add("displayStyleOtran");
              }
              //x = 7 & 8 (0 or 1 or 3 or 5) case 4
              if(td[7].innerText==="X" && td[8].innerText==="X" && (td[0].innerText==="" && td[1].innerText==="" && td[3].innerText==="" && td[5].innerText==="X") && td[4].innerText==="O" && td[6].innerText==="O"  && td[2].innerText==="")
              {
               td[2].textContent="O";
               td[2].classList.add("displayStyleOtran");
              }

            }

            // counterX = 4
            if(counterX===4)
            {
                // x1=0, x2=1, x3=6 || o1=2, o2=3, o3=4 || s1=5, s2=7, s3=8 || i1=8, i2=5, i3=5 , follows this format
              impossibleCounterX4(0, 1, 6, 2, 3, 4, 5, 7, 8, 8, 5, 5)
              impossibleCounterX4(0, 2, 7, 1, 4, 8, 3, 5, 6, 6, 6, 3)
              impossibleCounterX4(0, 3, 2, 1, 4, 6, 5, 7, 8, 8, 8, 5)
              impossibleCounterX4(0, 4, 7, 1, 6, 8, 2, 3, 5, 3, 5, 3)
              impossibleCounterX4(0, 5, 1, 2, 4, 8, 3, 6, 7, 6, 3, 6)
              impossibleCounterX4(0, 5, 2, 1, 4, 8, 3, 6, 7, 7, 7, 6)
              impossibleCounterX4(0, 5, 3, 4, 6, 8, 1, 2, 7, 7, 7, 1)
              impossibleCounterX4(0, 5, 6, 3, 4, 8, 1, 2, 7, 2, 1, 2)
              impossibleCounterX4(0, 5, 7, 1, 4, 8, 2, 3, 6, 6, 6, 3)
              impossibleCounterX4(0, 6, 5, 3, 4, 8, 1, 2, 7, 2, 1, 2)
              impossibleCounterX4(0, 7, 1, 2, 4, 8, 3, 5, 6, 5, 3, 5)
              impossibleCounterX4(0, 7, 2, 1, 4, 8, 3, 5, 6, 6, 6, 3)
              impossibleCounterX4(0, 7, 3, 4, 6, 8, 1, 2, 5, 2, 1, 1)
              impossibleCounterX4(0, 7, 5, 1, 4, 8, 2, 3, 6, 6, 6, 3)
              impossibleCounterX4(0, 7, 6, 3, 4, 8, 1, 2, 5, 5, 5, 2)
              impossibleCounterX4(0, 8, 3, 4, 5, 6, 1, 2, 7, 2, 1, 2)

              impossibleCounterX4(1, 2, 8, 0, 4, 5, 3, 6, 7, 6, 3, 3)
              impossibleCounterX4(1, 3, 8, 0, 4, 7, 2, 5, 6, 5, 2, 2)
              impossibleCounterX4(1, 4, 8, 0, 6, 7, 2, 3, 5, 3, 5, 3)
              impossibleCounterX4(1, 5, 6, 2, 4, 7, 0, 3, 8, 3, 0, 0)
              impossibleCounterX4(1, 6, 0, 2, 3, 4, 5, 7, 8, 8, 5, 5)
              impossibleCounterX4(1, 6, 3, 0, 2, 4, 5, 7, 8, 7, 8, 7)
              impossibleCounterX4(1, 6, 5, 2, 4, 7, 0, 3, 8, 3, 0, 0)
              impossibleCounterX4(1, 6, 7, 2, 4, 8, 0, 3, 5, 5, 5, 3)
              impossibleCounterX4(1, 6, 8, 2, 4, 7, 0, 3, 5, 3, 0, 0)
              impossibleCounterX4(1, 7, 5, 3, 4, 6, 0, 2, 8, 2, 0, 0)
              impossibleCounterX4(1, 8, 2, 0, 4, 5, 3, 6, 7, 6, 3, 3)
              impossibleCounterX4(1, 8, 3, 0, 4, 7, 2, 5, 6, 5, 2, 2)
              impossibleCounterX4(1, 8, 5, 0, 2, 4, 3, 6, 7, 6, 7, 6)
              impossibleCounterX4(1, 8, 6, 0, 4, 7, 2, 3, 5, 5, 2, 2)
              impossibleCounterX4(1, 8, 7, 0, 4, 6, 2, 3, 5, 3, 5, 3)

              impossibleCounterX4(2, 3, 0, 1, 4, 6, 5, 7, 8, 7, 8, 7)
              impossibleCounterX4(2, 3, 1, 0, 4, 6, 5, 7, 8, 8, 8, 5)
              impossibleCounterX4(2, 3, 5, 4, 6, 8, 0, 1, 7, 1, 0, 0)
              impossibleCounterX4(2, 3, 7, 1, 4, 6, 0, 5, 8, 8, 8, 5)
              impossibleCounterX4(2, 3, 8, 4, 5, 6, 0, 1, 7, 1, 0, 0)
              impossibleCounterX4(2, 4, 3, 0, 5, 6, 1, 7, 8, 7, 1, 1)
              impossibleCounterX4(2, 5, 0, 1, 4, 8, 3, 6, 7, 7, 7, 6)
              impossibleCounterX4(2, 6, 5, 3, 4, 8, 0, 1, 7, 1, 0, 1)
              impossibleCounterX4(2, 7, 0, 1, 4, 6, 3, 5, 8, 8, 8, 5)
              impossibleCounterX4(2, 7, 1, 0, 4, 6, 3, 5, 8, 5, 3, 3)
              impossibleCounterX4(2, 7, 3, 1, 4, 6, 0, 5, 8, 8, 5, 8)
              impossibleCounterX4(2, 7, 5, 4, 6, 8, 0, 1, 3, 1, 0, 0)
              impossibleCounterX4(2, 7, 8, 4, 5, 6, 0, 1, 3, 3, 3, 0)
              impossibleCounterX4(2, 8, 3, 4, 5, 6, 0, 1, 7, 1, 0, 0)

              impossibleCounterX4(3, 4, 0, 5, 6, 8, 1, 2, 7, 2, 1, 2)
              impossibleCounterX4(3, 4, 1, 5, 6, 7, 0, 2, 8, 2, 0, 0)
              impossibleCounterX4(3, 4, 2, 5, 6, 8, 0, 1, 7, 7, 7, 1)
              impossibleCounterX4(3, 4, 7, 1, 5, 6, 0, 2, 8, 8, 0, 0)
              impossibleCounterX4(3, 4, 8, 0, 5, 6, 1, 2, 7, 7, 7, 1)
              impossibleCounterX4(3, 5, 7, 1, 2, 4, 0, 6, 8, 6, 0, 0)
              impossibleCounterX4(3, 6, 8, 0, 4, 7, 1, 2, 5, 2, 1, 1)
              impossibleCounterX4(3, 7, 2, 1, 4, 6, 0, 5, 8, 8, 8, 5)
              impossibleCounterX4(3, 8, 1, 0, 4, 7, 2, 5, 6, 5, 2, 2)
              impossibleCounterX4(3, 8, 2, 0, 4, 5, 1, 6, 7, 6, 7, 6)
              impossibleCounterX4(3, 8, 5, 0, 2, 4, 1, 6, 7, 6, 7, 6)
              impossibleCounterX4(3, 8, 6, 0, 4, 7, 1, 2, 5, 2, 1, 1)
              impossibleCounterX4(3, 8, 7, 0, 4, 6, 1, 2, 5, 2, 5, 2)

              impossibleCounterX4(4, 5, 0, 3, 6, 8, 1, 2, 7, 7, 7, 1)
              impossibleCounterX4(4, 7, 0, 1, 6, 8, 2, 3, 5, 3, 5, 3)
              impossibleCounterX4(4, 7, 2, 0, 1, 6, 3, 5, 8, 5, 3, 3)
              impossibleCounterX4(4, 7, 3, 1, 5, 6, 0, 2, 8, 8, 0, 0)
              impossibleCounterX4(4, 7, 5, 1, 3, 6, 0, 2, 8, 8, 0, 0)
              impossibleCounterX4(4, 7, 8, 0, 1, 6, 2, 3, 5, 5, 2, 2)
              impossibleCounterX4(4, 8, 3, 0, 5, 6, 1, 2, 7, 7, 7, 1)

              impossibleCounterX4(5, 6, 0, 2, 3, 4, 1, 7, 8, 8, 8, 7)
              impossibleCounterX4(5, 6, 1, 2, 4, 7, 0, 3, 8, 3, 0, 0)
              impossibleCounterX4(5, 6, 3, 0, 2, 4, 1, 7, 8, 7, 1, 1)
              impossibleCounterX4(5, 6, 7, 2, 4, 8, 0, 1, 3, 3, 0, 0)
              impossibleCounterX4(5, 6, 8, 2, 4, 7, 0, 1, 3, 1, 0, 1)
              impossibleCounterX4(5, 7, 0, 1, 4, 8, 2, 3, 6, 6, 6, 3)
              impossibleCounterX4(5, 8, 6, 2, 4, 7, 0, 1, 3, 1, 0, 1)

              impossibleCounterX4(6, 7, 0, 3, 4, 8, 1, 2, 5, 5, 5, 2)
              impossibleCounterX4(6, 8, 1, 2, 4, 7, 0, 3, 5, 3, 0, 0)

              impossibleCounterX4(7, 8, 2, 4, 5, 6, 0, 1, 3, 3, 3, 0)
            }    

            //counterX = 5
            if(counterX === 5)
            {
                draw();
            }
           
          }
        });
      };
  });

   //IMPOSSIBLE LEVEL PLAYER O
   playerO.addEventListener("click",function(){
    td[3].textContent = "X";
    td[3].classList.add("displayStyleXtran");
   stopX = true;
   // stopGame1 = false;
   o1.style.color = "#017aff";
   playerO.style.background = "white";
   x1.style.color = "white";
   playerX.style.background = "#017aff";

      for(var i=0; i<td.length; i++){
        td[i].addEventListener("click",function(){
          if(!stopO===true){
            counterO++;
            this.textContent = "O";
            this.classList.add("displayStyleO");

            //Winning Logic
            if(!stopO === true){
              setInterval(function(){
              //HORIZONTAL Xs
              if(td[0].innerText==="X" && td[1].innerText==="X" && td[2].innerText==="X"){
                xWins();
                td[0].classList.add("cutting");
                td[1].classList.add("cutting");
                td[2].classList.add("cutting");
                stopO = true;
              }
             if(td[3].innerText==="X" && td[4].innerText==="X" && td[5].innerText==="X"){
                xWins();
                td[3].classList.add("cutting");
                td[4].classList.add("cutting");
                td[5].classList.add("cutting");
                stopO = true;
              }
              if(td[6].innerText==="X" && td[7].innerText==="X" && td[8].innerText==="X"){
                xWins();
                td[6].classList.add("cutting");
                td[7].classList.add("cutting");
                td[8].classList.add("cutting");
                stopO = true;
              }
              //VERTICAL Xs
              if(td[0].innerText==="X" && td[3].innerText==="X" && td[6].innerText==="X"){
                xWins();
                td[0].classList.add("cutting");
                td[3].classList.add("cutting");
                td[6].classList.add("cutting");
                stopO = true;
              }
              if(td[1].innerText==="X" && td[4].innerText==="X" && td[7].innerText==="X"){
                xWins();
                td[1].classList.add("cutting");
                td[4].classList.add("cutting");
                td[7].classList.add("cutting");
                stopO = true;
              }
              if(td[2].innerText==="X" && td[5].innerText==="X" && td[8].innerText==="X"){
                xWins();
                td[2].classList.add("cutting");
                td[5].classList.add("cutting");
                td[8].classList.add("cutting");
                stopO = true;
              }
              //CROSS Xs
              if(td[0].innerText==="X" && td[4].innerText==="X" && td[8].innerText==="X"){
                xWins();
                td[0].classList.add("cutting");
                td[4].classList.add("cutting");
                td[8].classList.add("cutting");
                stopO = true;
              }
              if(td[2].innerText==="X" && td[4].innerText==="X" && td[6].innerText==="X"){
                xWins();
                td[2].classList.add("cutting");
                td[4].classList.add("cutting");
                td[6].classList.add("cutting");
                stopO = true;
              }
             },100);
            }
            
            //FILLING Xs systematically

            //counterO = 1
            if(counterO===1)
            {
              impossibleCounterO1(0, 1)
              impossibleCounterO1(1, 4)
              impossibleCounterO1(2, 0)
              impossibleCounterO1(4, 8)
              impossibleCounterO1(5, 2)
              impossibleCounterO1(6, 7)
              impossibleCounterO1(7, 4)
              impossibleCounterO1(8, 6)
            }
            
            //counterO = 2
            if(counterO===2)
            {
                impossibleCounterO2(0, 2, 4, 4, 5, 6, 7, 8)
                impossibleCounterO2(0, 4, 8, 2, 5, 6, 7, 8)
                impossibleCounterO2(0, 5, 8, 2, 4, 6, 7, 8)
                impossibleCounterO2(0, 6, 4, 2, 4, 5, 7, 8)
                impossibleCounterO2(0, 7, 8, 2, 4, 5, 6, 8)
                impossibleCounterO2(0, 8, 4, 2, 4, 5, 6, 7)

                impossibleCounterO2(1, 0, 5, 2, 5, 6, 7, 8)
                impossibleCounterO2(1, 2, 5, 0, 5, 6, 7, 8)
                impossibleCounterO2(1, 5, 0, 0, 2, 6, 7, 8)
                impossibleCounterO2(1, 6, 5, 0, 2, 5, 7, 8)
                impossibleCounterO2(1, 7, 5, 0, 2, 6, 5, 8)
                impossibleCounterO2(1, 8, 5, 0, 2, 5, 6, 7)

                impossibleCounterO2(2, 1, 6, 4, 5, 6, 7, 8)
                impossibleCounterO2(2, 4, 6, 1, 5, 6, 7, 8)
                impossibleCounterO2(2, 5, 6, 1, 4, 6, 7, 8)
                impossibleCounterO2(2, 6, 4, 1, 4, 5, 7, 8)
                impossibleCounterO2(2, 7, 6, 1, 4, 5, 6, 8)
                impossibleCounterO2(2, 8, 6, 1, 4, 5, 6, 7)

                impossibleCounterO2(4, 0, 7, 1, 2, 5, 6, 7)
                impossibleCounterO2(4, 1, 7, 0, 2, 5, 6, 7)
                impossibleCounterO2(4, 2, 6, 0, 1, 5, 6, 7)
                impossibleCounterO2(4, 5, 6, 0, 1, 2, 6, 7)
                impossibleCounterO2(4, 6, 2, 0, 1, 2, 5, 7)
                impossibleCounterO2(4, 7, 1, 0, 1, 2, 5, 6)

                impossibleCounterO2(5, 0, 4, 1, 4, 6, 7, 8)
                impossibleCounterO2(5, 1, 6, 0, 4, 6, 7, 8)
                impossibleCounterO2(5, 4, 0, 0, 1, 6, 7, 8)
                impossibleCounterO2(5, 6, 1, 0, 1, 4, 7, 8)
                impossibleCounterO2(5, 7, 0, 0, 1, 4, 6, 8)
                impossibleCounterO2(5, 8, 0, 0, 1, 4, 6, 7)

                impossibleCounterO2(6, 0, 4, 1, 2, 4, 5, 8)
                impossibleCounterO2(6, 1, 2, 0, 2, 4, 5, 8)
                impossibleCounterO2(6, 2, 4, 0, 1, 4, 5, 8)
                impossibleCounterO2(6, 4, 2, 0, 1, 2, 5, 8)
                impossibleCounterO2(6, 5, 2, 0, 1, 2, 4, 8)
                impossibleCounterO2(6, 8, 4, 0, 1, 2, 4, 5)

                impossibleCounterO2(7, 0, 5, 1, 2, 5, 6, 8)
                impossibleCounterO2(7, 1, 5, 0, 2, 5, 6, 8)
                impossibleCounterO2(7, 2, 5, 0, 1, 5, 6, 8)
                impossibleCounterO2(7, 5, 6, 0, 1, 2, 6, 8)
                impossibleCounterO2(7, 6, 5, 0, 1, 2, 5, 8)
                impossibleCounterO2(7, 8, 5, 0, 1, 2, 5, 6)

                impossibleCounterO2(8, 0, 4, 1, 2, 4, 5, 7)
                impossibleCounterO2(8, 1, 0, 0, 2, 4, 5, 7)
                impossibleCounterO2(8, 2, 0, 0, 1, 4, 5, 7)
                impossibleCounterO2(8, 4, 0, 0, 1, 2, 5, 7)
                impossibleCounterO2(8, 5, 0, 0, 1, 2, 4, 7)
                impossibleCounterO2(8, 7, 0, 0, 1, 2, 4, 5)
            }

            //counterO = 3
            if(counterO===3)
            {
                impossibleCounterO3(0, 1, 2)
                impossibleCounterO3(0, 2, 1)
                impossibleCounterO3(1, 2, 0)
                impossibleCounterO3(3, 4, 5)
                impossibleCounterO3(3, 5, 4)
                impossibleCounterO3(4, 5, 3)
                impossibleCounterO3(6, 7, 8)
                impossibleCounterO3(6, 8, 7)
                impossibleCounterO3(7, 8, 6)
                impossibleCounterO3(0, 3, 6)
                impossibleCounterO3(0, 6, 3)
                impossibleCounterO3(3, 6, 0)
                impossibleCounterO3(1, 4, 7)
                impossibleCounterO3(1, 7, 4)
                impossibleCounterO3(4, 7, 1)
                impossibleCounterO3(2, 5, 8)
                impossibleCounterO3(2, 8, 5)
                impossibleCounterO3(5, 8, 2)
                impossibleCounterO3(0, 4, 8)
                impossibleCounterO3(0, 8, 4)
                impossibleCounterO3(4, 8, 0)
                impossibleCounterO3(2, 4, 6)
                impossibleCounterO3(2, 6, 4)
                impossibleCounterO3(4, 6, 2)
              
              if( !(td[3].innerText==="X" && td[7].innerText==="X" && td[8].innerText==="X" && td[1].innerText==="O" && td[4].innerText==="O") )
              {
                impossibleCounterO3extra(0, 1, 2)
              }
              if( !(td[3].innerText==="X" && td[7].innerText==="X" && td[8].innerText==="X" && td[0].innerText==="O" && td[4].innerText==="O") )
              {
                impossibleCounterO3extra(0, 2, 1) 
              }
                impossibleCounterO3extra(1, 2, 0)
                impossibleCounterO3extra(3, 4, 5)
                impossibleCounterO3extra(3, 5, 4)
                impossibleCounterO3extra(4, 5, 3)
                impossibleCounterO3extra(6, 7, 8)
                impossibleCounterO3extra(6, 8, 7)
                impossibleCounterO3extra(7, 8, 6)
                impossibleCounterO3extra(0, 3, 6)
                impossibleCounterO3extra(0, 6, 3)
              impossibleCounterO3extra(3, 6, 0)
              if( !(td[2].innerText==="X" && td[3].innerText==="X" && td[8].innerText==="X" && td[4].innerText==="O" && td[6].innerText==="O") && !(td[3].innerText==="X" && td[6].innerText==="X" && td[8].innerText==="X" && td[2].innerText==="O" && td[4].innerText==="O") )
              {
                impossibleCounterO3extra(1, 4, 7)
              }
              impossibleCounterO3extra(1, 7, 4)
              if( !(td[2].innerText==="X" && td[3].innerText==="X" && td[8].innerText==="X" && td[4].innerText==="O" && td[6].innerText==="O") && !(td[3].innerText==="X" && td[6].innerText==="X" && td[8].innerText==="X" && td[2].innerText==="O" && td[4].innerText==="O") && !(td[3].innerText==="X" && td[6].innerText==="X" && td[8].innerText==="X" && td[4].innerText==="O" && td[5].innerText==="O") )
              {
                impossibleCounterO3extra(4, 7, 1)
              }
                impossibleCounterO3extra(2, 5, 8)
                impossibleCounterO3extra(2, 8, 5)
                impossibleCounterO3extra(5, 8, 2)
                impossibleCounterO3extra(0, 4, 8)
                impossibleCounterO3extra(0, 8, 4)
                impossibleCounterO3extra(4, 8, 0)
                impossibleCounterO3extra(2, 4, 6)
                impossibleCounterO3extra(2, 6, 4)
                impossibleCounterO3extra(4, 6, 2)

                impossibleCounterO3some(4, 6, 0, 5, 1, 5, 7)
                impossibleCounterO3some(4, 6, 1, 5, 0, 5, 7)
                impossibleCounterO3some(4, 6, 5, 7, 0, 1, 7)
                impossibleCounterO3some(4, 6, 7, 5, 0, 1, 5)
            }

            //counterO = 4
            if(counterO===4)
            {
                impossibleCounterO4(0)
                impossibleCounterO4(1)
                impossibleCounterO4(2)
                impossibleCounterO4(3)
                impossibleCounterO4(4)
                impossibleCounterO4(5)
                impossibleCounterO4(6)
                impossibleCounterO4(7)
                impossibleCounterO4(8)
                draw();
            }

          }
        });
      };
  });
});

  //PLAY AGAIN
  playAgain.addEventListener("click",reset);