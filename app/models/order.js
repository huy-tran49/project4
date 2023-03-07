const mongoose = require('mongoose')

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
		designFront: {
			type: String,
		},
		designBack: {
			type: String,
		},
		pictures: {
			type: String,
		},
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
