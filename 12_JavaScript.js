const sum = function(num1, num2, num3) {
    s = num1+num2+num3;
    console.log(s)
    return s;
}

function myAlert() {
    let i = 0;
    console.log(i++);
    window.alert(i++); // new code: alert
}

function helloAlert() {
    window.alert("Hello JS!");
}

function conf() {
    let ret =  window.confirm("You are about to be transferred to another site. Do you want to continue?");
    console.log(ret);
    return ret;
} // returns true or false depending on what the user clicks

const aliasConf = conf;

function inpDialog() {
    let typed = window.prompt("What is your favorite number?","0"); // gives input field, which wil be returned
    console.log(typed);
    return ret;
}


// Generally, avoid arrow function notation. Does save space, but makes it confusing
function normalSyntax(a,b){
    return a+b;  
}

const asVariableSyntax = function(a,b){
    return a+b;  
}

const arrowSyntax = (a,b) => a+b;
const arrow2 = (a,b) => { return a+b; };


// nested functions
function external(){ // external function
    let num = 10; // local variable of this function

    const inner = function(){ // inner function
        return num+1; // return to external
    } // end of inner function
    num = inner(); // calling the inner function
    num = inner(); 
    return num; // return to caller, num = 12;
}

