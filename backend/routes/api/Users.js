const express = require('express')
const router = express.Router()
const user = require('../../models/User')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");


const validateRegisterInput = require('../../Validation/register')
const validateLoginInput  = require('../../Validation/login')

router.post('/signup', async (req, res) =>{

    const { errors, isValid } = validateRegisterInput(req.body);
    // Check validation
    if (!isValid) {
        //console.log(errors)
        return res.status(400).json(errors);
    }

    const saltPassword = await bcrypt.genSalt(10)
    const securePassord = await bcrypt.hash(req.body.password, saltPassword)

    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let email = req.body.email
    let phone = req.body.phone

    user.findOne({ email }).then((user) => {
      if (!user) {
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
            //[#direct] ke classes
      } else {
          console.log("Email already registered!");
          return res.status(400).json({ alreadyRegist: "Email already registered!" });
      }  
      });

    
})

router.post('/signin', async (req, res) =>{
    
    const { errors, isValid } = validateLoginInput(req.body);
    if (!isValid) {
        //console.log(errors)
        return res.status(400).json(errors);
    }

    let email = req.body.email
    let password = req.body.password

    user.findOne({ email }).then((user) => {
        console.log(user);
        if (!user) {
            console.log("email not found");
            return res.status(400).json({ emailnotfound: "Email not found" });
        } else {
            console.log("email found");
        }

        bcrypt.compare(password, user.password).then((isMatch) => {
            if (isMatch) {
                console.log("password found");

                //DIRECT AKANG KE CLASSES [#direct]
                //return res.json({ passwordCorrect: "Password correct" });
                const payload = {
                  id: user.id,
                  name: user.name
                };
                jwt.sign(
                  payload,
                  process.env.secretOrKey,
                  {
                    expiresIn: 3600 // 1 year in seconds
                  },
                  (err, token) => {
                    res.json({
                      success: true,
                      token: "Bearer " + token
                    });
                  }
                );
            } else {
                console.log("password not found");
                return res
                    .status(400)
                    .json({ passwordIncorrect: "Password incorrect" });
            }
        });
        
    });
});

module.exports = router;
