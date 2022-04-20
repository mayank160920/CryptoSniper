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

_See code: [dist/commands/config.ts](https://github.com/earteaga88/open-sniper/blob/v0.4.0/dist/commands/config.ts)_

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

_See code: [dist/commands/nodes.ts](https://github.com/earteaga88/open-sniper/blob/v0.4.0/dist/commands/nodes.ts)_

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

_See code: [dist/commands/start.ts](https://github.com/earteaga88/open-sniper/blob/v0.4.0/dist/commands/start.ts)_

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

_See code: [dist/commands/wallet.ts](https://github.com/earteaga88/open-sniper/blob/v0.4.0/dist/commands/wallet.ts)_
<!-- commandsstop -->
