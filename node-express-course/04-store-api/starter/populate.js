require('dotenv').config()

const connectDB = require('./db/connect')
const ProductSchema = require('./models/product')
const products = require('./products.json')


const start = async ( ) => {

    try {
        
        await connectDB(process.env.MONGO_URL)
        await ProductSchema.deleteMany()
        await ProductSchema.create(products)
        console.log('SUCCESS!!')
        process.exit(0)

    } catch (error) {
        
        console.log(error)
        process.exit(1)
        

    }

}

start()