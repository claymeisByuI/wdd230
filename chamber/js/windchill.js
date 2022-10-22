function setElementText(elementId, text){
    document.querySelector(elementId).innerText = text;
}

// Using the + to force the elements to a number
const tempurature = + document.getElementById("tempurature").innerText;
const windspeed = + document.getElementById("windspeed").innerText;
const windchill = windChill(tempurature,windspeed)

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