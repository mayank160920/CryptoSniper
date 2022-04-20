# Getting Started

<!-- toc -->
* [Installation](#installation)
* [Quickstart](#quickstart)

<!-- tocstop -->

## Installation

Binaries are built using GitHub Actions and are available for Linux (x64, arm), macOS (x64, arm), and Windows (x64). Check the [![releases page](https://github.com/earteaga88/open-sniper/releases/)](https://github.com/earteaga88/open-sniper/releases/) for the latest version.

### Linux

Open Terminal.

`curl -L https://github.com/earteaga88/open-sniper/releases/latest/download/open-sniper-linux-x64 -o open-sniper`

`chmod +x open-sniper`

### macOS

Open Terminal.

`curl -L https://github.com/earteaga88/open-sniper/releases/latest/download/open-sniper-macos-x64 -o open-sniper`

`chmod +x open-sniper`

If you try to run `./open-sniper` at this point, you will get a message that macOS has blocked it.

To fix that, go to System Preferences and click Security & Privacy. Click the Open Anyway button in the General pane.

<img src="https://user-images.githubusercontent.com/100382691/156895989-cee7cc92-6c79-4c8d-81d6-f561d3e63df9.png" width="500">

Now you should be able to execute `./open-sniper` in your Terminal.

### Windows

Download the latest Windows release.

https://github.com/earteaga88/open-sniper/releases/latest/download/open-sniper-win-x64.exe

After downloading, you can optionally rename it from "open-sniper-win-64" to open-sniper. It will work either way.

## Quickstart

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