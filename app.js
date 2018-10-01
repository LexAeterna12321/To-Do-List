window.addEventListener("keydown", e => {
    // VARS
    let listInputValue = document.querySelector(".container__input").value;
    const toDoList = document.querySelector(".main__to-do");
    const doneList = document.querySelector(".main__done");
    const listItem = document.createElement("li");
    const controlOk = document.createElement("div");
    const controlRemove = document.createElement("div");
    const toDoListItems = [];
    const doneListItems = [];
    // input on enter confirmation
    if (e.keyCode == 13) {

        if (listInputValue === "") {
            alert(`Please enter a task`);
        } else {
            // adding list items
            toDoList.appendChild(listItem).classList.add("main__to-do__item");
            listItem.textContent = `- ${listInputValue}`;
            // 
            // pushing values to array
            toDoListItems.push(listInputValue);
            // 
            // adding controls
            listItem.appendChild(controlOk).classList.add("main__control--ok");
            controlOk.textContent = "OK";
            listItem.appendChild(controlRemove).classList.add("main__control--remove");
            controlRemove.textContent = "X";
            //
        }
    }

    //   controls management
    controlOk.addEventListener("click", () => {
        doneList.appendChild(listItem).classList.add("main__done__item");
        doneListItems.push(toDoListItems.pop());
        listItem.removeChild(controlOk)
    })
    controlRemove.addEventListener("click", () => {
        listItem.style.textDecoration = "line-through";
        controlRemove.addEventListener("click", () => {
            listItem.classList.add("fadingItem");
            setTimeout(() => listItem.remove(), 1000)

        })

    })
})