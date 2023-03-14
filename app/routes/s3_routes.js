// import aws from 'aws-sdk'
const aws = require('aws-sdk')
// import crypto from 'crypto'
const crypto = require('crypto')
// import { promisify } from "util"
const util = require('util')
const randomBytes = util.promisify(crypto.randomBytes)

// dotenv.config()

const region = "us-east-1"
const bucketName = 'stylex-store'
const accessKeyId = 'AKIAW2M3IQTH3XGMJBWM'
const secretAccessKey = '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'

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: 'v4'
})

async function generateUploadURL() {
  const rawBytes = await randomBytes(16)
  const imageName = rawBytes.toString('hex')

  const params = ({
    Bucket: bucketName,
    Key: imageName,
    Expires: 60
  })
  
  const uploadURL = await s3.getSignedUrlPromise('putObject', params)
  return uploadURL
}

module.exports = generateUploadURL()
