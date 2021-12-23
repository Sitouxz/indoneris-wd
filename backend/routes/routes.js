const express = require('express')
const router = express.Router()
const user = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");

const validateRegisterInput = require('../Validation/register')

router.post('/signup', async (req, res) =>{

    const { errors, isValid } = validateRegisterInput(req.body);
    // Check validation
    if (!isValid) {
        //console.log(errors)
        return res.json(errors);
    }

    const saltPassword = await bcrypt.genSalt(10)
    const securePassord = await bcrypt.hash(req.body.password, saltPassword)

    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let email = req.body.email
    let phone = req.body.phone
    const signedUpUser = new user({
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

router.post('/signin', async (req, res) =>{
    
    let email = req.body.email
    let password = req.body.password

    user.findOne({ email }).then((user) => {
        console.log(user);
        if (!user) {
            console.log("email not found");
            //return res.status(404).json({ emailnotfound: "Email not found" });
        } else {
            console.log("email found");
        }

        bcrypt.compare(password, user.password).then((isMatch) => {
            if (isMatch) {
                console.log("password found");

                //DIRECT AKANG KE CLASSES
                return response.json({ passwordCorrect: "Password correct" });
                /* User matched
            Create JWT Payload
            const payload = {
            id: user.id,
            name: user.name
            };*/
            } else {
                console.log("password not found");
                return response
                    .status(400)
                    .json({ passwordIncorrect: "Password incorrect" });
            }
        });
        /*const signedUpUser = new user({
        email:email,
        password:password
    })
    signedUpUser.save()
    .then(data =>{
        res.json(data)
    })
    .catch(error =>{
        res.json(error)
    })*/
    });
});

module.exports = router;
