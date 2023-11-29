const Task = require('../models/task')
const asyncWrapper = require('../middleware/async')
const {CreateCustomError} = require('../errors/custom-error')

const getAllTasks = asyncWrapper( async (req,res) => {
    
            const tasks = await Task.find({})
            res.status(201).json({ tasks })
            // res.status(201).json({tasks,amount:tasks.length})
            // res.status(201).json({success:true, data: {tasks}, amount: tasks.length})
                    
    })

const createTasks = asyncWrapper(async (req,res) => {

        const task = await Task.create(req.body)
        res.status(201).json({task})     
    
    })

const getTasks = asyncWrapper(async (req, res, next) => {
        
        const {id: taskId} = req.params
        const task = await Task.findOne({_id:taskId})

        if(!task) {

            // const error = new Error('Not found')
            // error.status = 404
            // return next(error)

           return next(CreateCustomError(`No Id: ${taskId} found,`,404))
            //  return res.status(404).json({msg:`No Id: ${taskId} found`})

        }

        res.status(201).json({task})
    
    })

const updateTasks = asyncWrapper(async (req,res) => {
        
        const {id: taskId} = req.params
        const task = await Task.findOneAndUpdate({_id:taskId},req.body,
            {new:true,runValidators:true}
            )

        if(!task) {

            // res.status(404).json({msg: `No task like ${task} exists`})
            return next(CreateCustomError(`No Id: ${taskId} found`), 404)

        }

        res.status(201).json({task}) 
    
    })

const deleteTasks = asyncWrapper(async (req,res) => {

        const {id: taskId} = req.params
        const task = await Task.findOneAndDelete({_id:taskId})

        if(!task) {

            //  return res.status(404).json({msg:`product for ${taskId} not found`})
            return next(CreateCustomError(`No Id: ${taskId} found`,404))

        }

        res.status(201).json({task})

    })
module.exports = {

    getAllTasks,
    createTasks,
    getTasks,
    updateTasks,
    deleteTasks

}