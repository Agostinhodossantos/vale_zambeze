const { Router } = require('express')
const router = Router()

const routerController = require('../controllers/router.controller')

// router.get('/', (req, res) => {
//     console.log("hello")
//     res.send("Hello")
// })

router.get('/', routerController.home)

module.exports = router