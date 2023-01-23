require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require('@openzeppelin/hardhat-upgrades');
require("dotenv").config();
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL1;
const GOERLI_PVT_KEY= process.env.GOERLI_PVT_KEY1;

module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${GOERLI_RPC_URL}`,
      accounts: [GOERLI_PVT_KEY]
    }
  },etherscan: {
    apiKey: process.env.EthApiKey
  },
};