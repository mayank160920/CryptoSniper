# Commands
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

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v1.2.0/src/commands/autocomplete/index.ts)_

## `cryptosniper config [KEY] [VALUE]`

manage configuration

```
USAGE
  $ cryptosniper config [KEY] [VALUE] [-h] [-d]

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

_See code: [dist/commands/config.ts](https://github.com/blindgr2/cryptosniper/blob/v0.4.0/dist/commands/config.ts)_

## `cryptosniper help [COMMAND]`

Display help for cryptosniper.

```
USAGE
  $ cryptosniper help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for cryptosniper.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `cryptosniper nodes [KEY] [VALUE]`

manage EVM node configuration

```
USAGE
  $ cryptosniper nodes [KEY] [VALUE] [-h] [-d]

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

_See code: [dist/commands/nodes.ts](https://github.com/blindgr2/cryptosniper/blob/v0.4.0/dist/commands/nodes.ts)_

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

_See code: [dist/commands/start.ts](https://github.com/blindgr2/cryptosniper/blob/v0.4.0/dist/commands/start.ts)_

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

_See code: [dist/commands/wallet.ts](https://github.com/blindgr2/cryptosniper/blob/v0.4.0/dist/commands/wallet.ts)_
<!-- commandsstop -->
