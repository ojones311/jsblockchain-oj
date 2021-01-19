const SHA256 = require('crypto-js/sha256')

class Block {
    constructor(index, timeStamp, data, precedingHash){
        this.index = index;
        this.timeStamp = timeStamp;
        this.data = data;
        this.precedingHash = precedingHash;
        this.hash = this.hashFunction();
        this.nonce = 0;
    }
    hashFunction = () => {
        SHA256(this.index + this.timeStamp + this.data + this.precedingHash + this.nonce).toString();
    }
}

class CryptoChain {
    constructor(){
        this.chain = createChain()
    }

    createChain(){
        return new Block(0, '1/18/2021', 'First Block on the Chain', '0')
    }

    newestBlock(){
        return this.chain[this.chain.length -1]
    }

    addBlock(newBlock){
        
    }
}