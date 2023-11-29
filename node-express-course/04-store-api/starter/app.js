const express = require('express')
const app = express()
require('express-async-errors')
require('dotenv').config()
const connectDB = require('./db/connect')
const productsRouter = require('./routes/products')
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')


app.use(express.json())
app.use('/api/v1/products',productsRouter)


app.get('/', (req,res) => {

    res.send('<h1>Store APi</h1><a href="/api/v1/products">Products route</a>')

})

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)
app.set('json spaces',40)

const port = process.env.PORT || 3000

const start = async () => {

    try {
        
        await connectDB(process.env.MONGO_URl)
        app.listen(port,() => {

            console.log(`server is running at ${port}...`)

        })

    } catch (error) {
        console.log(error)
    }

}

start()


