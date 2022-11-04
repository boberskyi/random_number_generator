"use strict";

const minNumber = document.getElementById('minNumber'),
  maxNumber = document.getElementById('maxNumber'),
  msgBox = document.getElementById('msgBox'),
  buttonCounter = document.getElementById('buttonCounter');

const tstAlrt = () => {
  let text_to_copy = document.querySelector('.randomNum').innerHTML;

  if (!navigator.clipboard){
    // old browsers
  } else{
    navigator.clipboard.writeText(text_to_copy).then(
      function(){
        alert("Copied to clipboard!"); // success
      })
      .catch(
        function() {
          console.error('Error');
        });
  }
}

const getRandom = () => {
  let minNumberVal = Math.ceil(+minNumber.value);
  let maxNumberVal = Math.floor(+maxNumber.value);


  minNumber.classList.remove("error");

  if (minNumberVal > maxNumberVal) {
    minNumber.classList.add("error");
    msgBox.innerHTML = (`Your minimum number: <span class="randomNum">${minNumberVal}</span> is greater then maximum: <span class="randomNum">${maxNumberVal}</span>`);
  } else {
    msgBox.innerHTML = (`Your random number is: <span class="randomNum" onclick="tstAlrt()"> ${Math.floor(minNumberVal + Math.random() * (maxNumberVal + 1 - minNumberVal))}</span>`);

  }

}







buttonCounter.addEventListener('click', getRandom);