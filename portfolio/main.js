function calculateTip() {

    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numPeople = document.getElementById("totalPeople").value;

    var shortServiceQuality = serviceQuality / 100;

    var total = (billAmount * shortServiceQuality) / numPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerText = total;

}

document.getElementById("totalTip").style.display = "none";

//Need to implement
document.getElementById("each").style.display = "none";

document.getElementById("calculate").onclick = function () {
    calculateTip();
}