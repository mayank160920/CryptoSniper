# Features

<!-- toc -->
* [Supported Blockchains](#supported-blockchains)
* [Features](#features)
<!-- tocstop -->


## Supported Blockchains

* Ethereum
* Binance Smart Chain
* Polygon (Matic)
* Fantom Opera
* KCC
* Avalanche

## Fair Launch Sniping Tools
### Availability
* Uniswap
* SushiSwap
* PancakeSwap
* ApeSwap
* QuickSwap
* SpookySwap
* SpiritSwap
* KoffeeSwap
* KuSwap
* Trader Joe

### Telegram Scanner
Listens and scans for new messages within the targeted Telegram group or channel for contract address, and automatically execute transaction as soon as a match is detected.
Our custom filtering and sensitivity system automatically determine if a message sent is a contract address; whether if it is sent as swap link, or the contract address itself.
The Telegram Scanner can also filter contract address sent hidden in media file, and sent separated in parts (e.g. A + C), both single or multiple message.
Messages from popular Telegram bots such as MissRose are automatically filtered out, so you don't have to worry that you buy from Scammers with CA in their names.

### Mempool Sniper

Mempool sniper listens for pending transactions on the chain and snipes as soon as the liquidity has been added.

### Manual Input Address

In scenarios where you already have the contract address, you can set pending orders with Manual Input Address, and as soon as the liquidity has been added, or trading has been enabled, open-sniper will execute the transaction.

## CoinMarketCap/CoinGecko Sniper
### Fastest Alerts Telegram

Snipe listings as soon as it is posted to the CoinMarketCap or CoinGecko Fastest Alerts Telegram channel.
This works as a continuous loop, and it will only snipe listings with Red Circled (received insider info) and with BNB as its primary liquidity.
You can also configure the minimum and maximum liquidity/tax for the snipe, so you won't be buying into something with already 1500 BNB in liquidity, and hoping for a 2x.
All the standard transactional configuration will be used, except for the RUG_PULL_CHECK and SELL_MANAGEMENT option.

## Prediction Bot

The Prediction of PancakeSwap and Candle Genie is a gambling ecosystem by predicting the price of BTC/USDT, BNB/USDT, or ETH/USDT will be bullish (up) or bearish (down) in the next 5 minutes.

There are 3 betting strategies available in Prediction Bot:

- Only Streak Bets - This will wait for a consecutive result of the previous 2 rounds, then continue betting the same result until the streak is broken.
- Standard + Streak Bets - This will use a methodology to calculate the mathematical expectation and bet strategically, combined with, and prioritizing the streak strategy.
- SS + Martingale Strategy - This will include martingale betting strategy with Standard + Streak Bets. This strategy will double up the bet amount on every lost bet, and only reset itself on a win.

## DxSale/PinkSale Presale Bot

Snipe listings on both DxSale and PinkSale.


