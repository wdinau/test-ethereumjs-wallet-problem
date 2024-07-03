### Problem
Using Immutable Typescript SDK to `generateLegacyStarkPrivateKey` has errors when you use Node to run the ESM module file.

### To reproduce

give valid values to `ETHERSCAN_API_KEY` and `PRIVATE_ETH_KEY` in `.env.example` file and rename it to be `.env`

```sh
npm install
node test.mjs
```

We will see the following error:
```sh
.fromMasterSeed(Buffer.from(seed.slice(2), 'hex')) // assuming seed is '0x...'
         ^
TypeError: Cannot read properties of undefined (reading 'fromMasterSeed')
```

### Workaround / Resolution
```sh 
node test.cjs
```

You will successfully obtain a deterministic StarkPrivateKey and StarkSigner without encountering any errors.

The issue typically arises in the code related to the [HD Wallet API](https://www.npmjs.com/package/ethereumjs-wallet#hd-wallet-api) used by the Immutable Typescript SDK during the starkKey generation process.

In many cases, developers are using not just a vanilla Node.js setup, but frameworks like Next.js or Vite. These frameworks often handle this problem differently or provide alternative solutions, making this issue less common in such environments.

Have a look at [Immutable Typescript SDK](https://github.com/immutable/ts-immutable-sdk)'s StarkCurve.ts.
You are most welcome to share comments, your experience and other alternative solutions.