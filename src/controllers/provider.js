const axios = require('axios');
const BASE_URL = process.env.BASE_URL

let dataList = [{
        uid: '9cc8d49c-37af-46c6-9d53-7cb0346d56e7',
        name: 'Eusebio',
        url: 'file.pdf',
        thumbnail: 'rr'
    },
    {
        name: 'Jorge',
        url: 'file.pdf',
        uid: 'c12676f9-f5ed-40b6-840c-5a4897797c7c',
        thumbnail: 'rr'
    },
    {
        uid: 'ce791354-3f66-44c6-ad02-e9a120a6ac88',
        thumbnail: 'rr',
        name: 'Jorge',
        url: 'file12.pdf'
    },
    {
        name: 'Agostinho',
        uid: 'ddad5d1b-e5f8-474d-8330-69fe75ae07f0',
        thumbnail: 'rr',
        url: 'file.pdf'
    }
]


function sendEmail(email) {
    axios.post(`http://127.0.0.1:3000/send/${email}`, dataList)
        .then(function(res) {
            console.log(res)
            return res
        }).catch(function(error) {
            console.log(error)
            return error
        })
}

function getFiles() {
    axios.get(`http://127.0.0.1:3000/files`)
        .then(function(data) {
            console.log(data)
            return data
        })
        .catch(function(error) {
            console.log(error)
        })
}

module.exports = {
    sendEmail,
    getFiles
}