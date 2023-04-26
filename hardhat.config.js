require("@nomicfoundation/hardhat-toolbox");
require('@nomiclabs/hardhat-etherscan')
require("./tasks/blocknumber")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  // networks:{
  //   rinkeyby:{
  //     url : //enter rpc address
  //     chainId: // enter chain id of network
  //     account: //enter the private key of account
  //   },
  localhost: {
    URL: "http://127.0.0.1:8545/",
    chainId: 31337
  },
  // },
  solidity: "0.8.7",
};
