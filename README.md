# gps-neo-67m

A GPS Driven for [BLOX NEO-6/7M][neo6m] written with Nodejs.

[BLOX NEO-6/7M][neo6m] GPS 模块驱动。

# 安装

```bash
$ npm install gps-neo-67m --save
```

# 快速开始

```js
var GPSNEOM = require('gps-neo-67m')

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
```

# 支持型号

`blox-neo-6m`, `blox-neo-7m`

[neo6m]: https://item.taobao.com/item.htm?spm=a1z10.1-c-s.w4004-18317433854.28.54b350e5gs9OBL&id=597494463834
