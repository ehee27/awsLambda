import AWS from 'aws-sdk'
const s3 = new AWS.S3({})

export const handler = async event => {
  // DEFINE THE DATA WE ACCESSING
  const params = {
    Bucket: 'testbucketfromlambdasl27',
    // PROVIDE THE TARGET FILE
    Key: 'test1.txt',
  }
  // DEFINE DATA - 'get' our params
  const data = await s3.getObject(params).promise()

  // GOOD PRACTICE
  const response = {
    statusCode: 200,
    body: JSON.stringify(data),
  }
  // CONVERT raw data by using '.buf.toString()'
  let buf = data.Body
  console.log(buf.toString())
  return buf.toString()
}
