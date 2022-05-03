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
  KEY    (amt_mode|amount|slippage|iteration|gas_price|priority_gas|honeypot_check|block_severe_fee|delay_execution|dela
         y_iteration|rug_pull_check|sell_management|telegram.api_id|telegram.api_hash)
  VALUE  value

FLAGS
  -d, --delete  delete?
  -h, --help    show CLI help

DESCRIPTION
  manage configuration
```

_See code: [dist/commands/config.ts](https://github.com/earteaga88/defi-sniper/blob/v0.4.0/dist/commands/config.ts)_

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
  KEY    (eth.websockets|eth.rpc|eth_rinkeby.websockets|eth_rinkeby.rpc|bsc.websockets|bsc.rpc|matic.websockets|matic.rp
         c|ftm.websockets|ftm.rpc|kcs.websockets|kcs.rpc|avax.websockets|avax.rpc)
  VALUE  value

FLAGS
  -d, --delete  delete?
  -h, --help    show CLI help

DESCRIPTION
  manage EVM node configuration
```

_See code: [dist/commands/nodes.ts](https://github.com/earteaga88/defi-sniper/blob/v0.4.0/dist/commands/nodes.ts)_

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

_See code: [dist/commands/start.ts](https://github.com/earteaga88/defi-sniper/blob/v0.4.0/dist/commands/start.ts)_

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

_See code: [dist/commands/wallet.ts](https://github.com/earteaga88/defi-sniper/blob/v0.4.0/dist/commands/wallet.ts)_
<!-- commandsstop -->
