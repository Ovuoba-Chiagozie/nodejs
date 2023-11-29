const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required:[true,'product name must be provided']
    },
    price: {
        type: Number,
        required:[true, 'product price must be provided']
    },
    rating: {
        type: Number,
        default:4.5
    },
    featured: {
        type: Boolean,
        default: false
    },
    createAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum: {
           values: ['ikea','liddy','caressa','marcos'],
           message: '{VALUE} is not a company'
        }
        // enum: ['ikea','liddy','caressa','marcos']
    }
})


module.exports = mongoose.model('ProductSchema',ProductSchema)