const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema(
    {
        url: {
			type: String,
		},
        height: {
			type: Number,
		},
        width: {
			type: Number,
		}
    }
)

module.exports = mongoose.model('Image', imageSchema)