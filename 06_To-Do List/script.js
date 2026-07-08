let orderedList = document.createElement("ol");
      document.body.appendChild(orderedList);
      orderedList.style.width = "300px";
      let btnE1 = document.querySelector("button")
      btnE1.addEventListener("click", function(){
        let listE1 = document.createElement("li");
        let inputValue = document.querySelector("input").value;
        orderedList.appendChild(listE1);
        let containerE1 = document.createElement("div");
        listE1.appendChild(containerE1);
        let spanE1 = document.createElement("span");
        spanE1.textContent = inputValue;
        let btnE1 = document.createElement("button");
        btnE1.textContent = "❌";
        containerE1.appendChild(spanE1);
        containerE1.appendChild(btnE1);
        containerE1.style.display = "flex";
        containerE1.style.justifyContent = "space-evenly";
        containerE1.style.gap = "15px";

        btnE1.addEventListener("click", function(){
          listE1.remove();
        });
        document.querySelector("input").value = "";
      });