import BN from 'bn.js'
import net from 'net'
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'node... Remove this comment to see the full error message
import emoji from 'node-emoji'
import {
  getPrimary,
  getSecondary,
} from '../ethereum/index'

let primary: any
let secondary: any

export const initializeHelper = () => {
  return new Promise(G => {
    primary = getPrimary()
    secondary = getSecondary()
    // @ts-expect-error ts-migrate(2794) FIXME: Expected 1 arguments, but got 0. Did you forget to... Remove this comment to see the full error message
    return G()
  })
}

export const getUserAddress = (G: any) => primary.eth.accounts.privateKeyToAccount(G).address
export const formatEther = (G: any, D?: any) => {
  return primary.utils.fromWei(G.toString(), D)
}

export const formatWei = (G: any, D: any) => {
  return new BN(primary.utils.toWei(G, D))
}

export const formatGWei = (G: any) => {
  return Number(formatEther(G, 'gwei')).toFixed(2)
}

export const getPrimaryGas = async () => {
  const G = new BN(await primary.eth.getGasPrice())
  return G.mul(new BN('125')).div(new BN('100'))
}

export const getSecondaryGas = async () => {
  const G = new BN(await secondary.eth.getGasPrice())
  return G.mul(new BN('125')).div(new BN('100'))
}

export const getPrimaryBlock = async () => {
  return await primary.eth.getBlockNumber()
}

export const getSecondaryBlock = async () => {
  return await secondary.eth.getBlockNumber()
}

export const runPrimaryLatencyTests = () => {
  return new Promise(G => {
    const D = primary._provider.url || ((primary._provider.host || null))
    runLatencyTests(D).then(J => {
      // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
      return G(J.min)
    })
  })
}

export const runSecondaryLatencyTests = () => {
  return new Promise(resolve => {
    const D = secondary._provider.url || ((secondary._provider.host || null))
    runLatencyTests(D).then(J => {
      // @ts-expect-error ts-migrate(2571) FIXME: Object is of type 'unknown'.
      return resolve(J.min)
    })
  })
}

const runLatencyTests = (node: any) => {
  return new Promise(resolve => {
    let iteration = 0

    const tests: any = []

    const run = () => {
      const client = new net.Socket()
      const start = process.hrtime()
      const host = new URL(node).hostname
      const port = new URL(node).port ? Number(new URL(node).port) : 443

      client.connect(port, host, () => {
        const end = process.hrtime(start)
        const duration = (end[0] * 1000000000 + end[1]) / 1000000

        tests.push({
          seq: iteration,
          time: duration,
        })

        client.destroy()
        iteration++
        result()
      })

      client.on('error', end => {
        tests.push({
          seq: iteration,
          time: 'error',
          error: end,
        })

        client.destroy()
        iteration++
        result()
      })

      client.setTimeout(1500, () => {
        tests.push({
          seq: iteration,
          time: 'error',
          error: 'timeout',
        })

        client.destroy()
        iteration++
        result()
      })
    }

    const result = () => {
      if (iteration < 10) run()
      else return resolve({
        max: tests.reduce((client: number, start: { time: number }) => client > start.time ? client : start.time, tests[0].time),
        min: tests.reduce((client: number, start: { time: number }) => client < start.time ? client : start.time, tests[0].time),
      })
    }

    run()
  })
}

export const signThenSendPrimaryTxn = (G: any, D: any) => signThenSendTxn(primary, G, D)
export const signThenSendSecondaryTxn = (G: any, D: any) => signThenSendTxn(secondary, G, D)

const signThenSendTxn = (G: any, D: any, J: any) => {
  return new Promise((resolve, reject) => {
    G.eth.accounts.signTransaction(D, J, (u: any, E: any) => {
      if (!u && E.rawTransaction) G.eth.sendSignedTransaction(E.rawTransaction, (s: any, j: any) => !s ? resolve(j) : reject(s)).catch(() => {})
      else return reject(u)
    }).catch(() => {})
  })
}

export const isPrimaryContract = (G: any) => isContract(primary, G)
export const isSecondaryContract = (G: any) => isContract(secondary, G)

const isContract = (G: any, D: any) => {
  return new Promise((resolve, reject) => {
    if (G.utils.isAddress(D)) G.eth.getCode(D).then((X: any) => {
      // @ts-expect-error ts-migrate(2794) FIXME: Expected 1 arguments, but got 0. Did you forget to... Remove this comment to see the full error message
      if (X !== '0x') return resolve()
      return reject()
    })
    else return reject()
  })
}

export const numberWithCommas = (G: any) => {
  return G.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
}

let regexMessageForCa_memory: any

export const regexMessageForCa = (G: any, D = []) => {
  return new Promise(resolve => {
    const l = {
      zero: '0',
      one: '1',
      two: '2',
      three: '3',
      four: '4',
      five: '5',
      six: '6',
      seven: '7',
      eight: '8',
      nine: '9',
    }

    for (let p = 0; p <= Object.keys(l).length - 1; p++) {
      G = G.replace(new RegExp(Object.keys(l)[p], 'gi'), Object.values(l)[p])
    }

    G = G.replace(/[^\da-fx]/gi, '').toLowerCase()
    const pattern1 = /outputcurrency=0x([\da-f]{40})\s?/i
    const pattern2 = /tokens\/0x([\da-f]{40})\s?/i
    const pattern3 = /0x([\da-f]{40})\s?/i
    const pattern4 = /0x([\da-f]+)\s?/i
    const pattern5 = /[\da-f]+\s?/i
    let match: string
    let Q
    if (pattern1.test(G)) {
      match = '0x' + G.match(pattern1)[1]
      regexMessageForCa_memory = ''
    } else {
      if (pattern2.test(G)) {
        match = '0x' + G.match(pattern2)[1]
        regexMessageForCa_memory = ''
      } else {
        if (pattern3.test(G)) {
          match = '0x' + G.match(pattern3)[1]
          regexMessageForCa_memory = ''
        } else
          pattern4.test(G) && (regexMessageForCa_memory = '0x' + G.match(s)[1], Q = regexMessageForCa_memory)
      }
    }

    if (regexMessageForCa_memory && regexMessageForCa_memory !== Q && pattern5.test(G)) {
      regexMessageForCa_memory += G.match(pattern5)[0]
      if (regexMessageForCa_memory.length === 42) match = regexMessageForCa_memory
    }

    // @ts-expect-error ts-migrate(2339) FIXME: Property 'toLowerCase' does not exist on type 'nev... Remove this comment to see the full error message
    match && (D.findIndex(U => match.toLowerCase() === U.toLowerCase()) === -1 || match.toLowerCase() === '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82') && isPrimaryContract(match).then(() => resolve(match)).catch(() => {
      regexMessageForCa_memory = ''
    })
  })
}

export const regexFastestAlertsMessage = (G: any, D: any) => {
  return new Promise(resolve => {
    const l = new RegExp(emoji.get('red_circle'))
    const X = /Liquidity(.*)BNB/i
    const u = /[\d.]+%(.*)buy(.*)/i
    const E = /[\d.]+%(.*)sell(.*)/i
    const s = /[\d.]+/i

    if (l.test(G) && X.test(G) && u.test(G) && E.test(G)) {
      let j = 0
      const x = G.match(X)[1]
      if (s.test(x)) j = parseFloat(x.match(s)[0])
      let Q = 0
      const [p] = G.match(u)
      if (s.test(p)) Q = parseFloat(p.match(s)[0])
      let U = 0
      const [z] = G.match(E)
      if (s.test(z)) U = parseFloat(z.match(s)[0])
      j >= D.minLiq && j <= D.maxLiq && Q >= D.minTax && Q <= D.maxTax && U >= D.minTax && U <= D.maxTax && regexMessageForCa(G).then(O => resolve(O))
    }
  })
}

export const getDeadline = () => {
  return Math.round(new Date(new Date().getTime() + 600000).getTime() / 1000)
}

export const maxUint256 = () => '115792089237316195423570985008687907853269984665640564039457584007913129639935'
