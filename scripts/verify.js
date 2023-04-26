// After the smart contract is deployed, it must be verified to ensure that it has been correctly deployed and that the bytecode matches the original code. This is typically done through a process called "smart contract verification," which involves comparing the deployed bytecode to the original code and checking that they match.


// some points on verifying smart contract ----
//  1. you can still interact with and use your smart contract without verifying it, but doing so carries some risks. Deploying a smart contract without verifying it means that there is no independent review of the code to ensure that it is secure and functions as intended. This can leave the contract vulnerable to bugs, logical errors, or other issues that could result in unexpected behavior or even financial loss for users of the contract.

// 2. Without verification, it is also possible that the contract may be vulnerable to attacks by malicious actors, who could exploit vulnerabilities or errors in the code to gain unauthorized access or control over the contract's assets or functions.

// 3. While it is possible to use and interact with an unverified smart contract, it is generally not recommended. Verifying a smart contract before deployment is an important step in ensuring its security and reliability, and can help to protect both the creator of the contract and its users from potential risks and vulnerabilities.

// 4. Auto-verification of a smart contract involves automatically verifying the contract's source code on a blockchain explorer or verification platform, such as Etherscan, using a continuous integration/continuous deployment (CI/CD) pipeline. This approach can help to streamline the verification process and ensure that the contract is automatically verified whenever changes are made to the codebase.

// We will give two arguments to the verify function-
//    1. contract address
//    2. args(this will be populated only when there are constructors in your contract)

// we will use the plugin @nomiclabs/hardhat-etherscan to automaticall verify the contract

const { ethers, run } = require("hardhat")
// run allows us to run hardhat commands in our code (the commands we use in our terminal) 


async function verify(contractAddress, args) {
    console.log("verifying contract...")
    contractAddress = 0x5FbDB2315678afecb367f032d93F642f64180aa3
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (error) {
        if (error.message.toLowerCase().includes("already verified")) {
            console.log("contract is already verified")
        }
        else {
            console.log(error)
        }
    }
}

// you can call this function in your deploy script/function in order to verify contract as soon as it is deployed

// we can verify contract in blockexplorers like etherscan when we have deployed in any testnet but since we have deployed in our hardhat local network, hence verification need not to be done

async function verifyNetwork() {

    // in this function we will verify the network 

    if (network.config.chainId == 4 && ETHERSCAN_API_KEY) {    // like for the rinkeby test net the chain id is 4
        await Wallet.deployTransaction.wait(6)
        await verify(contractAddress, args)
    }
}





