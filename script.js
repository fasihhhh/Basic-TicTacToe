let divs = [div0,div1,div2,div3,div4,div5,div6,div7,div8]
let display = document.getElementsByClassName('display')[0]
let resetBtn = document.getElementsByTagName('button')[0]
let main = document.getElementsByClassName('main')[0]
let turnCheck = false;
let count =0;
divs.forEach(eachbox => {
    let DisplayingInnerText = () => {
        if(turnCheck==false)
        {
          eachbox.innerHTML = 'X' ;
          turnCheck = true;
        }
        else if(turnCheck==true){
            eachbox.innerHTML = 'O' ;
            turnCheck=false;
        }
        count++;
        checkWiner();
        eachbox.style.pointerEvents = "none";
    }
    eachbox.addEventListener('click',DisplayingInnerText)
});

let winningPatterns = [
    [div0, div1, div2], 
    [div3, div4, div5], 
    [div6, div7, div8], 
    [div0, div3, div6], 
    [div1, div4, div7], 
    [div2, div5, div8], 
    [div0, div4, div8],
    [div2, div4, div6]  
];

let checkWiner = () => {
   for (const patterns of winningPatterns) {
    if(count<=7){
    if(patterns[0].innerHTML == 'O' && patterns[1].innerHTML =='O' && patterns[2].innerHTML == 'O'){
        display.innerHTML = "'O' IS WINNER";
        patterns[0].style.backgroundColor ="rgba(5, 5, 56, 0.962)";
        patterns[1].style.backgroundColor ="rgba(5, 5, 56, 0.962)";
        patterns[2].style.backgroundColor ="rgba(5, 5, 56, 0.962)";
        patterns[0].style.color ="white";
        patterns[1].style.color ="white";
        patterns[2].style.color ="white";
        main.style.pointerEvents = "none";
        // resetFuntion();
    }
    else if(patterns[0].innerHTML == 'X' && patterns[1].innerHTML =='X' && patterns[2].innerHTML == 'X'){
        display.innerHTML = "'X' IS WINNER";
        // for (const i of patterns) {
        //     patterns[i].style.backgroundColor ="rgba(5, 5, 56, 0.962)";
        //     patterns[i].style.color ="white";
        //     patterns[i].style.pointerEvents = "none";

        // }
        patterns[0].style.backgroundColor ="rgba(5, 5, 56, 0.962)";
        patterns[1].style.backgroundColor ="rgba(5, 5, 56, 0.962)";
        patterns[2].style.backgroundColor ="rgba(5, 5, 56, 0.962)";
        patterns[0].style.color ="white";
        patterns[1].style.color ="white";
        patterns[2].style.color ="white";
        patterns[0].style.pointerEvents = "none";
        patterns[1].style.pointerEvents = "none";
        patterns[2].style.pointerEvents = "none";
        main.style.pointerEvents = "none";

        // resetFuntion();
    }
}
else{
    display.innerHTML = "DRAW";
}

   }
}
let resetFuntion = () => {
    divs.forEach(eachbox => {
        // eachbox.innerHTML = '';
        // display.innerHTML = '';
        // eachbox.style.backgroundColor = "rgba(11, 62, 125, 0.522)";
        window.location.reload();
    });
    // main.style.pointerEvents = "auto";
}

// let stylingAfterWinning = () => {
    
// }
resetBtn.addEventListener('click',resetFuntion)