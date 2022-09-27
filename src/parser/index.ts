import ora from 'ora'
import {
  checkForHoneypot,
} from '../components/fetch/index'
import {
  printHeading,
  printSubHeading,
} from '../console/index'
import {
  afterSwapMonitor,
  contributeToPresale,
  predictionBotMethodology,
  swapExactETHForTokens,
} from '../exchange/index'
import {
  isSecondaryContract,
} from '../helper/index'
import {
  fetchPresaleContract,
} from '../launchpad/index'

export const initializePresaleContract = (contractAddress: any, menuOption: number) => {
  return new Promise((J, l) => {
    isSecondaryContract(contractAddress).then(() => {
      fetchPresaleContract(contractAddress, menuOption).then(X => J(X)).catch(error => l(error))
    }).catch(() => l('Invalid Contract Address'))
  })
}

export const executePresaleContribution = async (userAddress: number, privateKey: number, presaleAddress: any, startTime: any, menuOption: number, configs: any, chain: any, amountsOut: any) => {
  printSubHeading('Blockchain Transaction')
  await contributeToPresale(userAddress, privateKey, presaleAddress, startTime, menuOption, configs, chain, amountsOut).catch(error => {
    throw error
  })
}

export const executeSniperSwap = async (userAddress: number, privateKey: number, contractAddress: any, configs: any, chain: any, exchange: any, menuSelection = 1) => {
  printHeading('Sniper Execution')

  if (configs.honeypot_check.toLowerCase() === 'true') {
    printSubHeading('RugDoc\'s Honeypot Token Checker')
    const spinner = ora({text: ('Checking'), spinner: 'aesthetic'}).start()
    await checkForHoneypot(contractAddress, configs.block_severe_fee.toLowerCase(), chain).then(Q => {
      spinner.stop()
      console.log(Q)
    }).catch(error => {
      spinner.stop()
      console.log(error)
      throw 'Rejected by Honeypot Token Checker'
    })
  }

  printSubHeading('Blockchain Transaction')
  await swapExactETHForTokens(userAddress, privateKey, contractAddress, configs, chain, exchange).catch(error => {
    throw error
  }), printSubHeading('Monitoring Transaction'), await afterSwapMonitor(userAddress, privateKey, contractAddress, configs, chain, exchange, menuSelection).catch(error => {
    throw error
  })
}

export const executePredictionBot = async (userAddress: number, privateKey: number, configs: any, menuOption: number, menuSelection: any) => {
  printSubHeading('Blockchain Transaction')
  console.log('Press the <CTRL+C> key to quit.\n')
  await predictionBotMethodology(userAddress, privateKey, configs, menuOption, menuSelection).catch(error => {
    throw error
  })
}
