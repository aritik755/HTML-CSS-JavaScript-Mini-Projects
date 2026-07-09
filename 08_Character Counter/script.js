const textAreaE1 = document.getElementById('textArea');
const totalCounterE1 = document.getElementById('totalCounter');
const remainingCounterE1 = document.getElementById('remainingCounter');

textAreaE1.addEventListener('keyup', () => {
  updateCounter();
})

updateCounter();

function updateCounter(){
  totalCounterE1.innerHTML = textAreaE1.value.length;
  remainingCounterE1.innerHTML = textAreaE1.getAttribute("maxLength") - textAreaE1.value.length;
}