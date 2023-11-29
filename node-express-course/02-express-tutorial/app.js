let Price = () => {

    const http = require('http')
const {readFileSync} = require('fs')

const homePage = readFileSync('./navbar-app/index.html') 
const homeJS = readFileSync('./navbar-app/browser-app.js') 
const homeLogo = readFileSync('./navbar-app/logo.svg') 
const homeStyles = readFileSync('./navbar-app/styles.css') 

const server = http.createServer((req,res) => {

    // console.log(req)
    let url = req.url
    if (url === '/') {
    res.writeHead(200,{'content-type':'text/html'})
    res.write(homePage)
    res.end()
     }
     else if (url === '/about') {
        res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1>about page</h1>')
    res.end()  
     }
     else if (url === '/styles.css') {
        res.writeHead(200,{'content-type':'text/css'})
    res.write(homeStyles)
    res.end()  
     }
     else if (url === '/browser-app.js') {
        res.writeHead(200,{'content-type':'text/javascript'})
    res.write(homeJS)
    res.end()  
     }
     else if (url === '/logo.svg') {
        res.writeHead(200,{'content-type':'image/svg+xml'})
    res.write(homeLogo)
    res.end()  
     }
     else {
        res.writeHead(404,{'content-type':'text/html'})
    res.write('<h1>page not found</h1>')
    res.end()
     }

})

server.listen(5000)


}

let Price2 = () => {

let express = require('express')
const path = require('path')

let app = express()

app.use(express.static('./public'))

// app.get('/',(req,res) => {

//     res.status(200).sendFile(path.resolve(__dirname,'./navbar-app/index.html'))

// })

app.get('/about',(req,res) => {

    res.status(200).send('aboutPage')

})

app.all('*',(req,res) => {

    res.status(404).send('where you dey go this fool')

})

app.listen(5000, () => {
    console.log('who be this bastard')
})

}

let Price3 = () => {

let express = require('express')
const {products} = require('./data')
const app = express()

app.get('/', (req,res) => {

    // res.json([{name:'Ovubs'},{name:'Khalid'}])
    // res.json(products)
    res.send('<h1>Home page</h1><a href="/api/products">products</a>')
    
})

app.get('/api/products',(req,res) => {

    const newProducts = products.map(product => {

        const {id,image,name} = product

        return {id,image,name}

    })
    res.json(newProducts)

})

app.get('/api/products/:productID',(req,res) => {

    console.log(req.params)
    const {productID} = req.params

  const singleProduct = products.find((product) => product.id === Number(productID))
  if(!singleProduct){

    return res.status(404).send('Product does not exist you idiot')

  }
 return res.json(singleProduct)

})

app.get('/api/products/:productID/reviews/:reviewID',(req,res) => {

    console.log(req.params)
    res.send('what the fuck')

})

app.get('/api/v1/query',(req,res) => {
    console.log(req.query)
    const {search,limit} = req.query
    let sortedProducts = [...products]
    if(search) {

       sortedProducts = sortedProducts.filter(product => {

            return product.name.startsWith(search)

        })

    }

    if(limit) {

       sortedProducts = sortedProducts.slice(0,Number(limit))

    }

    if(sortedProducts.length < 1) {

       return  res.status(200).json([{sucess: true, data: [ ]}])

    } 
    // console.log(products)
    return res.json(sortedProducts)

} )

app.put('')

app.set('json spaces',40)

app.listen(5000,() => {

    console.log('server 5000 is active')

})

}

let Price4 = () => {

const express = require('express')
const app = express()
const logger = require('./logger')
const authozie = require('./authorize')

// app.use(logger)
// app.use('/api',logger)
// app.use([authozie,logger])

app.get('/', logger ,(req,res) => {

    res.send('Home')

})

app.get('/about',(req,res) => {

    res.send('About')
    
})

app.get('/api/items',(req,res) => {

    res.send('Items')
    
})

app.get('/api/products', [authozie,logger] ,(req,res) => {
     console.log(req.user)
    res.send('Product')
    
})

app.listen(5000,() => {
    console.log('server is listening for port 5000..')
})

}

const express = require('express')
const app = express()
const people = require('./routes/people')
const auth = require('./routes/auth')

app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/api/people',people)
app.use('/login',auth)



app.set('json spaces',40)

app.listen(5000, () => {

    console.log('Server is running port 5000..')

})