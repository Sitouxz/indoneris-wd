const { request, response } = require('express')
const express = require('express')
const router = express.Router()
const users = require('../models/User')
const bcrypt = require('bcrypt')

router.post('/signup', async (request,response) =>{

    const saltPassword = await bcrypt.genSalt(10)
    const securePassord = await bcrypt.hash(request.body.password, saltPassword)

    let firstName = request.body.firstName
    let lastName = request.body.lastName
    let email = request.body.email
    let phone = request.body.phone

    const signedUpUser = new users({
        firstName:firstName,
        lastName:lastName,
        email:email,
        phone:phone,
        password:securePassord
    })
    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})

module.exports = router