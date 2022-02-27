let port = 4000;
let hostname = 'localhost';

console.log(`Server running on ${hostname} and port:${port}`);

let item; //aux variable
const myArray = [1,2,3];
myArray.push(4);
//myArray.splice(1,0,6,7,8,9);
myArray.splice(1,2,6,7,8);
delete myArray[1];

console.log(myArray);

function changeLinks(){
    let links = document.getElementsByTagName('a');
    for(let a of links){
        a.innerHTML = "Hello JS!";
        a.setAttribute('style','color:#00FF00;');
        a.setAttribute('href', 'http://www.loyola.edu');
    }
}

function showHidePassword(){
    let check = document.getElementById('chk_show_pass');
    let pass = document.getElementById('txt_pass');
    if(check.checked === true){
        pass.setAttribute('type','text');
    }
    else{
        pass.setAttribute('type','password');
    }
}