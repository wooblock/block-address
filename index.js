const ethUtils = require('ethereumjs-util');
const ci = require('coininfo');
const ck = require('coinkey');
const cs = require('coinstring');

const coins = [
    "BLK",
    "BTC",
    "DASH",
    "DCR",
    "DOGE",
    "LTC",
    "MONA",
    "NBT",
    "NMC",
    "PPC",
    "RDD",
    "ETH"
];

const mainCoins = [
    "BTC",
    "ETH",
    "MOER",
    "LTC",
    "DASH"
];

module.exports.coins = coins;

module.exports.createPrivateKey = function () {
    return ck.createRandom()
};

module.exports.createAddressByPrivateKey = function (coin, privateKey) {
    if (coins.indexOf(coin) === -1) {
        return null;
    }
    if ('ETH' === coin) {
        return {
            coin: coin,
            privateKey: privateKey,
            address: ethUtils.bufferToHex(ethUtils.privateToAddress(new Buffer(privateKey, 'hex')))
        }
    }
    const oCoin = ci(coin);
    const versions = oCoin.versions;
    const key = new ck(new Buffer(privateKey, 'hex'), versions);
    const pkey = cs.encode(new Buffer(privateKey, 'hex'), versions.private);
    key.compressed = true;
    const wif = key.privateWif;
    const coinKey = ck.fromWif(wif);
    return {
        privateKey: pkey,
        coin: coin,
        address: coinKey.publicAddress
    }
};