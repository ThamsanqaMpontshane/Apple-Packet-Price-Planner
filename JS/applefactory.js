//factory function

function AppleCount(){
    function packets(){
        return Math.ceil(numberofappleinabox.value / packetsize.value);
        
    }

    function costPerApple(){
        return Math.ceil(boxcostprice.value / numberofappleinabox.value);
    }

    function costPerPacket(){
        return costPerApple() * packetsize.value;
    }

    function recommendedPacketPrice(){
        var recommendedpacketprice1 = costPerApple() * packetsize.value;
        var recommendedpacketprice2 = recommendedpacketprice1 + (recommendedpacketprice1 * requiredprofit.value / 100);
        return recommendedpacketprice2;
    }

    return {
        packets,
        costPerApple,
        costPerPacket,
        recommendedPacketPrice
}
}

//unit test for factory function
