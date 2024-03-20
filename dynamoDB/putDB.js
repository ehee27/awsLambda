// DYNAMO DB - immport aws-sdk and create a new Dynamo client
// 1. Params object refs table and creates an 'item' object
// 2. 'put' params into the table creates a promise()
// 3. create  response object

import AWS from 'aws-sdk'
const ddb = new AWS.DynamoDB.DocumentClient({ region: 'us-west-2' })

export const handler = async event => {
  let statusCode
  let responseBody
  //
  const now = new Date()

  // PARAMS OBJECT
  const params = {
    TableName: 'courseTable1',
    Item: {
      main_key: 'Scott Lucas',
      timeStamp: `${now}`,
    },
  }
  try {
    const putData = await ddb.put(params).promise()
    console.log('success', putData)
    statusCode: 200, (responseBody = 'Entry saved in table')
  } catch (err) {
    console.log(err)
    statusCode: 200, (responseBody = 'Entry failed' + err)
  }
  const response = {
    statusCode: statusCode,
    body: responseBody,
  }
  return response
}
