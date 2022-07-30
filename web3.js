const HDWalletProvider = require("@truffle/hdwallet-provider"); //provider to connect to some eth network
const Web3 = require("web3"); //interface

const provider = new HDWalletProvider( //make the connection to wallet and to real eth node (in this case rinkeby)
  "clown gift code doll mixed trim boy once nut arrange learn word", //account "refs" (not exact...)
  "https://rinkeby.infura.io/v3/dc652a5224e2444ab7fc29fe16934889"
);

const web3 = new Web3(provider);

module.exports = web3;
