const mongoose = require('mongoose')
const imageSchema = require('./image')

const orderSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		date: {
			type: String,
			required: true,
		},
		quantity: {
			type: Number,
			required: true,
		},
		designFront: {
			type: String,
		},
		designBack: {
			type: String,
		},
		pictures: [imageSchema],
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		}
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Order', orderSchema)
