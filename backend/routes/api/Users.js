const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const validateRegisterInput = require("../../Validation/register");
const validateLoginInput = require("../../Validation/login");

router.post("/signup", async (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    // Check validation
    if (!isValid) {
        //console.log(errors)
        return res.json(errors);
    }

    const saltPassword = await bcrypt.genSalt(10);
    const securePassord = await bcrypt.hash(req.body.password, saltPassword);

    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let phone = req.body.phone;

    User.findOne({ email }).then((user) => {
        if (!user) {
            console.log("Registered new user");
            const signedUpUser = new User({
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                password: securePassord,
            });
            signedUpUser
                .save()
                .then((data) => {
                    res.json({ data, logged: true });
                })
                .catch((error) => {
                    res.json(error);
                });
            //[#direct] ke classes
        } else {
            console.log("Email already registered!");
            return res.json({
                alreadyRegist: "Email already registered!",
                logged: false,
            });
        }
    });
});

router.post("/signin", async (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
    if (!isValid) {
        //console.log(errors)
        return res.json(errors);
    }

    let email = req.body.email;
    let password = req.body.password;

    User.findOne({ email }).then((user) => {
        if (!user) {
            console.log("email not found");
            return res.json({ emailnotfound: "Email not found" });
        } else {
            console.log("email found");
        }

        bcrypt.compare(password, user.password).then((isMatch) => {
            if (isMatch) {
                console.log("password found");
                return res.json({ redirect: true });
            } else {
                console.log("password not found");
                return res.json({ passwordIncorrect: "Password incorrect" });
            }
        });
    });
});

module.exports = router;
