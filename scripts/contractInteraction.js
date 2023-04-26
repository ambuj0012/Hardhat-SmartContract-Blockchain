const { ethers, run } = require("hardhat")

async function main() {
    const WalletFactory = await ethers.getContractFactory("wallet")
    const Wallet = await WalletFactory.deploy()
    const value = await Wallet.get_value()
    console.log("before setting", value)
    const set = await Wallet.set_num(7)
    const new_value = await Wallet.get_value()
    console.log("after setting", new_value)
}
main()
