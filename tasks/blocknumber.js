const { task } = require('hardhat/config')

// we have imported the task tag from hardhat/config it has a function .setAction which will be used to define our custom hardhat tasks
task("blocknumber", "Prints the current blocknumber").setAction(
    async (taskArgs, hre) => {
        // the two arguments passed in this anonymous function are taskArgs and hre 
        //   1. taskArgs is any type of arguments we need in this function
        //   2. hre (hardhat runtime environment) it has access to all the functions/tags of hardhat

        const blockNumber = await hre.ethers.provider.getBlockNumber()
        console.log(blockNumber)

        // it wont show up on hardhat's list of tasks, we need to export this file to hardhat.config.js (notice hardhat.config.js there we have imported this file)

    }
)
// in order to export any file i.e to make it accessible to other files we need to make it exportable function
module.exports = {}
