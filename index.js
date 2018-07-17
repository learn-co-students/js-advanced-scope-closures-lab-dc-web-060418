function produceDrivingRange(num) {
  return function (start, end) {
    start = start.slice(0, 2)
    end = end.slice(0, 2)
    let difference = end-start

    if (difference > num) {
      return `${difference - num} blocks out of range`;
    } else {
      return `within range by ${num - difference}`;
    }
  }
}

function produceTipCalculator(num) {
  return function(total) {
    return total * num;
  }
}

function createDriver() {
  let DriverId = 0

  return class {
    constructor(name) {
      this.name = name
      this.id = ++DriverId;
    }
  }
}
