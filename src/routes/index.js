const { Router } = require('express')
const router = Router()

const routerController = require('../controllers/router.controller')

router.get('/', routerController.home)
router.get('/study/:id', routerController.study)
router.get('/document', routerController.document)
router.get('/delegation/:id', routerController.delegation)
router.post('/email', routerController.sendEmail)
router.get('/form', routerController.form)
router.get('/delegation/:id_del/project/:id', routerController.project)
router.get('/blog', routerController.blog)


router.get('/add_delegation', routerController.add_delegation)

module.exports = router