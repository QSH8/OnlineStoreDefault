const Router = require('express')
const router = new Router()
const DeviceController = require('../controllers/deviceController')

router.post('/registration', DeviceController.create)
router.get('/login', DeviceController.getAll)
router.get('/:id', DeviceController.getOne)


module.exports = router
