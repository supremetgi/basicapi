const express = require('express')
const morgan = require('morgan')
const app = express()
const serverless = require('serverless-http')
router = express.Router()





app.get('/',(req,res,next) => {
  res.send('welcome')
})



app.post('/',async(req,res,next) => {
  res.send('pts request')
})

app.listen(3000,() => {
  console.log('server running on 3000')
})

