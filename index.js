// INVOKE LAMBDA FROM LAMBDA

import AWS from 'aws-sdk'
const lambda = new AWS.Lambda({ region: 'us-west-2' })

export const handler = async event => {
  const data = await lambda
    .invoke({
      FunctionName: 's3makeobject',
      Payload: JSON.stringify(event),
    })
    .promise()

  return data
}
