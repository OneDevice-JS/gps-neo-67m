var GPSNEOM = require('../index.js')

var neo7m = new GPSNEOM({
  baud: 9600,
  port: '/dev/ttyUSB0'
})

neo7m.on('open', function () {
  console.log('gps open!')
})

neo7m.on('error', function (err) {
  console.log('gps occur an error:', err)
})

neo7m.on('data', function (data) {
  console.log('data update. type: ' + data.type + ' raw: ' + data.raw)
  console.log(data)
})
