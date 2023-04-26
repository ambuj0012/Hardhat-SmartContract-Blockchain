# Hardhat-SmartContract-Blockchain

1. HARDHAT SETUP
   
   a. open new terminal and write command npm init to create a package.json file
   b. run the command - npm add --dev hardhat, to install hardhat packages (this will add a file node_modules in your folder)
   c. run - npx hardhat
   d. this will ask you too choose from three options select - create a javascript project
   e. now install following devdependencies -
      1. npm install --save-dev @nomiclabs/hardhat-ethers
      2. npm install --save-dev @nomiclabs/hardhat-waffle
      3. npm install --save-dev chai
      4. npm install --save-dev ethereum-waffle
      5. npm install --save-dev ether
    f. you will notice that following folders/files are added to your folder-
      1. contracts folder (we will keep our contracts here ) it comes with a sample contract
      2. scripts folder (we will keep our .js files here) it comes with a sample file
      3. test folder
      4. .gitignore file
      5. hardhat.config.js (this is entry point of our script)
    
    [HARDHAT ENVIRONMENT SETUP IS COMPLETED]

2. COMPILE contract

    a. to compile your smart contract write command - npx hardhat compile
    b. two files will bee added to the folder 
       1. artifacts
       2. cache

3. DEPLOYING CONTRACT 

   a. as first step we need to import the hardhat library (it comes with build in ethers.js library)
   b. we then need to create a function to deploy the contract 
   c. we need to first declare the contract factory const which contains all the info of the contract required to deploy the contract (like abi and bytecode of the contract)
   d. please refer to the code in deploy.js file

   [NOTE - POTENTIAL PROBLEMS(errors) YOU MAY FACE WHILE DEPLOYING YOUR CONTRACT-
       a. rpcProvider not defined - usually this error is caused because your directories are not able to read from the node_modules
           you can try these to fix this problem-
           1. reinstalling hardhat
           2. there are high chances that your hardhat package is not there in devdependencies in package.json file, try cutting and pasting it in devdependencies in package.json]

   [NOTE - here we didn't required the rpc url, private key,etc because hardhat comes with build in hardhat network similar to ganache]

   [NOTE - if you need to add your network you can do so in hardhat.config.js 
        to depoly on other network create a network tag and pass network name url chainid and private key (i have commented out the code in hardhat.config.js to add network)]


4. VERIFICATION OF SMART CONTRACT  (refer to code on verify.js)
   
   After the smart contract is deployed, it must be verified to ensure that it has been correctly deployed and that the bytecode matches the original code. This is typically done through a process called "smart contract verification," which involves comparing the deployed bytecode to the original code and checking that they match. 
   Auto-verification of a smart contract involves automatically verifying the contract's source code on a blockchain explorer or verification platform, such as Etherscan, using a continuous integration/continuous deployment (CI/CD) pipeline. This approach can help to streamline the verification process and ensure that the contract is automatically verified whenever changes are made to the codebase.

   a. we will start with installing a plugin, @nomiclabs/hardhat-etherscan to verify the contract (use command npm install --save-dev @nomiclabs/hardhat-etherscan)
   b. to use this plugin you need to add a section in hardhat.config.js file 
       etherscan:{
         apiKey: "your etherscan api key",
       },
       [you require api key to connect to the etherscan server]
   c. installing this plugin provides us with a command to verify our contract using terminal (npx hardhat verify --network testnet DEPLOYED_CONTRACT_ADDRESS "constructor arguments 1")
   d. this plugin is to verify contract in ETHERSCAN 

    
5. CUSTOM HARDHAT TASKS [plz refer to blocknumber.js file in tasks folder]

  [ we can create our own custom hardhat commands for different tasks]

  a. To define a task we will create a task folder and will write scripts to make our custom task commands
  b. plz refer to blocknumber.js in folder, tasks
  

6. HARDHAT LOCALHOST NODE

  a. one can spin up a local blockchain network line the ganache in their own terminal.
  b. to do so, run the command (npx hardhat node) in terminal, this will yield account addresses and private keys of accounts like ganache with 1000 ethers each
  c. if you need to use this locally hosted network, you need to add this network in hardhat.config.js
  d. code to add this network is written below the code to add testnet network (in comments)
  e. rpc url will be given in the terminal when you run the command [npx hardhat node]
  f. to deploy the contract to the LOCALHOST, set the network in hardhat.config.js to localhost and run the deploy script
  g. you can use the command , --network localhost to update the localhost network in terminal (this will print a whole log in the terminal)


7. THE HARDHAT CONSOLE
  
  [hardhat console is a javascript environment which comes building in hardhat, it is used to run js codes in terminal]
  a. run the command npx hardhat console --network flag you are working in (ex npx hardhat console --network localhost)
