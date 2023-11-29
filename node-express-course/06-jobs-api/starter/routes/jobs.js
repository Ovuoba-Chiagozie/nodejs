const express = require('express')
const router = express.Router()

const {
    getAlljobs,
    getJob,
    Createjob,
    UpdateJob,
    deleteJob
    } = require('../controllers/jobs')

router.get('/',getAlljobs)
router.get('/:id',getJob)
router.post('/',Createjob)
router.patch('/:id',UpdateJob)
router.delete('/:id',deleteJob)

module.exports = router