const mongoose = require('mongoose')

const TaskSchema = mongoose.Schema({

    name:{
        type: String,
        required: [true, 'must include the name'],
        trim: true,
        maxLength: [20, 'must be not more than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false
    }

})

module.exports = mongoose.model('Task',TaskSchema)