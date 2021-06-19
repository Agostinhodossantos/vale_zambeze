const provider = require('../controllers/provider')

const home = async(req, res) => {
    var data = await provider.getDelegation()
    res.render('pages/index', data)
}

const document = async(req, res) => {
    let data = await provider.getFiles()
    res.render('pages/document', data)
}

const study = (req, res) => {
    res.render('pages/study-details')
}

const delegation = async(req, res) => {
    let id = req.params.id
    let data = await provider.getDelegationById(id)

    console.log(data)
    res.render('pages/delegation-details', data)
}

const form = (req, res) => {
    res.render("pages/form")
}

const project = (req, res) => {
    let id = req.params.id
    res.render('pages/project')
}

const blog = (req, res) => {
    res.render('pages/blog')
}

const add_delegation = (req, res) => {
    res.render('pages/add_delegation')
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
    form,
    blog,
    project,
    add_delegation
}