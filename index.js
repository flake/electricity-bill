function getSlabUnits(units = 0) {
  let slabs = [50, 50, 100, 99999];
  let outputSlabs = []
  let slab = 0;
  let restUnits = units;

  while(restUnits > 0) {
    if (restUnits > slabs[slab]) {
      outputSlabs.push(slabs[slab])
      restUnits = restUnits - slabs[slab]
    } else {
      outputSlabs.push(restUnits)
      restUnits = 0;
    }
    slab++;
  }
  return outputSlabs;
}

function billAmount(units) {
  let slabPrices = [4.1, 5.55, 7.1, 8.15]; 
  let fc = 275; 
  let amount = fc;
  let slabUnits = getSlabUnits(units);
  slabUnits.forEach((slab, index) => {
    amount = amount + (slab * slabPrices[index])
  })

  return amount
}

function flatsBill(flatUnits) {
  let amount = 0;
  for(let flat in flatUnits) {
    let famnt = billAmount(flatUnits[flat]);
    amount += famnt
    console.log(`Flat-no: ${flat.substring(1)} - Bill: ${famnt.toFixed(2)}`)
  }
  console.log("-------------------------------")
  console.log("Total bill: ", amount)
  return amount;
}

const flatUnits = {
  f001: 0,
  f002: 144,
  f003: 0,
  f101: 0,
  f102: 151,
  f103: 184,
  f201: 152,
  f202: 28,
  f203: 42,
  f301: 2,
  f302: 34,
  f303: 137,
  f401: 3,
  f402: 230,
  f403: 0,
  fbase: 292
}

flatsBill(flatUnits)
