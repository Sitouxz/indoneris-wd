const { request, response } = require('express')
const express = require('express')
const router = express.Router()
const users = require('../models/User')
const bcrypt = require('bcrypt')

router.post('/signup', async (req, res) =>{

    const saltPassword = await bcrypt.genSalt(10)
    const securePassord = await bcrypt.hash(req.body.password, saltPassword)

    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let email = req.body.email
    let phone = req.body.phone
    const signedUpUser = new users({
        firstName:firstName,
        lastName:lastName,
        email:email,
        phone:phone,
        password:securePassord
    })
    signedUpUser.save()
    .then(data =>{
        res.json(data)
    })
    .catch(error =>{
        res.json(error)
    })
})

module.exports = router