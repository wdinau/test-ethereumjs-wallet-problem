### Problem
Using Immutable SDK to `generateLegacyStarkPrivateKey` has errors.

### To reproduce
* run `npm install`
* Open `test.mjs` give valid value to `ETHERSCAN_API_KEY` and `PRIVATE_ETH_KEY`
* run `node test.mjs`

If the problem is not fixed, we will see the following error:
```
.fromMasterSeed(Buffer.from(seed.slice(2), 'hex')) // assuming seed is '0x...'
         ^
TypeError: Cannot read properties of undefined (reading 'fromMasterSeed')
```