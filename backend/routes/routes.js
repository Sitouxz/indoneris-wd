const express = require('express')
const router = express.Router()
const users = require('../models/User')
const bcrypt = require('bcrypt')

router.post('/signup', async (request, response) =>{

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

router.post('/signin', async (request, response) =>{
    
    let email = request.body.email
    let password = request.body.password


    User.findOne({ email }).then(user => {
        // Check if user exists
        if (!user) {
          return res.status(404).json({ emailnotfound: "Email not found" });
        }

    
    const signedUpUser = new users({
        email:email,
        password:password
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