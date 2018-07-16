function produceDrivingRange(blockRange) {
    return function(startBlock, endBlock) {
        let start = parseInt(startBlock);
        let end = parseInt(endBlock);
        let differenceInBlocks = Math.abs(end - start);
        

        if(blockRange < differenceInBlocks) {
            return `${Math.abs(blockRange - differenceInBlocks)} blocks out of range`
        } else {
            return `within range by ${blockRange - differenceInBlocks}`
        }
    }
}

function produceTipCalculator(tip) {
    return function(fare) {
        return tip * fare;
    }
}

function createDriver() {
    let driverId = 0
    return class {
        constructor(name){
        this.name = name
        this.id = ++driverId;
        }
    }
}