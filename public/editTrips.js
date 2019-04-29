'use strict'
let fs = require('fs')

// private
var trips
fs.readFile('trips.json', 'utf-8', function (err, data) {
  if (err) {
    console.log(err)
  }
  trips = JSON.parse(data)
})
// public
module.exports = {

  // edit a trip into the trips array
    edit : function (trip) {
            trips.push(trip)

    let jsonData = JSON.stringify(trips)

    fs.writeFile('trips.json', jsonData, function (err) {
      if (err) {
        console.log(err)
      }
    })
  }
}
