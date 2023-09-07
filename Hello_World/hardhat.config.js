require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const { PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/fMaQCC_YFl3l2ZL8GEN91IIuH9_CN8QF",
      accounts: [`0x${'486ef170a72bad5b11c2ad3fc14823ca01e153b1d08b47712fe0c43b76041358'}`],
    },
  },
};
