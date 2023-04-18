let btnlist = document.querySelectorAll(".grid button");
let input = document.getElementById("input");
let clear = document.getElementById("clear");

function onclickclear(){
    input.value = "";
}
clear.addEventListener("click" , onclickclear);

for(let i=0;i<btnlist.length;i++){
    btnlist[i].addEventListener("click" , btnclick);
}


function btnclick(btn){
    let target = btn.target;
    let currentvalue = target.innerText;
    let enteredvalue = input.value;

    const operator = ["+" , "-" , "*", "/"];
    let lastkey = enteredvalue[enteredvalue.length-1];

    if(operator.includes(lastkey) && operator.includes(currentvalue)){
        let newexp = enteredvalue.slice(0, enteredvalue.length-1) + currentvalue;
        input.value = newexp;
    }
    else if(currentvalue === "="){
        input.value = eval(enteredvalue);
    }
    else if(currentvalue === "=" && enteredvalue === ""){
        alert("enter something");
        return;
    }
    else{
        input.value = input.value+currentvalue;
    }
}