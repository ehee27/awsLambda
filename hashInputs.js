import https from 'https'
import crypto from 'crypto'

export const handler = async (event, context) => {
  // let dataString = event.password

  const hash = crypto.createHash('sha256').update('password').digest('hex')

  const response = {
    statusCode: 200,
    body: hash,
  }

  return response
}
