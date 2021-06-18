const axios = require('axios');
const BASE_URL = process.env.BASE_URL

async function sendEmail(email, dataList) {
    return await axios.post(`http://127.0.0.1:3000/send/${email}`, dataList)
        .then(function(res) {
            return res.data
        }).catch(function(error) {
            console.log(error)
            return error
        })
}

async function getFiles() {
    return await axios.get(`http://127.0.0.1:3000/files`)
        .then(function(data) {
            
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