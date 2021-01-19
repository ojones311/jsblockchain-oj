const SHA256 = require('crypto-js/sha256')

class Block {
    constructor(index, timeStamp, data, precedingHash){
        this.index = index;
        this.timeStamp = timeStamp;
        this.data = data;
        this.precedingHash = precedingHash;
        this.hash = this.hashFunction();
    }
    hashFunction = () => {
        SHA256(this.index + this.timeStamp + this.data + this.precedingHash + this.nonce).toString();
    }
}

class CryptoChain {
    constructor(){
        this.length = 0
    }
}