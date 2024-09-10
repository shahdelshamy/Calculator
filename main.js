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
//console.log(bottons);                   //HTML Collection[] not itterable so i can't use for each to loop on it 
Array.from(bottons).forEach(element => {
    //console.log(element);        
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


//////////////////////////////////////////////////////////////


toCamelCase('shahd-abdelnabyElshamy');
toCamelCase('shahd_elshamy');

toSnakeCase('shahd-abdelnaby Elshamy');
toSnakeCase('shahdElshamy');

toKababCase('shahdAbdelnaby');
toKababCase('shahd_elshamy');

function toCamelCase(text){

    let regex= /[_-\s]+(\w)/g;

    let result=text.replace(regex,(match,char)=>char.toUpperCase());

    console.log(`Camal Case: ${result}`);
}

function toSnakeCase(text){

    let regex= /-|[A-Z\s]/g;

    let result=text.replace(regex,function(match){
        if(match==='-'){
            return '_';
        }else if(match===' '){
            return '';
        }
        else{
            return '_'+match.toLowerCase();
        }
    }
);
       


    console.log(`Snake Case: ${result}`);
}


function toKababCase(text){

    let regex= /_|[A-Z\s]/g;

    let result=text.replace(regex,function(match){
        if(match==='_'){
            return '-';
        }else if(match===' '){
            return '';
        }
        else{
            return '-'+match.toLowerCase();
        }
    }
);
       
    console.log(`Kabab Case: ${result}`);
}

//////////////////////////////////////////////////////////////

trimText('-');

function trimText(char){

    let text='shahd-Elshamy';

    // let regex=/char/g;      //deal with it as string not variavle   search about word char

    let regex=new RegExp(char);

    let result=text.replace(regex,' ');

    console.log(`The Trim Text Is: ${result}`)

}

///////////////////////////////////////////

reduceText('classes.users.profile.center');
reduceText('classes.users.profile');
reduceText('classes.users');
reduceText('classes');

function reduceText(text){

    let regex=/^[A-Za-z_\.]+$/g;

    let array=[];
    let result;

    if(regex.test(text)){

        array=text.split('.');

        array.pop();

        if(array.length == 0){
            result=null;
        }else{
            result=array.join('.');
        }

        console.log(`The Reduced Text: ${result}`);

    } 


}


