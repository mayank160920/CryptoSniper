# Commands
<!-- commands -->
* [`crypto-sniper autocomplete [SHELL]`](#crypto-sniper-autocomplete-shell)
* [`crypto-sniper config [KEY] [VALUE]`](#crypto-sniper-config-key-value)
* [`crypto-sniper help [COMMAND]`](#crypto-sniper-help-command)
* [`crypto-sniper nodes [KEY] [VALUE]`](#crypto-sniper-nodes-key-value)
* [`crypto-sniper start`](#crypto-sniper-start)
* [`crypto-sniper wallet [KEY] [VALUE]`](#crypto-sniper-wallet-key-value)

## `crypto-sniper autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ crypto-sniper autocomplete [SHELL] [-r]

ARGUMENTS
  SHELL  shell type

FLAGS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

DESCRIPTION
  display autocomplete installation instructions

EXAMPLES
  $ crypto-sniper autocomplete

  $ crypto-sniper autocomplete bash

  $ crypto-sniper autocomplete zsh

  $ crypto-sniper autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v1.2.0/src/commands/autocomplete/index.ts)_

## `crypto-sniper config [KEY] [VALUE]`

manage configuration

```
USAGE
  $ crypto-sniper config [KEY] [VALUE] [-h] [-d]

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

_See code: [dist/commands/config.ts](https://github.com/blindgr2/crypto-sniper/blob/v0.4.0/dist/commands/config.ts)_

## `crypto-sniper help [COMMAND]`

Display help for crypto-sniper.

```
USAGE
  $ crypto-sniper help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for crypto-sniper.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `crypto-sniper nodes [KEY] [VALUE]`

manage EVM node configuration

```
USAGE
  $ crypto-sniper nodes [KEY] [VALUE] [-h] [-d]

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

_See code: [dist/commands/nodes.ts](https://github.com/blindgr2/crypto-sniper/blob/v0.4.0/dist/commands/nodes.ts)_

## `crypto-sniper start`

run bot

```
USAGE
  $ crypto-sniper start

DESCRIPTION
  run bot

EXAMPLES
  $ crypto-sniper start
```

_See code: [dist/commands/start.ts](https://github.com/blindgr2/crypto-sniper/blob/v0.4.0/dist/commands/start.ts)_

## `crypto-sniper wallet [KEY] [VALUE]`

add or remove wallet

```
USAGE
  $ crypto-sniper wallet [KEY] [VALUE] [-h] [-d]

ARGUMENTS
  KEY    (private_key|additional_private_keys)
  VALUE  value

FLAGS
  -d, --delete  delete?
  -h, --help    show CLI help

DESCRIPTION
  add or remove wallet
```

_See code: [dist/commands/wallet.ts](https://github.com/blindgr2/crypto-sniper/blob/v0.4.0/dist/commands/wallet.ts)_
<!-- commandsstop -->
