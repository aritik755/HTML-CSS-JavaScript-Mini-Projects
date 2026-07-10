let billAmountE1 = document.querySelector('#billAmount');
let percentageAmountE1 = document.querySelector('#tipPercentage');
let btnE1 = document.querySelector('button');
let resultE1 = document.querySelector('#output');

btnE1/addEventListener('click', () => {
  let billValue = Number(billAmountE1.value);
  let percentage = Number(percentageAmountE1.value);

  let total = billValue + (billValue*(percentage/100));

  resultE1.innerHTML = `₹${total}`;

});