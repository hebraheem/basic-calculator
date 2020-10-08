let classNum = document.getElementsByClassName(('num'));
let resultField = document.getElementById('result');
let resultField2 = document.getElementById('resultCurent');
let operator = document.getElementsByClassName('first_row')
let eqaul = document.getElementById('equal');
let cancel = document.getElementById('cancel');
let allClear = document.getElementById('allClear')



for (let i = 0; i<classNum.length; i++){
classNum[i].addEventListener('click', numbers);
function numbers(){
   if (classNum[i].innerHTML === '.' && resultField.value.includes('.'))return;
   resultField.value += classNum[i].innerHTML;
   resultField.style.color = "white";
   resultField.style.fontSize = "20px"
        }
}


for (let k = 0; k<operator.length; k++){
        operator[k].addEventListener('click', operators)
       function operators() {
               resultField.value += operator[k].innerHTML;
               resultField.style.color = "white";
               resultField.style.fontSize = "20px";
               resultField2.style.color = "white";
               resultField2.style.fontSize = "20px";
       }
}
allClear.addEventListener('click',oneDel)
function oneDel (){
       let clear = [];
       clear.push(resultField.value);
       console.log(clear);
       clear.pop();
       console.log(clear);
}


cancel.addEventListener('click', del);
function del(){
        resultField.value = ' ';
        resultField2.value = ' ';
}

eqaul.addEventListener('click', equals);
function equals(){
       let total = eval(resultField.value);
       resultField2.value = total;
       resultField.value = ' ';
       
}

