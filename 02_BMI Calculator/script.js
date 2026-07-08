let inputE1 = document.querySelector('#input1');
let inputE2 = document.querySelector('#input2');
let btnE1 = document.querySelector('button');
let inputView = document.querySelector('#inputView');
let resultE1 = document.querySelector('#result');

btnE1.addEventListener('click', () => {
  inputE1Value = Number(inputE1.value);
  inputE2Value = Number(inputE2.value);

  if (inputE1Value <= 0 || inputE2Value <= 0) {
  alert("Please enter valid height and weight.");
  return;
  }

  let BMI = ((inputE2Value)/(inputE1Value*inputE1Value)) * 10000;

  inputView.value = BMI.toFixed(2);
  
  if(BMI < 18.5){
    resultE1.textContent = 'Underweight';
  }
  else if(BMI >= 18.5 && BMI < 25){
    resultE1.textContent = 'Healthy Weight';
  }
  else if(BMI >= 25 && BMI < 30){
    resultE1.textContent = 'Overweight';
  }
  else if(BMI >= 30){
    resultE1.textContent = 'Obese';
  }

  inputE1.value = "";
  inputE2.value = "";

});
