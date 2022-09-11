<div align="center">
      <p align="center">

Open-source repo for **CryptoSniper** community edition

Telegram support: [![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/+Ef0sqYpaF7c0ZWNh)

![GitHub release (latest by date)](https://img.shields.io/github/v/release/blindgr2/CryptoSniper) [![Github All Releases](https://img.shields.io/github/downloads/blindgr2/CryptoSniper/total.svg)]() [![build](https://github.com/blindgr2/CryptoSniper/actions/workflows/build.yml/badge.svg)](https://github.com/blindgr2/CryptoSniper/actions/workflows/build.yml)
[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)



    
     
</p>
</div>

<hr>

## Supported Blockchains
* Ethereum
* Cronos
* Binance Smart Chain
* Polygon (Matic)
* Fantom Opera
* KCC
* Avalanche

## Exchanges
* Uniswap
* SushiSwap
* Mad Meerkat Finance
* PancakeSwap
* ApeSwap
* QuickSwap
* SpookySwap
* SpiritSwap
* KoffeeSwap
* KuSwap
* Trader Joe

## Features
* Telegram Sniper
* Mempool Sniper
* Instant Sniper
* CoinMarketCap/CoinGecko Listing Sniper
* PancakeSwap Prediction Bot
* DxSale/PinkSale Presale Bot

<hr>

## CryptoSniper Pro - Coming Soon
* Rebuilt from the ground up for optimal performance
* Cross-platform graphical user interface (GUI)
* Multi-chain portfolio tracking
* Multiple wallets
* Buy/sell management
* Coming soon. Reach out to @blindgr on telegram for wait list.

<hr>

## Documentation 

See below (expand dropdowns)

<details><summary><b>Installation</b></summary>

## Installation
Binaries are available for Linux (x64, arm), macOS (x64, arm), and Windows (x64). Check the [releases page](https://github.com/blindgr2/CryptoSniper/releases/) for the latest version.


<details><summary>Linux</summary>

Open Terminal.

`curl -L https://github.com/blindgr2/CryptoSniper/releases/latest/download/cryptosniper-linux-x64 -o cryptosniper`

`chmod +x cryptosniper`
</details>

<details><summary>macOS</summary>

Open Terminal.

`curl -L https://github.com/blindgr2/CryptoSniper/releases/latest/download/cryptosniper-macos-x64 -o cryptosniper`

`chmod +x cryptosniper`

If you try to run `./cryptosniper` at this point, you will get a message that macOS has blocked it.

To fix that, go to System Preferences and click Security & Privacy. Click the Open Anyway button in the General pane.

<img src="https://user-images.githubusercontent.com/100382691/156895989-cee7cc92-6c79-4c8d-81d6-f561d3e63df9.png" width="500">

Now you should be able to execute `./cryptosniper` in your Terminal.
</details>

<details><summary>Windows</summary>

Download the latest Windows release.

https://github.com/blindgr2/CryptoSniper/releases/latest/download/cryptosniper-win-x64.exe

After downloading, you can optionally rename it from "cryptosniper-win-64" to cryptosniper. It will work either way.

**If you get a message that CryptoSniper was blocked by SmartScreen/Defender:**

Option 1:
- Click "More Info"
- Click the "Run anyway" button.

Option 2:
- Right click on CryptoSniper and go to properties
- Check the box that says "unblock" and click OK.

You should now be able to run CryptoSniper.
</details>

</details>

<hr>

<details><summary><b>Quickstart</b></summary>

### Interactive Mode

Simply running CryptoSniper by double clicking will start it in interactive mode.

### CLI Mode

In Terminal (Linux/macOS) or CMD prompt (Windows) change your directory to where you downloaded CryptoSniper.

` cd ~/Downloads`

Configure your wallet by using the CLI or by editing the ~/Documents/CryptoSniper-configs/wallets.json file.

`./cryptosniper wallet private_key [paste key]`

Start CryptoSniper.

`./cryptosniper start`
</details>

<hr>

<details><summary><b>Settings</b></summary>

A CryptoSniper-configs folder will be created in your Documents. Inside you will find three JSON files that contain various settings.

<details><summary>wallets.json</summary>

`private_key`

Enter the private key (64 characters, not the seed phrase) of your wallet that you wish to use CryptoSniper with. 

`additional_private_keys`

Reserved for future use.

</details>

<details><summary>config.json</summary>

The configs.json file is located in the CryptoSniper-configs folder in your Documents.

`amt_mode`

Use USD, ETH, or TKN to configure the mode of the AMOUNT option. By setting USD will value in U.S. dollars, ETH will value in the native Blockchain token (e.g. ETH, BNB, etc.), and TKN will be in the amount of tokens itself.

When using TKN mode, please make sure you have more than enough native balance to prevent "insufficient funds" error, as CryptoSniper is unable to estimate the native spending.

`amount`

Enter the amount for each of your transaction.

`slippage`

Enter the BURN (not price movement) tolerance for your transaction.

E.g. If you were supposed to receive 1000 tokens from the swap, and have SLIPPAGE configured at 75, minimally you must receive 250 tokens back, otherwise it will be rejected by the exchange router.

It is highly recommended to keep this configured between 98 and 100.

`mempool_block_delay`

The number of blocks to wait after the addLiquidity transaction is detected.

`iteration`

Enter the number of iteration you wish to perform. Each iteration will weight the AMOUNT parameter. E.g. If you have 0.25 in AMOUNT, and 2 in ITERATION, CryptoSniper will perform 0.25 ETH x 2, totaling 0.5 ETH.

`gas_price`

This is to configure the gas price of your transactions. You may also use 0 for CryptoSniper to calculate the gas automatically; 2x of the current network gas.

`priority_gas`

This is to configure the priority gas of your Ethereum Mainnet transactions.

`honeypot_check`

Use true or false to configure if CryptoSniper should scan the contract address with RugDoc's Honeypot Checker before executing the swap transaction.

`block_severe_fee`

Use true or false to configure if CryptoSniper should block severely high trading fee (over 50%) tokens. The HONEYPOT_CHECK option must be enabled for this to work.

`delay_execution`

This configures the number of block to skip before executing the swap transaction.

`delay_iteration`

This configures the delay in seconds between each iteration.

`rug_pull_check`

Use true or false to configure if CryptoSniper should listen to removeLiquidity() related transaction. If such a transaction is detected, CryptoSniper will TRY to front-run the transaction. 

`sell_management`

Use true or false to configure if CryptoSniper should monitor the live value and sell options after the swap transactions. 

</details>

<details><summary>nodeConfig.json</summary>

This file contains the websocket and RPC node URLs for each blockchain.

</details>

<details><summary>Telegram Settings</summary>

The telegram.json file is located in the CryptoSniper-configs folder in your Documents.

In order for Telegram Scanner and CMC/CG Fastest Alerts Telegram to work, CryptoSniper needs to log in to your Telegram account.

To do so, you would need to provide API parameters of your account. Follow these steps:

* Log in to Telegram Core

* Go to API Development Tools and fill in the form as follows:
    * App title - deficli
    * Short name - deficli
    * URL -
    * Platform - Other
    * Description -

* Click on the "Create application" button, and you should see the app configuration.

* Copy the app_id and app_hash, and paste it to your telegram.json file.

</details>

</details>

<hr>

<details><summary><b>CLI Commands</b></summary>

<!-- commands -->
* [`cryptosniper autocomplete [SHELL]`](#cryptosniper-autocomplete-shell)
* [`cryptosniper config [KEY] [VALUE]`](#cryptosniper-config-key-value)
* [`cryptosniper help [COMMAND]`](#cryptosniper-help-command)
* [`cryptosniper nodes [KEY] [VALUE]`](#cryptosniper-nodes-key-value)
* [`cryptosniper start`](#cryptosniper-start)
* [`cryptosniper wallet [KEY] [VALUE]`](#cryptosniper-wallet-key-value)

## `cryptosniper autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ cryptosniper autocomplete [SHELL] [-r]

ARGUMENTS
  SHELL  shell type

FLAGS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

DESCRIPTION
  display autocomplete installation instructions

EXAMPLES
  $ cryptosniper autocomplete

  $ cryptosniper autocomplete bash

  $ cryptosniper autocomplete zsh

  $ cryptosniper autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v1.3.0/src/commands/autocomplete/index.ts)_

## `cryptosniper config [KEY] [VALUE]`

manage configuration

```
USAGE
  $ cryptosniper config [KEY] [VALUE] [-h] [-d]

ARGUMENTS
  KEY    (amt_mode|amount|slippage|mempool_block_delay|iteration|gas_price|priority_gas|honeypot_check|block_severe_fee|
         delay_execution|delay_iteration|rug_pull_check|sell_management|telegram.api_id|telegram.api_hash)
  VALUE  value

FLAGS
  -d, --delete  delete?
  -h, --help    show CLI help

DESCRIPTION
  manage configuration
```

_See code: [dist/commands/config.ts](https://github.com/blindgr2/CryptoSniper/blob/v1.1.4/dist/commands/config.ts)_

## `cryptosniper help [COMMAND]`

Display help for CryptoSniper.

```
USAGE
  $ cryptosniper help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for CryptoSniper.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `cryptosniper nodes [KEY] [VALUE]`

manage EVM node configuration

```
USAGE
  $ cryptosniper nodes [KEY] [VALUE] [-h] [-d]

ARGUMENTS
  KEY    (eth.websockets|eth.rpc|eth_rinkeby.websockets|eth_rinkeby.rpc|cro.websockets|cro.rpc|bsc.websockets|bsc.rpc|ma
         tic.websockets|matic.rpc|ftm.websockets|ftm.rpc|kcs.websockets|kcs.rpc|avax.websockets|avax.rpc)
  VALUE  value

FLAGS
  -d, --delete  delete?
  -h, --help    show CLI help

DESCRIPTION
  manage EVM node configuration
```

_See code: [dist/commands/nodes.ts](https://github.com/blindgr2/CryptoSniper/blob/v1.1.4/dist/commands/nodes.ts)_

## `cryptosniper start`

run bot

```
USAGE
  $ cryptosniper start

DESCRIPTION
  run bot

EXAMPLES
  $ cryptosniper start
```

_See code: [dist/commands/start.ts](https://github.com/blindgr2/CryptoSniper/blob/v1.1.4/dist/commands/start.ts)_

## `cryptosniper wallet [KEY] [VALUE]`

add or remove wallet

```
USAGE
  $ cryptosniper wallet [KEY] [VALUE] [-h] [-d]

ARGUMENTS
  KEY    (private_key|additional_private_keys)
  VALUE  value

FLAGS
  -d, --delete  delete?
  -h, --help    show CLI help

DESCRIPTION
  add or remove wallet
```

_See code: [dist/commands/wallet.ts](https://github.com/blindgr2/CryptoSniper/blob/v1.1.4/dist/commands/wallet.ts)_
<!-- commandsstop -->
</details>

<hr>

## Feature Requests & Bug Reporting

Please submit an issue to this repo and include as much information as possible. For feature requests, also reach out to me on Telegram with your idea. If I like it and can use it myself, I'll look into it. If not, we can negotiate a price for me to code it.

<hr>

**Contributors**

[![Contributors Display](https://badges.pufler.dev/contributors/blindgr2/CryptoSniper?size=50&padding=5&bots=true)](https://badges.pufler.dev)

<hr>

## Fair Use Act Disclaimer

This software is for educational purposes only.

### Fair Use

Copyright Disclaimer under section 107 of the Copyright Act of 1976, allowance is made for “fair use” for purposes such as criticism, comment, news reporting, teaching, scholarship, education and research.

Fair use is a use permitted by copyright statute that might otherwise be infringing.

### Fair Use Definition

Fair use is a doctrine in United States copyright law that allows limited use of copyrighted material without requiring permission from the rights holders, such as commentary, criticism, news reporting, research, teaching or scholarship. It provides for the legal, non-licensed citation or incorporation of copyrighted material in another author’s work under a four-factor balancing test.
