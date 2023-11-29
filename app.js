const animerating = 9.12

if(animerating < 9) {
    // console.log('dbz level')
}

else {
    // console.log('aot level')
}

// console.log('the best anime is shingekeyi no kyonji')

// console.log(__dirname)
// console.log(__filename)

const Characters = require('./4-names')
const SayHi = require('./hello')

// console.log(Characters)

// SayHi(Characters.Eren)
// SayHi(Characters.Mikasa)
// SayHi(Characters.Annie)

// os module
const os = require('os')

// console.log(os.userInfo())

// console.log(`the current uptime is ${os.uptime()} seconds`)

let OsModule = {
    type: os.type(),
    userinfo: os.userInfo(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
    uptime: os.uptime(),
    whatever: os.platform()
}

// console.log(OsModule)

// path module

const path = require('path')

// console.log(path.sep)

const filePath = path.join('/content','placeholder','text.txt')
// console.log(filePath)

const base = path.basename(filePath)
// console.log(base)

const absolutePath = path.resolve(__dirname,filePath)
// console.log(absolutePath)

// fs module

const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')
// console.log(first,second)

writeFileSync('./content/created-textfile.txt',`Here is the created file from:${first} : ${second}`,{flag:'a'})

const {readFile,writeFile} = require('fs')

readFile('./content/first.txt','utf8',(err,result) => {

    if(err){
        console.log(err)
        return
    }

    const first = result
    // console.log(first)

    readFile('./content/second.txt','utf8',(err,result)=> {

        if(err){
            console.log(err)
            return
        }
    
        const second = result
        // console.log(second)

        writeFile('./content/2-created-textfile.txt',`Here is the created file from:${first} : ${second}`,{flag:'a'},(err,result) => {

            if(err){
                console.log(err)
                return
            }

            // console.log(result)

        })

    })

})


const http = require('http')
const { promises } = require('dns')

const server= http.createServer((req,res) => {

    if(req.url === '/') {

        res.end('who be this bastard')

    }

    else if(req.url === '/about') {
        
        res.end('i just get things done')

    }

    else if(req.url === '/anime') {

        res.end('Shingeki no Kyojin is the best anime in the world')

    }

    // res.write('hello world')
    // res.end()
else {

    res.end(`
    <h1>you don go wrong place</h1>
    <p>everytime you go dey waka like idiot, where you dey go</p>
    <a href="/">use this link commmot for here</a>
    `)

}

})

// server.listen(5000)

// const server2 = http.createServer((req,res)=> {

//     console.log('see this bastard')
//     res.end('I am the best in the world')

// })

// server2.listen(5001, () => {
//     console.log('Server is loading: 5001...')
// })

let getText = (path) => {

    return new Promise((resolve, reject) => {

        readFile(path,'utf8',(err,result) => {

            if(err) {
                reject(err)
            }
            else {
                resolve(result)
            }

        })

    })

}

getText('./content/first.txt').then((result)=> {
    // console.log(result)
}).catch((err)=> {
    console.log(err)
})

let Start = async () => {

    try {

    let first = await getText('./content/first.txt')
    let second = await getText('./content/second.txt') 
    console.log(first,second)
        
    } 
    
    catch (error) {

        console.log(error)

    }

}

// Start()

const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)


let Start1 = async () => {

    try {

    let first = await readFilePromise('./content/first.txt','utf8')
    let second = await readFilePromise('./content/second.txt','utf8')
    await writeFilePromise('./content/start1-function.txt',`The third file: ${first} and ${second}`)
 
    console.log(first,second)
        
    } 
    
    catch (error) {

        console.log(error)

    }

}

// Start1()

let price = () => {

    let {readFile,writeFile} = require('fs').promises

let Start2 = async () => {

    try {

    let first = await readFile('./content/first.txt','utf8')
    let second = await readFile('./content/second.txt','utf8')
    await writeFile('./content/start1-function.txt',`The third file: ${first} and ${second}`,{flag:'a'})
 
    console.log(first,second)
        
    } 
    
    catch (error) {

        console.log(error)

    }

}

Start2()

}

// price()

const EventEmitter = require('events')

const currntEvent = new EventEmitter()

currntEvent.on('response',() => {
    console.log('who be this bastard')
})

currntEvent.on('response',(name, anime) => {
    console.log(`${name} you don watch that ${anime} anime`)
})

currntEvent.emit('response','chiagozie','shingeki no kyojin')

const server1 = http.createServer()

server1.on('request', (reg,res) => {
    res.end('so who dey augh with you')
})

server1.listen(5001)

const {createReadStream} = require('fs') 

let ReadWHat = createReadStream('./content/big.txt',{encoding: 'utf8'})

ReadWHat.on('data',(result) => {

    console.log(result)

})

ReadWHat.on('error',(error) => {
    console.log(`there is ${error}`)
})



