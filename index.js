function produceDrivingRange(blockRange){
  const range = parseInt(blockRange);
  return function(startBlock, endBlock){
    const trip = Math.abs(parseInt(startBlock)- parseInt(endBlock));
    if (trip > range){
     return  `${trip - range} blocks out of range`;
    } else {
     return  `within range by ${range - trip}`;
    }
  }
}

function produceTipCalculator(tipPercentage){
  return function(cost){
    return cost * tipPercentage;
  }
}
