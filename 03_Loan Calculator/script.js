let loanContainer = document.querySelector('#loanAmount');
let interestContainer = document.querySelector('#interestRate')
let periodContainer = document.querySelector('#payPeriod');
let btnE1 = document.querySelector('button');
let output = document.querySelector('#result');

btnE1.addEventListener('click', () => {
  let loanValue = Number(loanContainer.value);
  let interestValue = Number(interestContainer.value);
  let paymentDuration = Number(periodContainer.value);

  let monthlyPayment = ((loanValue) + (loanValue*(interestValue/100)))/paymentDuration;

  output.textContent = `₹${monthlyPayment.toFixed(2)}`;
});