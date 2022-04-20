open-sniper
=================

An open-source defi sniper.

[![Node.js CI](https://github.com/earteaga88/open-sniper/actions/workflows/build.yml/badge.svg)](https://github.com/earteaga88/open-sniper/actions/workflows/build.yml)
[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)

**open-sniper** is free to download. 

This is a fork of defi-cli which was abandoned and removed from github. 

=================

**Donations**

Reach out to https://t.me/spacemonk88 on Telegram.

**Feature Requests** 

Reach out to me on Telegram with your idea. If I like it and can use it myself, I'll look into it. If not, we can negotiate a price for me to code it.

**Bugs**

Please submit an issue to this repo and include as much information as possible.

**Documenatation** 

https://earteaga88.github.io/open-sniper/


# Table of Contents
<!-- toc -->
* [Installation](#installation)
* [Quickstart](#quickstart)
* [Supported Blockchains](#supported-blockchains)
* [Features](#features)
* [Settings](#settings)
* [Commands](#commands)
<!-- tocstop -->

# Installation

For transparency, binaries are built using GitHub Actions and published directly to a release. (See Actions tab at the top of this repo)

This happens during the "Release" step of the builds. 

Binaries are available for Linux (x64, arm), macOS (x64, arm), and Windows (x64). Check the [releases page](https://github.com/earteaga88/open-sniper/releases/) for the latest version.

## Linux

Open Terminal.

`curl -L https://github.com/earteaga88/open-sniper/releases/latest/download/open-sniper-linux-x64 -o open-sniper`

`chmod +x open-sniper`

## macOS

Open Terminal.

`curl -L https://github.com/earteaga88/open-sniper/releases/latest/download/open-sniper-macos-x64 -o open-sniper`

`chmod +x open-sniper`

If you try to run `./open-sniper` at this point, you will get a message that macOS has blocked it.

To fix that, go to System Preferences and click Security & Privacy. Click the Open Anyway button in the General pane.

<img src="https://user-images.githubusercontent.com/100382691/156895989-cee7cc92-6c79-4c8d-81d6-f561d3e63df9.png" width="500">

Now you should be able to execute `./open-sniper` in your Terminal.

## Windows

Download the latest Windows release.

https://github.com/earteaga88/open-sniper/releases/latest/download/open-sniper-win-x64.exe

After downloading, you can optionally rename it from "open-sniper-win-64" to open-sniper. It will work either way.

**If you get a message that open-sniper was blocked by Windows:**
- Right click on open-sniper and go to properties
- Check the box that says "unblock" and click OK.

You should now be able to run open-sniper.

**Note:** VirusTotal is giving false positives on the Windows binary. THIS IS A FALSE POSITIVE and known issue with the 'pkg' npm package used to compile the code. See vercel/pkg#1540.

# Quickstart

### Interactive Mode

Simply running open-sniper by double clicking will start it in interactive mode.

### CLI Mode

In Terminal (Linux/macOS) or CMD prompt (Windows) change your directory to where you downloaded open-sniper.

` cd ~/Downloads`

Configure your wallet by using the CLI or by editing the ~/Documents/open-sniper-cofigs/wallets.json file.

`./open-sniper wallet private_key [paste key]`

Start open-sniper.

`./open-sniper start`

I'm actively working on adding more cli commands. See the full list here: [Commands](#commands)

# Supported Blockchains

* Ethereum
* Binance Smart Chain
* Polygon (Matic)
* Fantom Opera
* KCC
* Avalanche

# Features
### Fair Launch Sniping Tools
#### Availability
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

#### Telegram Scanner
Listens and scans for new messages within the targeted Telegram group or channel for contract address, and automatically execute transaction as soon as a match is detected.
Our custom filtering and sensitivity system automatically determine if a message sent is a contract address; whether if it is sent as swap link, or the contract address itself.
The Telegram Scanner can also filter contract address sent hidden in media file, and sent separated in parts (e.g. A + C), both single or multiple message.
Messages from popular Telegram bots such as MissRose are automatically filtered out, so you don't have to worry that you buy from Scammers with CA in their names.

#### Mempool Sniper

Mempool sniper listens for pending transactions on the chain and snipes as soon as the liquidity has been added.

#### Manual Input Address

In scenarios where you already have the contract address, you can set pending orders with Manual Input Address, and as soon as the liquidity has been added, or trading has been enabled, open-sniper will execute the transaction.

### CoinMarketCap/CoinGecko Sniper
#### Fastest Alerts Telegram

Snipe listings as soon as it is posted to the CoinMarketCap or CoinGecko Fastest Alerts Telegram channel.
This works as a continuous loop, and it will only snipe listings with Red Circled (received insider info) and with BNB as its primary liquidity.
You can also configure the minimum and maximum liquidity/tax for the snipe, so you won't be buying into something with already 1500 BNB in liquidity, and hoping for a 2x.
All the standard transactional configuration will be used, except for the RUG_PULL_CHECK and SELL_MANAGEMENT option.

### Prediction Bot

The Prediction of PancakeSwap and Candle Genie is a gambling ecosystem by predicting the price of BTC/USDT, BNB/USDT, or ETH/USDT will be bullish (up) or bearish (down) in the next 5 minutes.

There are 3 betting strategies available in Prediction Bot:

- Only Streak Bets - This will wait for a consecutive result of the previous 2 rounds, then continue betting the same result until the streak is broken.
- Standard + Streak Bets - This will use a methodology to calculate the mathematical expectation and bet strategically, combined with, and prioritizing the streak strategy.
- SS + Martingale Strategy - This will include martingale betting strategy with Standard + Streak Bets. This strategy will double up the bet amount on every lost bet, and only reset itself on a win.

### DxSale/PinkSale Presale Bot

Snipe listings on both DxSale and PinkSale.


# Settings

A open-sniper-configs folder will be created in your Documents. Inside you will find three JSON files that contain various settings.

* config.json
* nodeConfig.json
* wallets.json

## wallets.json

`private_key`

Enter the private key (64 characters, not the seed phrase) of your wallet that you wish to use open-sniper with. 

`additional_private_keys`

Reserved for future use.

## config.json

The configs.json file is located in the open-sniper-configs folder in your Documents.

`amt_mode`

Use USD, ETH, or TKN to configure the mode of the AMOUNT option. By setting USD will value in U.S. dollars, ETH will value in the native Blockchain token (e.g. ETH, BNB, etc.), and TKN will be in the amount of tokens itself.

When using TKN mode, please make sure you have more than enough native balance to prevent "insufficient funds" error, as open-sniper is unable to estimate the native spending.

`amount`

Enter the amount for each of your transaction.

`slippage`

Enter the BURN (not price movement) tolerance for your transaction.

E.g. If you were supposed to receive 1000 tokens from the swap, and have SLIPPAGE configured at 75, minimally you must receive 250 tokens back, otherwise it will be rejected by the exchange router.

It is highly recommended to keep this configured between 98 and 100.

`iteration`

Enter the number of iteration you wish to perform. Each iteration will weight the AMOUNT parameter. E.g. If you have 0.25 in AMOUNT, and 2 in ITERATION, open-sniper will perform 0.25 ETH x 2, totaling 0.5 ETH.

`gas_price`

This is to configure the gas price of your transactions. You may also use 0 for open-sniper to calculate the gas automatically; 2x of the current network gas.

`priority_gas`

This is to configure the priority gas of your Ethereum Mainnet transactions.

`honeypot_check`

Use true or false to configure if open-sniper should scan the contract address with RugDoc's Honeypot Checker before executing the swap transaction.

`block_severe_fee`

Use true or false to configure if open-sniper should block severely high trading fee (over 50%) tokens. The HONEYPOT_CHECK option must be enabled for this to work.

`delay_execution`

This configures the number of block to skip before executing the swap transaction.

`delay_iteration`

This configures the delay in seconds between each iteration.

`rug_pull_check`

Use true or false to configure if open-sniper should listen to removeLiquidity() related transaction. If such a transaction is detected, open-sniper will TRY to front-run the transaction. 

`sell_management`

Use true or false to configure if open-sniper should monitor the live value and sell options after the swap transactions. 

## nodeConfig.json

This file contains the websocket and RPC node URLs for each blockchain.

## Telegram

The telegram.json file is located in the open-sniper-configs folder in your Documents.

In order for Telegram Scanner and CMC/CG Fastest Alerts Telegram to work, open-sniper needs to log in to your Telegram account.

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

# Commands
<!-- commands -->
* [`open-sniper autocomplete [SHELL]`](#open-sniper-autocomplete-shell)
* [`open-sniper config [KEY] [VALUE]`](#open-sniper-config-key-value)
* [`open-sniper help [COMMAND]`](#open-sniper-help-command)
* [`open-sniper nodes [KEY] [VALUE]`](#open-sniper-nodes-key-value)
* [`open-sniper start`](#open-sniper-start)
* [`open-sniper wallet [KEY] [VALUE]`](#open-sniper-wallet-key-value)

## `open-sniper autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ open-sniper autocomplete [SHELL] [-r]

ARGUMENTS
  SHELL  shell type

FLAGS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

DESCRIPTION
  display autocomplete installation instructions

EXAMPLES
  $ open-sniper autocomplete

  $ open-sniper autocomplete bash

  $ open-sniper autocomplete zsh

  $ open-sniper autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v1.2.0/src/commands/autocomplete/index.ts)_

## `open-sniper config [KEY] [VALUE]`

manage configuration

```
USAGE
  $ open-sniper config [KEY] [VALUE] [-h] [-d]

ARGUMENTS
  KEY    (amt_mode|amount|slippage|iteration|gas_price|priority_gas|honeypot_check|block_severe_fee|delay_execution|dela
         y_iteration|rug_pull_check|sell_management|telegram.api_id|telegram.api_hash)
  VALUE  value

FLAGS
  -d, --delete  delete?
  -h, --help    show CLI help

DESCRIPTION
  manage configuration
```

_See code: [dist/commands/config.ts](https://github.com/earteaga88/open-sniper/blob/v0.4.1/dist/commands/config.ts)_

## `open-sniper help [COMMAND]`

Display help for open-sniper.

```
USAGE
  $ open-sniper help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for open-sniper.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `open-sniper nodes [KEY] [VALUE]`

manage EVM node configuration

```
USAGE
  $ open-sniper nodes [KEY] [VALUE] [-h] [-d]

ARGUMENTS
  KEY    (eth.websockets|eth.rpc|eth_rinkeby.websockets|eth_rinkeby.rpc|bsc.websockets|bsc.rpc|matic.websockets|matic.rp
         c|ftm.websockets|ftm.rpc|kcs.websockets|kcs.rpc|avax.websockets|avax.rpc)
  VALUE  value

FLAGS
  -d, --delete  delete?
  -h, --help    show CLI help

DESCRIPTION
  manage EVM node configuration
```

_See code: [dist/commands/nodes.ts](https://github.com/earteaga88/open-sniper/blob/v0.4.1/dist/commands/nodes.ts)_

## `open-sniper start`

run bot

```
USAGE
  $ open-sniper start

DESCRIPTION
  run bot

EXAMPLES
  $ open-sniper start
```

_See code: [dist/commands/start.ts](https://github.com/earteaga88/open-sniper/blob/v0.4.1/dist/commands/start.ts)_

## `open-sniper wallet [KEY] [VALUE]`

add or remove wallet

```
USAGE
  $ open-sniper wallet [KEY] [VALUE] [-h] [-d]

ARGUMENTS
  KEY    (private_key|additional_private_keys)
  VALUE  value

FLAGS
  -d, --delete  delete?
  -h, --help    show CLI help

DESCRIPTION
  add or remove wallet
```

_See code: [dist/commands/wallet.ts](https://github.com/earteaga88/open-sniper/blob/v0.4.1/dist/commands/wallet.ts)_
<!-- commandsstop -->
