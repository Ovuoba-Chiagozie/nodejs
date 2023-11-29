const express = require('express')
const routes = express.Router()
const {getAllTasks,getTasks,createTasks,updateTasks,deleteTasks} = require('../controllers/tasks')

routes.get('/',getAllTasks)
routes.get('/:id',getTasks)
routes.post('/',createTasks)
routes.patch('/:id',updateTasks)
routes.delete('/:id',deleteTasks)

module.exports = routes