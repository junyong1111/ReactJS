const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://유저아이디:유저비밀번호@junprojcet.kzx4jm1.mongodb.net/?retryWrites=true&w=majority',
{
    useNewUrlParser: true, useUnifiedTopology: true 
}).then(() => console.log('Successfully connected to mongodb'))
.catch(e => console.error(e));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})