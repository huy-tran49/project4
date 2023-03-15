const express = require('express')
const passport = require('passport')
const requireToken = passport.authenticate('bearer', { session: false })

const Image = require('../models/image')

const router = express.Router()

// CREATE
// POST /examples
router.post('/image', requireToken, (req, res, next) => {
	// set owner of new example to be current user
	// req.body.order.owner = req.user._id
    
	Image.create(req.body.image)
		// respond to succesful `create` with status 201 and JSON of new "example"
		.then((image) => {
			res.status(201).json({ image: image.toObject() })
		})
		// if an error occurs, pass it off to our error handler
		// the error handler needs the error message and the `res` object so that it
		// can send an error message back to the client
		.catch(next)
})

module.exports = router