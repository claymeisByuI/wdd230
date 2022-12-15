const fruitUrl = `json/fruit.json`;
async function fruitFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data, document.getElementById("selectFruit1"));
            displayResults(data, document.getElementById("selectFruit2"));
            displayResults(data, document.getElementById("selectFruit3"));
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
fruitFetch(fruitUrl);

function displayResults(fruitData, selectElement){
    for(var i = 0; i < fruitData.length; i++) {
        const fruit = fruitData[i];
        
        const el = document.createElement("option");
        el.text = fruit.name;
        el.value = fruit.name;
        
        selectElement.add(el);
    }
}
function submit_order(){

    const content = document.querySelector(".content");
    content.classList.toggle("hidden");
    
    const oContent = document.querySelector(".orderPlaced");
    oContent.classList.toggle("hidden");
    const form = document.getElementById("freshForm");
    const formData = new FormData(form);
    console.dir(formData);
    const elName = document.querySelector("#orderedName");
    const elEmail = document.querySelector("#orderedEmail");
    const elText = document.querySelector("#orderedText");
    const elItems = document.querySelector("#orderedItems");

    const formName = document.querySelector("#name");
    const formEmail = document.querySelector("#email");
    const formPhone = document.querySelector("#phone");
    const formFruit1 = document.querySelector("#selectFruit1");
    const formFruit2 = document.querySelector("#selectFruit2");
    const formFruit3 = document.querySelector("#selectFruit3");
    elName.textContent = formName.value;
    elEmail.textContent = formEmail.value;
    elText.textContent = formPhone.value;

    const el1 = document.createElement("li");
    el1.innerHTML = formFruit1.value;
    elItems.appendChild(el1);

    const el2 = document.createElement("li");
    el2.innerHTML = formFruit2.value;
    elItems.appendChild(el2);

    const el3 = document.createElement("li");
    el3.innerHTML = formFruit3.value;
    elItems.appendChild(el3);

}