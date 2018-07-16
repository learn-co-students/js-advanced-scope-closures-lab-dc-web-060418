function produceDrivingRange(range) {
    return function(start, end) {
        startInt = parseInt(start.slice(0,-2));
        endInt = parseInt(end.slice(0,-2));
        distance = Math.abs(startInt-endInt);
        if (range >= distance) {
            return "within range by "+(range-distance);
        } else {
            return `${distance - range} blocks out of range`;
        }
    }
}

function produceTipCalculator(tip) {
    //tip value example .10
    return function(fare) {
        return tip*fare;
    }
}

function createDriver() {
    let DriverId = 0;
    return class {
        constructor(name) {
            this.name = name
            this.id = ++DriverId;
        }
    }
}