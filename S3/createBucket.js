// import aws-sdk to access s3 Buckets
import AWS from 'aws-sdk'
const s3 = new AWS.S3({})

export const handler = async event => {
  const params = {
    // CREATE BUCKET PARAMS
    CreateBucketConfiguration: {
      LocationConstraint: 'us-west-2',
    },
    ACL: 'private',
  }

  // DEFINE DATA - create the actual bucket
  const data = s3.createBucket(params).promise()

  return data
}
