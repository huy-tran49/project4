const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema(
    {
        name: {
			type: String,
			required: true,
		},
        height: {
			type: Number,
		},
        width: {
			type: Number,
		},
        owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		}
    }
)

module.export = imageSchema