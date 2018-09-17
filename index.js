function produceDrivingRange(max) {
  return function (x, y) {
    if (typeof x === 'string') {
      x = Number.parseInt(x);
    }

    if (typeof y === 'string') {
      y = Number.parseInt(y);
    }

    let start = Math.min(x, y);
    let end = Math.max(x, y);
    let dist = end - start;

    if (dist > max) {
      return `${dist - max} blocks out of range`;
    } else {
      return `within range by ${max - dist}`;
    }
  }
}

function produceTipCalculator(percentage) {
  return function(fare) {
    return fare * percentage;
  }
}

function createDriver() {
  let driverId = 0;

  return function(name) {
    return {
      'name': name,
      'id': ++driverId
    }
  };
}
