function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

function setElementText(elementId, text){
    const element = document.querySelector(elementId)
    if(element){
        element.innerText = text;
    }
}


const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;
const now = new Date();

const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
setElementText("#lastmodified", new Date(document.lastModified).toLocaleString('en-us'))
setElementText("#currentDate", fulldate);
const dateElement = document.getElementById("date");
if(dateElement){
    dateElement.value =  new Date().toLocaleString('en-us');
}
const dayOfWeek = now.getDay();
if(dayOfWeek == 1 || dayOfWeek == 4){
    document.getElementById("banner").innerText = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m."
}

// LAZY LOADING OF IMAGES
let imagesToLoad = document.querySelectorAll("img[data-src]");
// optianal parameters being set for the InterstioncalObserver
const imgOptions = {
    threshold :0,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}


// local storage
const LastVisitedElement = document.querySelector("#lastVisitedOn");
const DaysSincePageVisitElement = document.querySelector("#daysSincePageVisit");
const visitsDisplay = document.querySelector(".visits");
// get the stored value in localStorage
let LastVisitedOn = new Date( + window.localStorage.getItem("LastVisitedOn"));
let diffTime = Date.now() - LastVisitedOn;
let DiffInDays = diffTime / (1000 * 3600 * 24);

// store the new number of visits value
window.localStorage.setItem("LastVisitedOn", Date.now());
// show todays date.
LastVisitedElement.textContent =  LastVisitedOn.toLocaleString('en-us');
DaysSincePageVisitElement.textContent = DiffInDays.toFixed(0);


const requestURL = 'json/data.json';
const spotlight1 = document.querySelector('.grid--spotlight-1'); 
const spotlight2 = document.querySelector('.grid--spotlight-2'); 
if(spotlight1 && spotlight2){
    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        
        return jsonObject.filter(function (b){
            if(b["membership-level"] == "gold" 
            || b["membership-level"] == "silver"){
                return true;
            }
            return false;
        })
    })
    .then(function (jsonObject) {
        
        const businesss = jsonObject;
        var business1 = businesss[~~(Math.random() * businesss.length)];
        var business2 = businesss[~~(Math.random() * businesss.length)];
        console.dir(business1)
        console.dir(business2)
        spotlight1.setHTML(BuildCard(business1));    
        spotlight2.setHTML(BuildCard(business2));    
    });
    
    function BuildCard(business) {
        return `
        <h3>${business.name}</h3>
        <div class="image"><img src="${business.logo}" alt="${business.name} logo"></div>
        <hr>
        <p>✉️<a href="email:${business.email}">${business.email}</a></p>
        <p>📞<a href="tel:${business.Phone}">${business.Phone}</a> <a href="${business.url}">Website</a></p>
        `;
    }
}