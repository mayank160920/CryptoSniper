# Getting Started

<!-- toc -->
* [Installation](#installation)
* [Quickstart](#quickstart)

<!-- tocstop -->

## Installation

Binaries are built using GitHub Actions and are available for Linux (x64, arm), macOS (x64, arm), and Windows (x64). Check the [![releases page](https://github.com/blindgr2/crypto-sniper/releases/)](https://github.com/blindgr2/crypto-sniper/releases/) for the latest version.

### Linux

Open Terminal.

`curl -L https://github.com/blindgr2/crypto-sniper/releases/latest/download/crypto-sniper-linux-x64 -o crypto-sniper`

`chmod +x crypto-sniper`

### macOS

Open Terminal.

`curl -L https://github.com/blindgr2/crypto-sniper/releases/latest/download/crypto-sniper-macos-x64 -o crypto-sniper`

`chmod +x crypto-sniper`

If you try to run `./crypto-sniper` at this point, you will get a message that macOS has blocked it.

To fix that, go to System Preferences and click Security & Privacy. Click the Open Anyway button in the General pane.

<img src="https://user-images.githubusercontent.com/100382691/156895989-cee7cc92-6c79-4c8d-81d6-f561d3e63df9.png" width="500">

Now you should be able to execute `./crypto-sniper` in your Terminal.

### Windows

Download the latest Windows release.

https://github.com/blindgr2/crypto-sniper/releases/latest/download/crypto-sniper-win-x64.exe

After downloading, you can optionally rename it from "crypto-sniper-win-64" to crypto-sniper. It will work either way.

## Quickstart

### Interactive Mode

Simply running crypto-sniper by double clicking will start it in interactive mode.

### CLI Mode

In Terminal (Linux/macOS) or CMD prompt (Windows) change your directory to where you downloaded crypto-sniper.

` cd ~/Downloads`

Configure your wallet by using the CLI or by editing the ~/Documents/crypto-sniper-cofigs/wallets.json file.

`./crypto-sniper wallet private_key [paste key]`

Start crypto-sniper.

`./crypto-sniper start`

I'm actively working on adding more cli commands. See the full list here: [Commands](#commands)