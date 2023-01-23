const { ethers, upgrades } = require('hardhat');

async function main() {
  const VendingMachineV1 = await ethers.getContractFactory('VendingMachineV1');
  const proxy = await upgrades.deployProxy(VendingMachineV1, [100]);
  await proxy.deployed();

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(proxy.address);

  console.log('Proxy contract address: ' + proxy.address);

  console.log('Implementation contract address: ' + implementationAddress);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// Proxy contract address: 0x4B8e3eE7a26ecd01ecb6E632Ee8F6B38bec0AF0b
//Implementation V1 contract address: 0x2D40265939EF98CeBa19D5BE108483b15d381786
// verify V1 first ... then verify proxy goto etherscan and click on more option and verify it