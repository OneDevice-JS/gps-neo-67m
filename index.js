var EventEmitter = require('events').EventEmitter
var inherits = require('util').inherits

var GPS = require('gps')
var SerialPort = require('serialport')
var ReadLine = require('@serialport/parser-readline')

/**
 * A GPS Driven for BLOX NEO-6/7M written with Nodejs.
 * @class
 * @param {object} [options] 
 * @param {string} [options.port] The uart port of gps module. Default value is /dev/ttyUSB0.
 * @param {number} [options.baud] The baudrate of gps module. Default value is 9600.
 */
function GPSNEOM (options) {
  EventEmitter.call(this)
  this.options = this.formatOptions(options || {})
  this.gpsParse = new GPS()
  this.gpsDevice = new SerialPort(this.options.port, {
    baudRate: this.options.baud
  })
  this.parse = this.gpsDevice.pipe(new ReadLine({ delimiter: '\r\n' }))
  this.handleEvent()
}
inherits(GPSNEOM, EventEmitter)

GPSNEOM.prototype.formatOptions = function (options) {
  return Object.assign({}, {
    baud: 9600,
    port: '/dev/ttyUSB0'
  }, options)
}

GPSNEOM.prototype.handleEvent = function () {
  var self = this
  this.gpsDevice.on('open', function () {
    self.emit('open')
  })
  this.gpsDevice.on('error', function (err) {
    self.emit('error', err)
  })
  this.gpsParse.on('data', function (data) {
    self.emit('data', data)
  })
  this.parse.on('data', function (frame) {
    self.gpsParse.update(frame)
  })
}

module.exports = GPSNEOM
