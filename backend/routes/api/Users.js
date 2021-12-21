const { req, res } = require('express')
const express = require('express')
const router = express.Router()
const user = require('../../models/User')
const bcrypt = require('bcrypt')


router.post('/signin', async (req,res) =>{

    const email = req.body.email;
    const password = req.body.password;
    // Find user by email
    user.findOne({ email }).then(user => {
        // Check if user exists
        if (!user) {
        return res.status(404).json({ emailnotfound: "Email not found" });
    }
    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };
// Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
})

module.exports = router