'use strict'

//Mosdules used for server
let express = require('express')
let path = require('path')
//let router = require('./router')
let router = require ('./editRouter')
let bodyParser = require('body-parser')

let app = express()


app.use(bodyParser.urlencoded({ extended: true }))
app.use(router)

//enables static files that are in public folder to be accessed by server
app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000)
console.log('Server is running at port 3000')