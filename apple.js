var boxcostprice = document.querySelector("#costPrice");
var numberofappleinabox = document.querySelector("#numberOfApples");
var packetsize = document.querySelector("#packetSize");
var requiredprofit = document.querySelector("#requiredProfit");

var numberofpackets = document.querySelector("#numberOfPackets");
var costperapple = document.querySelector("#costPricePerApple");
var costpriceperpacket = document.querySelector("#costPricePerPacket");
var recommendedpacketprice = document.querySelector("#recommendedPacketPrice");

var button = document.querySelector("#button");


function calculateNumberOfPackets() {
    var numberofpackets1 = Math.ceil(numberofappleinabox.value / packetsize.value);
    numberofpackets.innerHTML = numberofpackets1;
    return numberofpackets1;
}

function calculateCostPerApple() {
    var costperapple1 = Math.ceil(boxcostprice.value / numberofappleinabox.value);
    costperapple.innerHTML = costperapple1;
    return costperapple1;
}

function calculateCostPerPacket() {
    var costperpacket = calculateCostPerApple() * packetsize.value;
    costpriceperpacket.innerHTML = costperpacket;
    return costperpacket;
}

function calculateRecommendedPacketPrice() {
    var recommendedpacketprice1 = calculateCostPerApple() * packetsize.value;
    var recommendedpacketprice2 = recommendedpacketprice1 + (recommendedpacketprice1 * requiredprofit.value / 100);
    recommendedpacketprice.innerHTML = recommendedpacketprice2;
    return recommendedpacketprice2;
}

button.addEventListener("click", function () {
    calculateNumberOfPackets();
    calculateCostPerApple();
    calculateCostPerPacket();
    calculateRecommendedPacketPrice();
});