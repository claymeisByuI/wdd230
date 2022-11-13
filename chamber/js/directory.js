const requestURL = 'json/data.json';
const directory = document.querySelector('.directory');
fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    return jsonObject;
})
.then(function (jsonObject) {
    const businesss = jsonObject;
    businesss.forEach(displayBusiness);
    
});

function displayBusiness(business) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let Address = document.createElement('p');
    let CityStateZip = document.createElement('p');
    let Phone = document.createElement('p');
    let portrait = document.createElement('img');
  
    // Change the textContent property of the h2 element to contain the business's full name
    h2.textContent = `${business.name}`;
    
    Address.textContent = `${business.Address}`;
    CityStateZip.textContent = `${business.CityStateZip}`;
    Phone.setHTML(`<a href="tel:${business.Phone}">${business.Phone}</a>`);
    
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', business.logo);
    portrait.setAttribute('alt', `Logo of ${business.name}`);
    portrait.setAttribute('loading', 'lazy');      

    // Add/append the section(card) with the h2 element
    card.appendChild(portrait);
    card.appendChild(h2);
    card.appendChild(Address);
    card.appendChild(CityStateZip);
    card.appendChild(Phone);
    
    // Add/append the existing HTML div with the cards class with the section(card)
    directory.appendChild(card);
}

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".directory");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
    // example using arrow function
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}
