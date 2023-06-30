

const hre = require("hardhat")

async function main() {
//  const [deployer] = await ethers.getSigners();



//  console.log("Deploying contracts with the account:", deployer.address);
 // console.log("Account balance:", (await deployer.getBalance()).toString());


  // Get the ContractFactories and Signers here.
  const HELLO  = await hre.ethers.getContractFactory("Hello");
  // deploy contracts
  const hello  = await HELLO.deploy();
  await hello.waitForDeployment();


  console.log("hello deployed to: ", await hello.getAddress());

  const contractAddress  = await hello.getAddress();

  // Save copies of each contracts abi and address to the frontend.

//  saveFrontendFiles(marketplace , "Marketplace");
  saveFrontendFiles(contractAddress  , "Hello");
}

function saveFrontendFiles(contractAddress, name) {
  const fs = require("fs");
  const contractsDir = __dirname + "/../src/contractsData";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }
  
  fs.writeFileSync(
    contractsDir + `/${name}-address.json`,
    JSON.stringify({ address: contractAddress }, undefined, 2)
  );

  const contractArtifact = artifacts.readArtifactSync(name);

  fs.writeFileSync(
    contractsDir + `/${name}.json`,
    JSON.stringify(contractArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
