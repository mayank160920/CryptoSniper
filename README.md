<a name="readme-top"></a>
<div align="center">

[![Release][release-shield]][release-url]
[![Downloads][downloads-shield]]()
[![Workflow][workflow-shield]][workflow-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![Telegram][telegram-shield]][telegram-url]

[![Open-Source][opensource-shield]]()
[![Built With Love][love-shield]]()

</div>
<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url] -->

<br />
<div align="center">
  <!-- <a href="https://github.com/blindgr2/CryptoSniper">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

  <h3 align="center">CryptoSniper Community Edition</h3>

  <p align="center">
    Multi-chain defi crypto sniper written in typescript/javascript. Fastest method of sniping with auto-sell and rug prevention features. Mempool and manual sniping.
     <!--  <br />
    <a href="https://github.com/blindgr2/CryptoSniper"><strong>Explore the docs »</strong></a> -->
    <br />
    <br />
    <a href="https://github.com/blindgr2/CryptoSniper/issues">Report Bug</a>
    ·
    <a href="https://github.com/blindgr2/CryptoSniper/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-cryptosniper-community-edition">About CryptoSniper Community Edition</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#fair-use-act-disclaimer">Fair Use Act Disclaimer</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About CryptoSniper Community Edition

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

### Features
* Telegram Sniper
* Mempool Sniper
* Instant Sniper
* CoinMarketCap/CoinGecko Listing Sniper
* PancakeSwap Prediction Bot
* DxSale/PinkSale Presale Bot

### Supported Blockchains
* Ethereum
* Cronos
* Binance Smart Chain
* Polygon (Matic)
* Fantom Opera
* KCC
* Avalanche

### Exchanges
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

<hr>

### CryptoSniper Pro - Coming Soon!
* Rebuilt from the ground up for optimal performance
* Cross-platform graphical user interface (GUI)
* Multi-chain portfolio tracking
* Multiple wallets
* Buy/sell management
* Reach out to @blindgr on telegram for wait list spot and beta testing opportunities

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

[![javascript][javascript-shield]]()
[![typescript][typescript-shield]]()
[![oclif][oclif-shield]][oclif-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Installation

Binaries are available for Linux (x64, arm), macOS (x64, arm), and Windows (x64). Check the [releases page](https://github.com/blindgr2/CryptoSniper/releases/) for the latest version.

Releases are built and published using [Github Actions](https://github.com/blindgr2/CryptoSniper/actions/workflows/build.yml) for full transparency.

SHA256 checksums are also provided to verify authenticity. **DO NOT DOWNLOAD FROM ANY OTHER SOURCE OR FORK EXCEPT THIS** [REPO](https://github.com/blindgr2/CryptoSniper)!

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


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

### Interactive Mode

Simply running CryptoSniper by double clicking will start it in interactive mode.

### CLI Mode

In Terminal (Linux/macOS) or CMD prompt (Windows) change your directory to where you downloaded CryptoSniper.

` cd ~/Downloads`

Configure your wallet by using the CLI or by editing the ~/Documents/CryptoSniper-configs/wallets.json file.

`./cryptosniper wallet private_key [paste key]`

Start CryptoSniper.

`./cryptosniper start`

<hr>

### Settings

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

<hr>

<details><summary><b>View All CLI Commands</b></summary>

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

_See code: [dist/commands/config.ts](https://github.com/blindgr2/CryptoSniper/blob/v1.2.0/src/commands/config.ts)_

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

_See code: [dist/commands/nodes.ts](https://github.com/blindgr2/CryptoSniper/blob/v1.2.0/src/commands/nodes.ts)_

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

_See code: [dist/commands/start.ts](https://github.com/blindgr2/CryptoSniper/blob/v1.2.0/src/commands/start.ts)_

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

_See code: [dist/commands/wallet.ts](https://github.com/blindgr2/CryptoSniper/blob/v1.2.0/src/commands/wallet.ts)_
<!-- commandsstop -->
</details>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

<!-- - [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
    - [ ] Chinese
    - [ ] Spanish -->

See the [open issues](https://github.com/blindgr2/CryptoSniper/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
* Install dependencies.
  ```sh
  npm install
  ```
* Compile
  ```sh
  npm run prepack && npm run pkg
  ```
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Telegram- [@blindgr](https://t.me/blindgr)

Telegram Community- [@deficoders](https://t.me/deficoders)

Project Link: [https://github.com/blindgr2/CryptoSniper](https://github.com/blindgr2/CryptoSniper)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FAIRUSE -->
## Fair Use Act Disclaimer

This software is for educational purposes only.

### Fair Use

Copyright Disclaimer under section 107 of the Copyright Act of 1976, allowance is made for “fair use” for purposes such as criticism, comment, news reporting, teaching, scholarship, education and research.

Fair use is a use permitted by copyright statute that might otherwise be infringing.

### Fair Use Definition

Fair use is a doctrine in United States copyright law that allows limited use of copyrighted material without requiring permission from the rights holders, such as commentary, criticism, news reporting, research, teaching or scholarship. It provides for the legal, non-licensed citation or incorporation of copyrighted material in another author’s work under a four-factor balancing test.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<div align="center">

[![Winter is Coming][winteriscoming-shield]]()

[![Works on my Machine!][worksonmymachine-shield]]()

</div>

<!-- ACKNOWLEDGMENTS
Acknowledgments
Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!
* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)
<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/blindgr2/CryptoSniper.svg?style=for-the-badge
[contributors-url]: https://github.com/blindgr2/CryptoSniper/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/blindgr2/CryptoSniper.svg?style=for-the-badge
[forks-url]: https://github.com/blindgr2/CryptoSniper/network/members
[stars-shield]: https://img.shields.io/github/stars/blindgr2/CryptoSniper.svg?style=for-the-badge
[stars-url]: https://github.com/blindgr2/CryptoSniper/stargazers
[issues-shield]: https://img.shields.io/github/issues/blindgr2/CryptoSniper.svg?style=for-the-badge
[issues-url]: https://github.com/blindgr2/CryptoSniper/issues
[release-shield]: https://img.shields.io/github/v/release/blindgr2/CryptoSniper.svg?style=for-the-badge
[release-url]: https://github.com/blindgr2/CryptoSniper/releases/latest
[downloads-shield]: https://img.shields.io/github/downloads/blindgr2/CryptoSniper/total.svg?style=for-the-badge
[workflow-shield]: https://img.shields.io/github/workflow/status/blindgr2/CryptoSniper/Build%20Binaries.svg?style=for-the-badge
[workflow-url]: https://github.com/blindgr2/CryptoSniper/actions/workflows/build.yml
[license-shield]: https://img.shields.io/github/license/blindgr2/CryptoSniper.svg?style=for-the-badge
[license-url]: https://github.com/blindgr2/CryptoSniper/blob/master/LICENSE.txt
[telegram-shield]: https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white
[telegram-url]: https://t.me/deficoders
[oclif-shield]: https://img.shields.io/badge/cli-oclif-brightgreen.svg?style=for-the-badge
[oclif-url]: https://oclif.io/
[love-shield]: https://ForTheBadge.com/images/badges/built-with-love.svg
[javascript-shield]: https://forthebadge.com/images/badges/made-with-javascript.svg
[typescript-shield]: https://forthebadge.com/images/badges/made-with-typescript.svg
[opensource-shield]: https://forthebadge.com/images/badges/open-source.svg
[winteriscoming-shield]: https://forthebadge.com/images/badges/winter-is-coming.svg
[worksonmymachine-shield]: https://forthebadge.com/images/badges/works-on-my-machine.svg
