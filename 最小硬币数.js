/**
 * 1块、4块、5块，求总数n块的最小硬币数
 */

function getMinNumberCoin(n) {
  const COIN_TYPE = {
    FIVE: 5,
    FOUR: 4,
    ONE: 1
  };
  let theResidue = n;
  let sum = 0;
  let index = 0;
  const coinTypeArr = Object.keys(COIN_TYPE);

  while (theResidue !== 0) {
    const obj = getCoinNumberAndResidue(COIN_TYPE[coinTypeArr[index]], theResidue);
    theResidue = obj.residue;
    sum += obj.num;
    index++
  }

  return sum;
}


function getCoinNumberAndResidue(coinType, n) {
  if (coinType > n) {
    return {
      num: 0,
      residue: n
    }
  }

  const residue = n % coinType;
  const num = (n - residue) / coinType;

  return {
    num,
    residue
  };
}


console.log(getMinNumberCoin(111));
