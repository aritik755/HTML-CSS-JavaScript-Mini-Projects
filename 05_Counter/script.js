function increment(){
      let counterE1 = document.querySelector("#counter");
      counterE1.textContent = parseInt(counterE1.textContent) + 1;
    }

    function decrement(){
      let counterE1 = document.querySelector("#counter");
      counterE1.textContent = parseInt(counterE1.textContent) - 1;
    }

    function reset(){
      let counterE1 = document.querySelector("#counter");
      counterE1.textContent = 0;
    }