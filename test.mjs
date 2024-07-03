import { EtherscanProvider } from "@ethersproject/providers";
import { Wallet } from "@ethersproject/wallet";

// import { x } from "@imtbl/sdk";
// const { generateLegacyStarkPrivateKey, createStarkSigner } = x;

import { generateLegacyStarkPrivateKey, createStarkSigner } from "@imtbl/sdk/x";

const ETHERSCAN_API_KEY = "";
const PRIVATE_ETH_KEY = "";

async function run() {
  try {
    const provider = new EtherscanProvider("mainnet", ETHERSCAN_API_KEY);
    const ethSigner = new Wallet(PRIVATE_ETH_KEY).connect(provider);
    const starkPrivateKey = await generateLegacyStarkPrivateKey(ethSigner);
    console.log('starkPrivateKey', starkPrivateKey);

    const starkSigner = createStarkSigner(starkPrivateKey);
    console.log('starkSigner', starkSigner.getAddress());
  } catch (error) {
    console.error(error);
  } finally {
    process.exit(0);
  }
}

run();
