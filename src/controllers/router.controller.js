const provider = require('../controllers/provider')

const home = (req, res) => {
    res.render('pages/index')
}

const document = async(req, res) => {
    let data = await provider.getFiles()
    res.render('pages/document', data)
}

const study = (req, res) => {
    res.render('pages/study-details')
}

const delegation = (req, res) => {
    res.render('pages/delegation-details')
}

const form = (req, res) => {
    res.render("pages/form")
}

const sendEmail = async(req, res) => {
   let data = req.body;
   let email = data.email;
   delete data.email
   const values = Object.values(data)

   let uidList = []

   values.forEach(value => {
       uidList.push({uid: value})
   })


    let response = await provider.sendEmail(email, uidList)


    if (response != null && response) {
        res.redirect("/")
    } else {
        res.redirect("/document")
    }

}



module.exports = {
    home,
    document,
    study,
    delegation,
    sendEmail,
    form
}