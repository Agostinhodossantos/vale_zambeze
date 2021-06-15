const express = require('express')
const app = express()
const PORT = process.env.PORT || 2000
const ejs = require('ejs')
const routes = require('./routes/index.js')

// setup view engine
app.use(express.static('public'))
app.set('view engine', 'html')
app.engine('html', ejs.renderFile)
app.use(routes)


app.listen(PORT, () => {
    console.log(`Now ${PORT} is magic port`)
})