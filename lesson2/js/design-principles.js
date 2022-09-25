setElementText("lastmodified", "Last modified: " + (new Date(document.lastModified).toLocaleString('en-us')))
setElementText("copywriteyear", (new Date()).getFullYear());

function setElementText(elementId, text){
    document.getElementById(elementId).innerText = text;
}