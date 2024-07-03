const { EtherscanProvider } = require("@ethersproject/providers");
const { Wallet } = require("@ethersproject/wallet");
const sdk = require("@imtbl/sdk");

const ETHERSCAN_API_KEY = "";
const PRIVATE_ETH_KEY = "";

async function run() {
  try {
    const { x } = sdk;

    const provider = new EtherscanProvider("mainnet", ETHERSCAN_API_KEY);
    const ethSigner = new Wallet(PRIVATE_ETH_KEY).connect(provider);
    const starkPrivateKey = await x.generateLegacyStarkPrivateKey(ethSigner);
    console.log('starkPrivateKey', starkPrivateKey);
  
    const starkSigner = x.createStarkSigner(starkPrivateKey);
    console.log('starkSigner', starkSigner.getAddress());
  } catch (error) {
    console.error(error);
  } finally {
    process.exit(0);
  }
}

run();
