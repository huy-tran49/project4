const express = require('express')
const cloudinary = require('cloudinary')
const router = express.Router()
const dotenv = require('dotenv').config({ path: './.env'})


console.log(process.env.CLOUD_NAME)

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
})

router.post('/api/upload', async (req, res) => {
    try {
        const fileStr = req.body.data
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'k83dfv5v',
        });
        console.log('this is upload response',uploadResponse)
        res.json({ msg: 'yaya' })
    } catch (err) {
        console.error(err)
        res.status(500).json({ err: 'Something went wrong' })
    }
})

module.exports = router