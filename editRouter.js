'use strict'

let express = require('express')
let path = require('path')
//let editTrips = require('./public/editTrips')

let router = express.Router()

//If a GET request is sent on the edit page, respond by sending edit.html
router.get('/edit', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'edit.html'))
})

//if a POST request is sent on the edit created page, display console output and redirect to edit page
router.post('/edit', function (req, res) {
  console.log('Edit a created a trip')
  editTrips.edit(req.body)
  res.redirect('/edit')
})
module.exports = router