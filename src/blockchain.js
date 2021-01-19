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
    hashFunction(){
        return SHA256(this.index + this.timeStamp + this.precedingHash + JSON.stringify(this.data) + this.nonce).toString();
    };
    proofOfWork(difficulty){
        while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")){
            this.nonce ++;
            this.hash = this.hashFunction();
        };
    };
};

class CryptoChain {
    constructor(){
        this.chain = [this.createChain()];
        this.difficulty = 2
    }

    createChain = () => {
        return new Block(0, '1/18/2021', 'First Block on the Chain', '0');
    };

    newestBlock(){
        return this.chain[this.chain.length -1];
    };

    addBlock(newBlock){
        newBlock.precedingHash = this.newestBlock().hash;
        // newBlock.hash = newBlock.hashFunction();
        newBlock.proofOfWork(this.difficulty);
        this.chain.push(newBlock);
    };

    checkValidity(){
        for(let i = 1; i < this.chain.length; i++){
            const currentBlock = this.chain[i];
            const prevBlock = this.chain[i - 1];

            if(currentBlock.hash !== currentBlock.hashFunction()){
                return false;
            }
            if(currentBlock.precedingHash !== prevBlock.hash){
                return false;
            };
            return true;
        };
    };
};

let testBlockChain = new CryptoChain();
console.log('Mining please wait')
testBlockChain.addBlock(new Block(1, '1/18/2021', {sender: 'Kaido', amount: 234}));
testBlockChain.addBlock(new Block(2, '1/18/2021', {sender: 'Umber', amount: 90}));
testBlockChain.addBlock(new Block(3, '1/18/2021', {sender: 'Ana', amount: 6741}));
testBlockChain.addBlock(new Block(4, '1/18/2021', {sender: 'Dillon', amount: 1234}));

console.log(testBlockChain);

console.log('Is blockchain valid', testBlockChain.checkValidity());

module.exports = {
    CryptoChain,
    Block
};