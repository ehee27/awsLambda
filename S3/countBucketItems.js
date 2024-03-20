// import aws-sdk to access s3 Buckets
import AWS from 'aws-sdk'
const s3 = new AWS.S3({})

export const handler = async event => {
  // DEFINE THE DATA WE ACCESSING
  const data = await s3
    .listObjectsV2({
      Bucket: 'testbucketfromlambdasl27',
      Prefix: 'playerPics',
    })
    .promise()

  // chain 'KeyCount' to count items in bucket
  console.log(data.KeyCount)

  // RETURN 'KeyCount' chained from data
  return data.KeyCount
}
