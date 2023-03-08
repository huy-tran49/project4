const mongoose = require('mongoose')
const orderSchema = require('./order')

const cartSchema = new mongoose.Schema(
    {
        isActive: {
			type: Boolean,
		},
        orders: [orderSchema],
        owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		}
    }
)

module.export = mongoose.model('Cart', cartSchema)