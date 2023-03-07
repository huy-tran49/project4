const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema(
    {
        name: {
			type: String,
			required: true,
		},
        owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		}
    }
)

module.export = imageSchema