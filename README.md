1. Create a decentralized NFT Marketplace
1. `listItem`: List NFTs on the marketplace
1. `buyItem`: Buy the NFTs
1. `cancelITem`: Cancel the listing
1. `updateListing`: Update Price
1. `withdrawProceeds`: Withdraw payment for my bought NFTs




yarn

yarn test
TS_NODE_TRANSPILE_ONLY=1 yarn test      

yarn coverage


.solcover.js
 - Skip all the Solidity Files


To fork a blockchain
- go to "hardhat.config.ts"

```typescript
const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
    //   If you want to do some forking set `enabled` to true
      forking: {
        url: MAINNET_RPC_URL,
        blockNumber: Number(FORKING_BLOCK_NUMBER),
        enabled: false,
      },
      chainId: 31337,
    },
```

## Gas Report
- REPORT_GAS=true yarn test

## size
- yarn run hardhat size-contracts


## Fuzzing
- yarn fuzzing