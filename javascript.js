function number(value){
    document.getElementById('display').value += value;
}
function clear1(){
    document.getElementById('display').value = "";
}
function backspace(){
    let current = document.getElementById('display').value;
    document.getElementById('display').value = current.slice(0,-1);
}
function calc(){
    try{
    let result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
    }
    catch{
       document.getElementById('display').value = "Correct ayi type cheyadaa";
    }
}