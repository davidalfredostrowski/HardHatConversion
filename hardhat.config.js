require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
paths: {
    artifacts: "./src/artifacts",
  },



	networks: {
	   hardhat: {
		   	chainID: 1337
	   }
   },


	solidity: "0.8.18",
};
