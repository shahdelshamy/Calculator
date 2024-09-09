var numberContainer=document.getElementsByClassName("number-container")[0];
var operatorContainer2=document.getElementsByClassName("operator-container2")[0];
var operatorContainer1=document.getElementsByClassName("operator-container1")[0];


// var input=document.getElementsByClassName("input")[0];
// var result=document.getElementsByClassName("result")[0];

var input=document.querySelector(".input input[type='text']");
 var result=document.querySelector(".result input[type='text");

let currentInput='';
let currentResult='';

createButton('=','operator',operatorContainer1);
createButton('log','operator',operatorContainer1);
createButton('-/+','operator',operatorContainer1);
createButton('^2','operator',operatorContainer1);


for(var i=1;i<=9;i++){
    createButton(i,'number',numberContainer);
}

createButton('Clear','number',numberContainer);
createButton('0','number',numberContainer);
createButton('.','number',numberContainer);

createButton('+','operator',operatorContainer2);
createButton('-','operator',operatorContainer2);
createButton('*','operator',operatorContainer2);
createButton('/','operator',operatorContainer2);


var bottons=document.getElementsByClassName("button");
console.log(bottons);                   //HTML Collection[] not itterable so i can't use for each to loop on it 
Array.from(bottons).forEach(element => {
    console.log(element);        //
    element.addEventListener('click',function(event) {
        let value= event.target.textContent;
        if (!isNaN(value) || value == '.') {
            currentInput+=value;
            input.value=currentInput;
            console.log(currentInput);
        }else if(value=='Clear'){
            currentInput='';
            currentResult='';
            input.value='';
            result.value='';
        }else if(value==='='){
            currentResult=eval(currentInput);
            result.value=currentResult;
        }else if(value=='-/+'){
            if(currentInput!=''){
                currentInput=eval(currentInput)*-1;
                //currentInput= currentInput.charAt(0)==='-' ? currentInput.slice(1) : '-'+currentInput;
                input.value=currentInput;
            }
        }else if(value==='log') {
            if(currentInput!=''){
                currentInput = Math.log10(parseFloat(currentInput)).toFixed(3).toString();
                 input.value = currentInput;
            }
        }else if(value==='^2') {
            if(currentInput!=''){
                currentInput=currentInput*currentInput;
                input.value=currentInput;
            }
        }else{
            if(currentInput!=''){
                currentInput+=value;
                input.value=currentInput;
            }
        }

    });
});




function createButton(content,className,parent){
    var buttonElement=document.createElement('button');
    buttonElement.textContent=content;
    buttonElement.classList.add(className,'button');
    parent.appendChild(buttonElement);
}









