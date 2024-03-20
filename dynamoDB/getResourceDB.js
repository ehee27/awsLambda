// GET A RECORD/RESOURCE - immport aws-sdk and create a new Dynamo client
// 1. scanParams object refs table and attributes looking for
// 2. create 'data' var which is what is 'scanned'
// 3. create  response object

import AWS from 'aws-sdk'
const ddb = new AWS.DynamoDB.DocumentClient({ region: 'us-west-2' })

export const handler = async event => {
  // WHAT TABLE AND ATTRIBUTES
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
  // SCAN FOR DATA
  const data = await ddb.scan(scanParams).promise()

  // REPSONSE OBJECT
  const response = {
    statusCode: 200,
    body: data,
  }

  return response
}
