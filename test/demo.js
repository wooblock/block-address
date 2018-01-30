const ba = require('../index');

var privateKey = "";
// var privateKey = "06a8de7f0b20a2fca1e22fac709d4f6688e741fcfcb865acd7313e1d23433a61";
// var privateKey = "0000000000000000000000000000000000000000000000000000000000000001";
// privateKey = "1111111111111111111111111111111111111111111111111111111111111111";
privateKey = "0000000000000000000000000000000000000000000000000000000000000001";

var btc = ba.createAddressByPrivateKey("BTC",privateKey);

console.log(btc);

var ltc = ba.createAddressByPrivateKey("LTC",privateKey);

console.log(ltc);

var eth = ba.createAddressByPrivateKey("ETH",privateKey);

console.log(eth);