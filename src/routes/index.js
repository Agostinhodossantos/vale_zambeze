const { Router } = require('express')
const router = Router()

const routerController = require('../controllers/router.controller')

router.get('/', routerController.home)
router.get('/study/:id', routerController.study)
router.get('/document', routerController.document)
router.get('/delegation/:id', routerController.delegation)
router.post('/email/:email', routerController.sendEmail)

module.exports = router