import ora from 'ora'
import {
  telegramScannerLogin,
} from '../components/inquirer/index'
import {
  MTProtoAPI,
} from '../components/mtproto/index'

let api: any
const spinner = ora({ text: ('Pending'), spinner: 'aesthetic' })

export const initializeTelegram = async (telegramAPI: any, input: any, J: any) => {
  try {
    api = new MTProtoAPI(telegramAPI)
    await startTelegram(telegramAPI, J)
    const chat = await getChatByName(input, J)
    spinner.succeed('Chat Found: { id: ' + chat.id + ', title: ' + chat.title + ', username: ' + chat.username + ' }')
    J()

    api.startListenToUpdates(async (updateInfo: any) => {
      if (updateInfo.updates)
        for (const update of updateInfo.updates) {
          update.message && (await readMessage(update.message, chat, J))
        } else updateInfo.message && (await readMessage(updateInfo, chat, J))
    })
  } catch (error: any) {
    throw error
  }
}

const startTelegram = async (telegramAPI: any, D: any) => {
  try {
    spinner.start()
    await api.call('updates.getState')
    spinner.stop()
  } catch (error: any) {
    spinner.stop()
    if (error.error_code === 401) try {
      const phone = await telegramScannerLogin('Please enter your number in international format (e.g. +12223334455):', false)
      spinner.start()
      const code = await api.call('auth.sendCode', {
        phone_number: phone,
        api_id: telegramAPI.api_id,
        api_hash: telegramAPI.api_hash,
        settings: {
          _: 'codeSettings',
        },
      })
      spinner.stop()
      const confirmationCode = await telegramScannerLogin('Enter confirmation code:', false)
      spinner.start()
      await api.call('auth.signIn', {
        phone_number: phone,
        phone_code: confirmationCode,
        phone_code_hash: code.phone_code_hash,
      })
      spinner.stop()
    } catch (error: any) {
      spinner.stop()
      if (error.error_message === 'SESSION_PASSWORD_NEEDED') try {
        const mfaCode = await telegramScannerLogin('Two-step verification code:', true)
        spinner.start()

        const {
          srp_id,
          current_algo,
          srp_B
        } = await api.call('account.getPassword')

        const {
          g,
          p,
          salt1,
          salt2,
        } = current_algo;

        const {
          A,
          M1,
        } = await api.class.crypto.getSRPParams({
          g,
          p,
          salt1,
          salt2,
          gB: srp_B,
          password: mfaCode,
        })

        await api.call('auth.checkPassword', {
          password: {
            _: 'inputCheckPasswordSRP',
            srp_id: srp_id,
            A,
            M1,
          },
        }), spinner.stop()
      } catch (H) {
        spinner.stop()
        throw D(H)
      } else throw D(error)
    } else throw D(error)
  }
}

const getChatByName = async (input: any, D: any) => {
  spinner.start()

  const availableChats = await api.call('messages.getAllChats', {
    except_ids: [],
  })

  const l = availableChats.chats.find((chat: any) => chat.username === input || 'https://t.me/' + chat.username === input)
  spinner.stop()
  if (l) return l
  throw D({
    error_code: 404,
    error_message: 'NOT_FOUND',
  })
}

const readMessage = async (message: any, chat: any, J: any) => {
  let l
  let X
  const u = ['162726413', '210944655', '553147242', '556736531', '609517172', '660783114', '696267355', '771096498', '357869031']
  message.peer_id ? l = message.peer_id._ === 'peerChannel' ? message.peer_id.channel_id : message.peer_id._ === 'peerChat' ? message.peer_id.chat_id : null : l = message.chat_id
  message.from_id?._ ? X = message.from_id._ === 'peerUser' ? message.from_id.user_id : null : X = message.from_id

  if (l === chat.id && !u.includes(X)) {
    if (Object.prototype.hasOwnProperty.call(message, 'media') && Object.prototype.hasOwnProperty.call(message.media, 'document') && message.media.document.mime_type === 'text/plain') {
      const E = await api.call('upload.getFile', {
        location: {
          _: 'inputDocumentFileLocation',
          id: message.media.document.id,
          access_hash: message.media.document.access_hash,
          file_reference: Buffer.from(message.media.document.file_reference.toString('hex'), 'hex'),
        },
        offset: 0,
        limit: 1048576,
      })
      message.message = Buffer.from(E.bytes).toString('ascii')
    }

    J(message.message)
  }
}

export const stopTelegram = () => {
  return api.stopListenToUpdate()
}
