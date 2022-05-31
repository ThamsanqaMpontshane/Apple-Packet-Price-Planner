var boxcostprice = document.getElementById("costPrice")[0];
var numberofappleinabox = document.getElementById("numberOfApples")[0];
var packetsize = document.getElementById("packetSize")[0];
var requiredprofit = document.getElementById("requiredProfit")[0];

var numberofpackets = document.getElementById("numberOfPackets")[0];
var costperapple = document.getElementById("costPricePerApple")[0];
var costpriceperpacket = document.getElementById("costPricePerPacket")[0];
var recommendedpacketprice = document.getElementById("recommendedpacketPrice")[0];

var button = document.getElementById("button")[0];


function calculateNumberOfPackets() {
    var numberofpackets = numberofappleinabox.value / packetsize.value;
    var numberofpackets1 = Math.ceil(numberofpackets);
    numberofpackets.innerHTML = numberofpackets1;
    return numberofpackets1;
}

function calculateCostPerApple() {
    var costperapple = boxcostprice.value / numberofappleinabox.value;
    var costperapple1 = Math.ceil(costperapple);
    var costperapple2 = costperapple1 + (costperapple1 * requiredprofit.value);
    costperapple.innerHTML = costperapple2;
    return costperapple2;
}

function calculateCostPerPacket() {
    var costperpacket = calculateCostPerApple() * packetsize.value;
    var costperpacket1 = Math.ceil(costperpacket);
    var costperpacket2 = costperpacket1 + (costperpacket1 * requiredprofit.value);
    costpriceperpacket.innerHTML = costperpacket2;
    return costperpacket2;
}

function calculateRecommendedPacketPrice() {
    var recommendedpacketprice = calculateCostPerPacket() * 1.2;
    var recommendedpacketprice1 = Math.ceil(recommendedpacketprice);
    var recommendedpacketprice2 = recommendedpacketprice1 + (recommendedpacketprice1 * requiredprofit.value);
    recommendedpacketprice.innerHTML = recommendedpacketprice2;
    return recommendedpacketprice2;
}

button.addEventListener("click", function () {
    calculateNumberOfPackets();
    calculateCostPerApple();
    calculateCostPerPacket();
    calculateRecommendedPacketPrice();
});