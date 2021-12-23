const { response } = require('express')
const user = require('./User')

app.get('/test'), (res, req) =>{
   user.findOne().then((user) => {
    response.send(user);
}) 
}