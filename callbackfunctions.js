'use strict'

// parameter cb is a function
function printNiceText(text, cb){
cb (text);
}

printNiceText('some text', console.log);

// printNiceText('more text',(text)=>{
//     console.log('##########');
//     console.log(text);
//     console.log('##########');
// });

function print(text){
    console.log("*********");
    console.log(text);
    console.log("*********");
}

printNiceText('some additional text', print);