const express = require("express");
const router = express.Router();
const user = require("../models/User");
const bcrypt = require("bcrypt");

router.post("/signup", async (request, response) => {
    const saltPassword = await bcrypt.genSalt(10);
    const securePassord = await bcrypt.hash(
        request.body.password,
        saltPassword
    );

    let firstName = request.body.firstName;
    let lastName = request.body.lastName;
    let email = request.body.email;
    let phone = request.body.phone;
    const signedUpUser = new user({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        password: securePassord,
    });
    signedUpUser
        .save()
        .then((data) => {
            response.json(data);
        })
        .catch((error) => {
            response.json(error);
        });
});

router.post("/signin", async (request, response) => {
    let email = request.body.email;
    let password = request.body.password;

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
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })*/
    });
});

module.exports = router;
