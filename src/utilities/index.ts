/* eslint-disable no-promise-executor-return */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable complexity */
import {homedir} from 'os'
import path from 'path'
import {
  formatGWei,
  getPrimaryGas,
} from '../helper/index'

export const getCoreLocation = (G: any) => {
  if (G) return path.join(homedir(), 'Documents', 'CryptoSniper-configs', G)
  return path.join(homedir(), 'Documents', 'CryptoSniper-configs')
}

export const validateSettings = (settings: any) => {
  return new Promise((resolve, reject) => {
    //const l = G.EVM_NODE.toUpperCase();
    //if (!['GA', 'SG'].includes(l) && !l.startsWith('HTTPS') && !l.startsWith('WSS')) return reject('Unsupported EVM Endpoint');
    if (!settings.private_key) return reject('Private Key not set! Run command or manually edit wallets.json.')
    // @ts-expect-error ts-migrate(2794) FIXME: Expected 1 arguments, but got 0. Did you forget to... Remove this comment to see the full error message
    return resolve()
  })
}

export const validateConfigs = async (configs: any, chain: any) => {
  const l = await getPrimaryGas()
  return new Promise((resolve, reject) => {
    if (configs.amt_mode.toLowerCase() !== 'usd' && configs.amt_mode.toLowerCase() !== 'eth') return reject('The `amt_mode` option must be `USD` or `ETH` only.')
    if (!parseFloat(configs.amount) || parseFloat(configs.amount) < 0) return reject('The `amount` option must be a positive number.')
    if (!parseInt(configs.slippage) || parseInt(configs.slippage) < 1 || parseInt(configs.slippage) > 100) return reject('The `slippage` option must be between 1 and 100.')
    if (!parseInt(configs.iteration) || parseInt(configs.iteration) < 1) return reject('The `iteration` option must be a positive number.')
    if (!parseFloat(configs.gas_price) && configs.gas_price !== '0' || parseFloat(configs.gas_price) < parseFloat(formatGWei(l)) && configs.gas_price !== '0') return reject('The `gas_price` option must be greater than ' + formatGWei(l) + '.')
    if (!parseFloat(configs.priority_gas) || parseFloat(configs.priority_gas) < 1 || parseFloat(configs.priority_gas) > parseFloat(formatGWei(l))) return reject('The `priority_gas` option must be greater than 1 and lesser than ' + formatGWei(l) + '.')
    if (configs.honeypot_check.toLowerCase() !== 'true' && configs.honeypot_check.toLowerCase() !== 'false') return reject('The `honeypot_check` option must be `true` or `false` only.')
    if (configs.block_severe_fee.toLowerCase() !== 'true' && configs.block_severe_fee.toLowerCase() !== 'false') return reject('The `block_severe_fee` option must be `true` or `false` only.')
    if (configs.block_severe_fee.toLowerCase() === 'true' && configs.honeypot_check.toLowerCase() === 'false') return reject('The `honeypot_check` must be `true` for `block_severe_fee` to work.')
    if (!parseFloat(configs.delay_execution) && configs.delay_execution !== '0' || parseFloat(configs.delay_execution) < 0) return reject('The `delay_execution` option must be a number.')
    if (!parseFloat(configs.delay_iteration) && configs.delay_iteration !== '0' || parseFloat(configs.delay_iteration) < 0) return reject('The `delay_iteration` option must be a number.')
    if (configs.rug_pull_check.toLowerCase() !== 'true' && configs.rug_pull_check.toLowerCase() !== 'false') return reject('The `rug_pull_check` option must be `true` or `false` only.')
    if (configs.sell_management.toLowerCase() !== 'true' && configs.sell_management.toLowerCase() !== 'false') return reject('The `sell_management` option must be `true` or `false` only.')
    if (configs.rug_pull_check.toLowerCase() === 'true' && (chain === 56 || chain === 43114 )) return reject('The `rug_pull_check` option is not supported on this endpoint.')
    if (configs.sell_management.toLowerCase() === 'true' && chain === 43114 ) return reject('The `sell_management` option is not supported on this endpoint.')
    // @ts-expect-error ts-migrate(2794) FIXME: Expected 1 arguments, but got 0. Did you forget to... Remove this comment to see the full error message
    return resolve()
  })
}

export const validateTelegram = (telegramAPI: any) => {
  return new Promise((resolve, reject) => {
    if (telegramAPI.api_id === '') return reject('The `api_id` is missing.')
    if (telegramAPI.api_hash === '') return reject('The `api_hash` is missing.')
    // @ts-expect-error ts-migrate(2794) FIXME: Expected 1 arguments, but got 0. Did you forget to... Remove this comment to see the full error message
    return resolve()
  })
}
