// DYNAMO DB SCANNING - immport aws-sdk and create a new Dynamo client
// 1. Params object refs table
// 2. create 'data' var which is what is return from 'scan'
// 3. create  response object

import AWS from 'aws-sdk'
const ddb = new AWS.DynamoDB.DocumentClient({ region: 'us-west-2' })

export const handler = async event => {
  const scanParams = {
    TableName: 'courseTable1',
    FilterExpression: '#mk = :mk',
    ExpressionAttributeNames: {
      '#mk': 'main_key',
    },
    ExpressionAttributeValues: {
      ':mk': 'Scott Lucas',
    },
  }
  // DATA returned from scan
  const data = await ddb.scan(scanParams).promise()

  // REPSONSE OBJECT
  const response = {
    statusCode: 200,
    body: data,
  }

  return response
}
