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

