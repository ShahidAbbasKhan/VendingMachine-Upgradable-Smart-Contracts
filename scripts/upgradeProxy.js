const { ethers, upgrades } = require('hardhat');

const proxyAddress = '0x4B8e3eE7a26ecd01ecb6E632Ee8F6B38bec0AF0b';

async function main() {
  const VendingMachineV2 = await ethers.getContractFactory('VendingMachineV2');
  const upgraded = await upgrades.upgradeProxy(proxyAddress, VendingMachineV2);

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(proxyAddress);

  console.log("The current contract owner is: " +  await upgraded.owner());
  console.log('Implementation contract address: ' +  await implementationAddress);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });

  //The current contract owner is: 0x6d0774AB0E72b32144Cf10208F015a5CAD3acFa0
//Implementation v2 contract address: 0x5560a40F47f51A969AD241241E49eE01ae634233 after it verify v2
//check proxy address on etherscan to view upgradation
  