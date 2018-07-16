function produceDrivingRange(num) {
    const range = num;
    return function(startBlock,endBlock){
        diffBlocks = Math.abs(startBlock.slice(0,startBlock.length-2)-endBlock.slice(0,endBlock.length-2))
        if (range>=diffBlocks) {
            return `within range by ${range-diffBlocks}`
        } else {
            return `${diffBlocks-range} blocks out of range`
        }
    } 
}

function produceTipCalculator(x) {
    const tipPercentage = x;
    return function(billAmount){
        return billAmount*tipPercentage
    }
}


function createDriver() {
    let driverId = 0;
    return class {
        constructor(name){
            this.name=name 
            this.id = ++driverId
        }
    }
}