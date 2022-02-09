// let screen = document.getElementsById('screen');
// let button = document.querySelectorAll('button').textContent;
// console.log(val);

// get number
function number(num){
   var result = document.getElementById("input");
   result.value  += num;
}

// get result
function result(){
   var result = document.getElementById("input");
   result.value = eval( result.value);
}

// clear result
function clearResult(){
   var result = document.getElementById("input");
   result.value = "";
}
// delete character
function deleteChar(){
   var number = document.getElementById("input");
   var remove = number.value;
   remove = remove.slice(0,-1);  //remove last character from a string
   number.value = remove;
}