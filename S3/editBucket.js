// import aws-sdk to access s3 Buckets
import AWS from 'aws-sdk'
const s3 = new AWS.S3({})

export const handler = async event => {
  const params = {
    // EDIT BUCKET PARAMS
    Bucket: 'testbucketfromlambdasl27',
    Key: 'test1.txt',
    Body: 'This is some text',
  }

  // DEFINE DATA - 'put' params into bucket
  const data = await s3.putObject(params).promise()

  return data
}
