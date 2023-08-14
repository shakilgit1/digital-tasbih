const p1 = 'Alhamdulillah'
const p2 = 'SubhanAllah'
const p3 = 'AllahuAkbar'

const number = document.getElementById('number');
const pera = document.getElementById('para');
let initialValue = 0;
let initialValue2 = 0;
let initialValue3 = 0;
// for 2
const number2 = document.getElementById('number-2');
const pera2 = document.getElementById('para-2');
// for 3
const number3 = document.getElementById('number-3');
const pera3 = document.getElementById('para-3');


// for 1 
document.getElementById('btn1').addEventListener('click', function(){

    if(initialValue === 33){
        return alert('completed, try another one');
    }
   initialValue +=1;
   number.innerText = initialValue;
   pera.innerText = p2;
});
document.getElementById('btn2').addEventListener('click', function(){

   if(initialValue === 0){
       return alert('number is 0, try another one');
   }
   initialValue -=1;
   number.innerText = initialValue;
   pera.innerText = p1;
});


// for 2
document.getElementById('btn-2').addEventListener('click', function(){

    if(initialValue2 === 33){
        return alert('completed, try another one');
    }
   initialValue2 +=1;
   number2.innerText = initialValue2;
   pera2.innerText = p3;
});
document.getElementById('btn-3').addEventListener('click', function(){

    if(initialValue2 === 0){
        return alert('number is 0, try another one');
    }
    initialValue2 -=1;
    number2.innerText = initialValue2;
    pera2.innerText = p1;
 });

//  for 3
document.getElementById('btn3').addEventListener('click', function(){

    if(initialValue3 === 34){
        return alert('completed, try another one');
    }
   initialValue3 +=1;
   number3.innerText = initialValue3;
   pera3.innerText = p3;
});
document.getElementById('btn4').addEventListener('click', function(){

    if(initialValue3 === 0){
        return alert('number is 0, try another one');
    }
    initialValue3 -=1;
    number3.innerText = initialValue3;
    pera3.innerText = p2;
 });


document.getElementById('reset').addEventListener('click', function(){
    number.innerText = 0;
    number2.innerText = 0;
    number3.innerText = 0;
    pera.innerText = ('press the button');
    pera2.innerText = ('press the button');
    pera3.innerText = ('press the button');
});


console.log('hello');