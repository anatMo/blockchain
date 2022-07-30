const web3 = require("./web3.js");
const Inbox = require("../front/src/contactsData/ethereum/build/Inbox.json");

const instance = new web3.eth.Contract(
  Inbox.abi,
  "0x6377c9A386EE4C6559dbb9ec57C8897A240FA236"
);

module.exports = instance;
