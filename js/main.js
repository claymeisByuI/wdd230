const assignments = [
    {
        label: "Lesson 02:",
        url: "/lesson2/design-principles.html" ,
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
    {
        label: "Lesson 05:",
        url: "#" ,
        child:[
        ]
    },
    {
        label: "Lesson 06:",
        url: "#" ,
        child:[
        ]
    },
    {
        label: "Lesson 07:",
        url: "#" ,
        child:[
        ]
    },    
    {
        label: "Lesson 08:",
        url: "#" ,
        child:[
        ]
    },
    {
        label: "Lesson 09:",
        url: "#" ,
        child:[
        ]
    },
    {
        label: "Lesson 10:",
        url: "#" ,
        child:[
        ]
    },
    {
        label: "Lesson 11:",
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

setElementText("lastmodified", "Last modified: " + (new Date(document.lastModified).toLocaleString('en-us')))
setElementText("copywriteyear", (new Date()).getFullYear());

function setElementText(elementId, text){
    document.getElementById(elementId).innerText = text;
}