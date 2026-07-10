let inputE1 = document.querySelector('.weightInput');
let result = document.querySelector('#output');
let btnE1 = document.querySelector('button');

btnE1.addEventListener('click', () => {
  let inputValue = Number(inputE1.value);

  let weightInKg = inputValue * 0.453592;

  result.textContent = weightInKg.toFixed(2) + " kg";
});