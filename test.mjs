import { EtherscanProvider } from "@ethersproject/providers";
import { Wallet } from "@ethersproject/wallet";
import { x } from "@imtbl/sdk";

const ETHERSCAN_API_KEY = "";
const PRIVATE_ETH_KEY = "";

async function run(){
const { generateLegacyStarkPrivateKey, createStarkSigner } = x;

const provider = new EtherscanProvider("mainnet", ETHERSCAN_API_KEY);
const ethSigner = new Wallet(PRIVATE_ETH_KEY).connect(provider);
const starkPrivateKey = await generateLegacyStarkPrivateKey(ethSigner);
const starkSigner = createStarkSigner(starkPrivateKey);
}

run();