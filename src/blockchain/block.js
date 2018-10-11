const {Transaction} = require('./transaction');
const CryptoJS = require('crypto-js');

module.exports = class Block {

  constructor (index, previousHash, timestamp, transactionDatas, hash, nonce) 
  {
    this.index = index;
    this.previousHash = previousHash.toString();
    this.timestamp = timestamp;
    this.transactionDatas = transactionDatas;
    this.hash = hash.toString();
    this.nonce = nonce
  }

  toString() {
    return JSON.stringify(this);
  }

  static fromString(data) {
    let payload = JSON.parse(data);
    let block = new Block(
      payload.index,
      payload.previousHash, 
      payload.timestamp, 
      payload.transactionDatas, 
      payload.hash, 
      payload.nonce
    );
    block.transactionDatas = Transaction.txsFromString(payload.transactionDatas);
    return block;
  }
  

  static hashTransactions(transactionDatas){
    let data;
    transactionDatas.forEach(transaction => {
      data += transaction
    });
    return CryptoJS.SHA256(data).toString()
  }
};