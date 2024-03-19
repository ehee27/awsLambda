// import aws-sdk to access s3 Buckets
import AWS from 'aws-sdk'
const s3 = new AWS.S3({})

export const handler = async event => {
  // DEFINE THE DATA WE ACCESSING
  const params1 = {
    Bucket: 'testbucketfromlambdasl27',
    Key: 'test1.txt',
  }
  // DEFINE DATA we're 'getting' from above params
  const data1 = await s3.getObject(params1).promise()

  // ACCESS THE DATA 'Body' and convert to string so we can append
  let buf = data1.Body.toString()
  buf += '\n'
  buf += 'This is the appended message'

  // DEFINE UPDATED DATA
  let params2 = {
    Bucket: 'testbucketfromlambdasl27',
    Key: 'test1.txt',
    Body: buf,
  }
  // USE 'putObject' with params defined to append
  const data2 = await s3.putObject(params2).promise()

  return data2.buf.toString()
}
