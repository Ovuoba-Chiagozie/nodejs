const Eren = {name:'Eren', isthe: 'Attack Titan'}
const Mikasa = {name:"Mikasa", isthe: "Humanity's strongest soldier"}
const Annie = {name:'Annie', isthe: "Female Titan"}

const {writeFileSync} = require('fs')

for (let index = 0; index < 1000; index++) {

    writeFileSync('./content/big.txt', `hello world times ${index}`,{flag:'a'})
    
}

module.exports = {Eren, Mikasa, Annie}