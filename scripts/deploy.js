const { ethers } = require('hardhat')

// this code will deploy the contract in hardhat build in networks
async function main() {
    const walletFactory = await ethers.getContractFactory("wallet")
    console.log("deploying")
    const Wallet = await walletFactory.deploy()
    await Wallet.deployed()
    console.log(Wallet.address)
}
main()