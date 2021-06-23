const router = require('express').Router()
const controller = require('../../controllers/data')

router.get('/get-all-data', controller.getAllData)
router.post('/insert-data', controller.insertData)
router.delete('/delete-data', controller.deleteData)

module.exports = router
