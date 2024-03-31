export function binary(num)  {
    const str = new Uint32Array([num])[0].toString(2);
    return '0b' + str.padStart(32, '0').replace(/(.{4})(?!$)/g, '$1_');
  }
  
  
  export function binary64(num)  {
    const str = new BigUint64Array([num])[0].toString(2);
    return '0b' + str.padStart(64, '0').replace(/(.{4})(?!$)/g, '$1_');
  }
const number = 3673548;

console.log(parseInt(number.toString(2)));