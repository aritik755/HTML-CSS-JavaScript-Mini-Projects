const btnE1 = document.querySelectorAll('button')
const inputE1 = document.querySelector('.display')

for(let i = 0; i < btnE1.length; i++){
  btnE1[i].addEventListener('click', () => {
    const buttonValue = btnE1[i].textContent;
    if(buttonValue === "C"){
      clearResult();
    }
    else if(buttonValue === "="){
      calculateResult();
    }
    else{
      appendValue(buttonValue);
    }
  })};

function clearResult(){
  inputE1.value = "";
}

function calculateResult(){
  try {
    inputE1.value = eval(inputE1.value);
  } catch (error) {
    inputE1.value = "undefined";
  }
}

function appendValue(buttonValue) {
  inputE1.value += buttonValue;
}