let pE1 = document.querySelector('p');
let inputE1 = document.querySelector('input');
inputE1.addEventListener('input', function(){
  let pass = inputE1.value;

  if (pass.length === 0) {
    pE1.textContent = "";
    return;
  }
  else if(pass.length <= 6){
    pE1.textContent = "Weak";
    pE1.style.color = "red";
  }
  else if(pass.length > 6 && pass.length <= 10){
    pE1.textContent = "Moderate";
    pE1.style.color = "orange";
  }
  else if(pass.length > 10){
    pE1.textContent = "High";
    pE1.style.color = "green";
  }
});