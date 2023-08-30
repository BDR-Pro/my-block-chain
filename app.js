const blockchain = require("./blockchain");

const Blockchain = new blockchain();

for (let index = 1; index < 10; index++) {
    Blockchain.addBlock(index+1 + ' block');
    
}

Blockchain.printBlockchain();