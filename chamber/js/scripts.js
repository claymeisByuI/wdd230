function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

function setElementText(elementId, text){
    document.querySelector(elementId).innerText = text;
}


const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;
const now = new Date();

const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
setElementText("#lastmodified", new Date(document.lastModified).toLocaleString('en-us'))
setElementText("#currentDate", fulldate);

const dayOfWeek = now.getDay();
if(dayOfWeek == 1 || dayOfWeek == 4){
    document.getElementById("banner").innerText = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m."
}

