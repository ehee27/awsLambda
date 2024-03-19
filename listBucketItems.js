import AWS from 'aws-sdk'
const s3 = new AWS.S3({})

export const handler = async event => {
  // DEFINE THE DATA WE ACCESSING
  const data = await s3
    .listObjectsV2({
      Bucket: 'testbucketfromlambdasl27',
      // LOOK IN SPECIFIC FOLDER
      Prefix: 'playerPics',
    })
    .promise()
  console.log(data)

  return data
}
