const input = document.querySelector("#favchap");
const addChapter = document.querySelector("button");
const list = document.querySelector("#list");

addChapter.addEventListener("click", () => {
    let valueInput = input.value.trim();
    if (valueInput.length == 0)
    {
        alert("Please enter a valid input first.");
    } else
    {
        let text = input.value;
        const li = document.createElement("li");
        const delBtn = document.createElement("button");
        li.textContent = text;
        delBtn.textContent = "❌";
        delBtn.addEventListener("click", () => {
            li.remove()
            input.focus();
            input.value = "";   
        });
        li.appendChild(delBtn);
        list.appendChild(li);
        input.focus();
        input.value = "";   
    }
});
