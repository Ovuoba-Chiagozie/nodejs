const {people} = require('../data')

const getPeople = (req,res) => {

    res.status(200).json({sucess:true, data:people})

}

const postPeople = (req,res) => {

    const {name} = req.body
    if(!name) {

       return res.status(400).json({success:false,msg:'Please provide name value'})

    }

    res.status(201).json({sucess:true, person: name})

}

const putPeople = (req,res) => {
    
    // console.log(req.body)
    const {id} = req.params
    const {name} = req.body

    const person = people.find((person) => person.id === Number(id))
    console.log(person)

    if(!person) {

      return  res.status(404).json({sucess:false, msg:`person with id of ${id} does not exist`})

    }

    const newPeople = people.map(person => {

        if (person.id === Number(id)) {

             person.name = name

        }

        return person

    })

    // console.log(id,name)
    res.status(200).json({success: true, data :newPeople})

}

const deletePeople = (req,res) => {

    const person = people.find((person) => person.id === Number(req.params.id))
    console.log(person)

    if(!person) {

      return  res.status(404).json({sucess:false, msg:`person with id of ${req.params.id} does not exist`})

    }

    const newPeople = people.filter(person => person.id !== Number(req.params.id))

    return res.status(200).json({success:true,data: newPeople})

}

module.exports = {

    getPeople,
    postPeople,
    putPeople,
    deletePeople

}