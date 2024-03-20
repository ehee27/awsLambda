// STARTING AND STOPPING OUR SERVER INSTANCE

import AWS from 'aws-sdk'
AWS.config.update({ region: 'us-west-2' })
const ec2 = new AWS.EC2()

export const handler = event => {
  const params = {
    InstanceIds: ['i-0bad4d0225058337b'],
  }
  // ec2.stopInstances(params, function (err, data) {
  ec2.startInstances(params, function (err, data) {
    console.log('Stopped')
    if (err) {
      console.log(err, err.stack)
      return err
    } else {
      console.log(data)
      return data
    }
  })
}
