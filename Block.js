class Block{
    data
    timestamp
    nonce
    preHash
    hash

    constructor(data, timestamp, nonce, preHash){
        this.data = data
        this.timestamp = timestamp
        this.nonce = nonce
        this.preHash = preHash
        this.hash = this.mining(this.data+this.timestamp+this.nonce+this.preHash)
    }
    mining(hashValue){
        let data = hashValue    
        let nonce = 0
        while(true){
            const crypto = require('crypto');
            let hash = crypto.createHash('sha256');
            let originalValue = hash.update(data+nonce);
            let hashed= originalValue.digest('hex');
            console.log(hashed)
            console.log(nonce)
            if(hashed.startsWith('0000')){
                console.log(nonce)
                this.nonce = nonce
                return hashed
            }
            nonce++
        }
    }

}

module.exports = Block;
