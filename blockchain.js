const Block = require('./Block.js')
// Path: blockchain.js

class Blockchain{
    constructor(){
        this.chain = []
        this.createGenesisBlock()
    }
    createGenesisBlock(){
        const Block = require('./Block.js')
        const block = new Block('Genesis Block', Date.now(), 0, null)
        this.chain.push(block)
    }
    getLatestBlock(){
        return this.chain[this.chain.length-1]
    }
    addBlock(data){
        const Block = require('./Block.js')
        const block = new Block(data, Date.now(), 0, this.getLatestBlock().hash)
        this.chain.push(block)
    }
    isChainValid(){
        for(let i=1; i<this.chain.length; i++){
            const currentBlock = this.chain[i]
            const previousBlock = this.chain[i-1]
            if(currentBlock.hash !== currentBlock.mining(currentBlock.data+currentBlock.timestamp+currentBlock.nonce+currentBlock.preHash)){
                return false
            }
            if(currentBlock.preHash !== previousBlock.hash){
                return false
            }
        }
        return true
    }
    printBlockchain(){   
        for(let i=0; i<this.chain.length; i++){
            console.log(this.chain[i])
        }
    }
}

module.exports = Blockchain
