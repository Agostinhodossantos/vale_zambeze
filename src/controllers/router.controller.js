const provider = require('../controllers/provider')

const home = (req, res) => {
    res.render('pages/index')
}

const document = (req, res) => {
    // let data = provider.getFiles()

    res.render('pages/document')
}

const study = (req, res) => {
    res.render('pages/study-details')
}

const delegation = (req, res) => {
    res.render('pages/delegation-details')
}

const sendEmail = (req, res) => {
    let email = req.params.email
    let response = provider.sendEmail(email)
    console.log(response)
}



module.exports = {
    home,
    document,
    study,
    delegation,
    sendEmail
}