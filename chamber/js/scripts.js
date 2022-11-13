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
document.getElementById("date").value =  new Date().toLocaleString('en-us')
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
