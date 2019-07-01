//Our cstom function

function calculateTip() {

    //Store the data of inputs
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numPeople = document.getElementById("totalPeople").value;

    var shortServiceQuality = serviceQuality / 100;

    var total = (billAmount * shortServiceQuality) / numPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    //Display the tip!
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerText = total;

}

//Hide the tip amount onload
document.getElementById("totalTip").style.display = "none";

//Hide
document.getElementById("each").style.display = "none";


//Clicking the button call our custom function
document.getElementById("calculate").onclick = function () {
    calculateTip();
}