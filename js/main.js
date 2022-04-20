const assignments = [
    {
        label: "Lesson 02:",
        url: "#" ,
        child:[
        ]
    },
    {
        label: "Lesson 03:",
        url: "#" ,
        child:[
        ]
    },
    {
        label: "Lesson 04:",
        url: "#" ,
        child:[
        ]
    },
]

const createList = function(items, parentULElelement){
    items.forEach(item=>{
        const newAssignmentElement = document.createElement("li")
        const newLinkElement = document.createElement("a")
        if(item.url == undefined || item.url == "#"){
            newLinkElement.setAttribute("href", item.url)
            newAssignmentElement.innerText = item.label
            newLinkElement.innerText = "Todo"
        }else{
            newLinkElement.setAttribute("href", item.url)
            newLinkElement.innerText = item.label
        }
        newAssignmentElement.appendChild(newLinkElement)
        parentULElelement.appendChild(newAssignmentElement)
        if(item.child != undefined && item.child.length > 0){
            const childListUlElement = document.createElement("ul");
            newAssignmentElement.appendChild(childListUlElement);
            createList(item.child, childListUlElement);
        }
    });
}
const listElement = document.getElementById("assignments")
createList(assignments, listElement);
const lastmodified = document.getElementById("lastmodified")
lastmodified.innerText = "Last modified: " + (new Date(document.lastModified).toLocaleString('en-us'));