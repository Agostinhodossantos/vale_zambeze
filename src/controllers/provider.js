const axios = require('axios');
require('dotenv').config()
const BASE_URL = process.env.BASE_URL_LOCAL

console.log(BASE_URL)

async function sendEmail(email, dataList) {
    return await axios.post(`${BASE_URL}/send/${email}`, dataList)
        .then(function(res) {
            return res.data
        }).catch(function(error) {
            console.log(error)
            return error
        })
}

async function getDelegationById(uid) {
    return await axios.get(`${BASE_URL}/delegation/${uid}`)
        .then(function(res){
            return res
        })
        .catch(function(error) {
            console.log(error)
            return null
        })
}

async function getDelegationProjects(uid) {
    return await axios.get(`${BASE_URL}/delegation/${uid}/project`)
        .then(function(data) {
            return data
        })
        .catch(function(error) {
            return null
        })
}

async function getDelegationProjectById(uid, uidProject) {
    return await axios.get(`${BASE_URL}/delegation/${uidProject}/project/${uid}`)
    .then(function(res) {
        return res.data
    })
    .catch(function(error) {

        console.log(error)
        return null
    })
}

async function getDelegation() {
    return await axios.get(`${BASE_URL}/delegation`)
    .then(function(data) {
        return data
    })
    .catch(function(error) {
        return null
    })
}

async function getFiles() {
    return await axios.get(`${BASE_URL}/files`)
        .then(function(data) {
            
            return data
        })
        .catch(function(error) {
            console.log(error)
        })
}

module.exports = {
    sendEmail,
    getFiles,
    getDelegation,
    getDelegationById,
    getDelegationProjects,
    getDelegationProjectById
}