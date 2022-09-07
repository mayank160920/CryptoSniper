# config.json

The configs.json file is located in the crypto-sniper-configs folder in your Documents.

`amt_mode`

Use USD, ETH, or TKN to configure the mode of the AMOUNT option. By setting USD will value in U.S. dollars, ETH will value in the native Blockchain token (e.g. ETH, BNB, etc.), and TKN will be in the amount of tokens itself.

When using TKN mode, please make sure you have more than enough native balance to prevent "insufficient funds" error, as crypto-sniper is unable to estimate the native spending.

`amount`

Enter the amount for each of your transaction.

`slippage`

Enter the BURN (not price movement) tolerance for your transaction.

E.g. If you were supposed to receive 1000 tokens from the swap, and have SLIPPAGE configured at 75, minimally you must receive 250 tokens back, otherwise it will be rejected by the exchange router.

It is highly recommended to keep this configured between 98 and 100.

`mempool_block_delay`

The number of blocks to wait after the addLiquidity transaction is detected.

`iteration`

Enter the number of iteration you wish to perform. Each iteration will weight the AMOUNT parameter. E.g. If you have 0.25 in AMOUNT, and 2 in ITERATION, crypto-sniper will perform 0.25 ETH x 2, totaling 0.5 ETH.

`gas_price`

This is to configure the gas price of your transactions. You may also use 0 for crypto-sniper to calculate the gas automatically; 2x of the current network gas.

`priority_gas`

This is to configure the priority gas of your Ethereum Mainnet transactions.

`honeypot_check`

Use true or false to configure if crypto-sniper should scan the contract address with RugDoc's Honeypot Checker before executing the swap transaction.

`block_severe_fee`

Use true or false to configure if crypto-sniper should block severely high trading fee (over 50%) tokens. The HONEYPOT_CHECK option must be enabled for this to work.

`delay_execution`

This configures the number of block to skip before executing the swap transaction.

`delay_iteration`

This configures the delay in seconds between each iteration.

`rug_pull_check`

Use true or false to configure if crypto-sniper should listen to removeLiquidity() related transaction. If such a transaction is detected, crypto-sniper will TRY to front-run the transaction. 

`sell_management`

Use true or false to configure if crypto-sniper should monitor the live value and sell options after the swap transactions. 