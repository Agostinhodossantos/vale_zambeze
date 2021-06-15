const home = (req, res) => {
    res.render('pages/index')
}

const document = (req, res) => {
    res.render('pages/document')
}

const study = (req, res) => {
    res.render('pages/study-details')
}

const delegation = (req, res) => {
    res.render('pages/delegation-details')
}



module.exports = {
    home,
    document,
    study,
    delegation
}