document.getElementById("AddChapter").addEventListener("click", function(){
    const scriptureElement =  document.getElementById("favchap");
    const list = document.getElementById("list");

    let scripture = scriptureElement.value;
    if(scripture === ""){
        scriptureElement.focus();
        return
    }

    const newItem = document.createElement("li");
    const deleteButton = document.createElement("button");

    deleteButton.innerHTML = "\u274C";
    deleteButton.setAttribute("aria-label", `Remove ${scripture}`);
    newItem.textContent = scripture;
    newItem.appendChild(deleteButton);

    list.appendChild(newItem);

    deleteButton.addEventListener("click", function(){
        list.removeChild(newItem);
        scriptureElement.focus();
    });

    scriptureElement.value = "";
    scriptureElement.focus();

});