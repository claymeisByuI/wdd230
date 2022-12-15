function setElementText(elementId, text){
    const element = document.querySelector(elementId);
    if(element){
        element.innerText = text;
    }
}

// Using the + to force the elements to a number
const tempuratureElement = document.getElementById("tempurature");
let tempurature = 0;
let windspeed = 0;
if(tempuratureElement){
    tempurature = + tempuratureElement.innerText;
}
const windspeedElement = document.getElementById("windspeed");
if(windspeedElement){
    windspeed = + windspeedElement.innerText;
}
const windchill = windChill(tempurature, windspeed)

setElementText("#windchill", windchill);


function windChill(tempurature, windspeed){
    if( tempurature <= 50 || windspeed > 3.0){
        let windChill= (35.74 + (0.6215 * tempurature))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*tempurature*Math.pow(windspeed,0.16));
        return Math.round(windChill);
    }
    else{
        return "N/A";
    }
}