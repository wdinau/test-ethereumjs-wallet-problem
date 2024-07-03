import { EtherscanProvider } from "@ethersproject/providers";
import { Wallet } from "@ethersproject/wallet";
import { x } from "@imtbl/sdk";
import dotenv from 'dotenv';
dotenv.config();

async function run(){

const { generateLegacyStarkPrivateKey, createStarkSigner } = x;

const provider = new EtherscanProvider("mainnet", process.env.ETHERSCAN_API_KEY);
const ethSigner = new Wallet(process.env.PRIVATE_ETH_KEY).connect(provider);
const starkPrivateKey = await generateLegacyStarkPrivateKey(ethSigner);
const starkSigner = createStarkSigner(starkPrivateKey);
}

run();