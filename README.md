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

# 文档

`data` 事件会在每次 GPS 信息更新时触发，这是被动触发的，更新速率取决于 GPS 模块多久上报一次。

`data` 字段是一个解析完 NMEA 协议后的对象，详细的文档可以在这里查看：https://www.npmjs.com/package/gps

`data.raw` 属性是 GPS 模块上报的原始帧数据。

[neo6m]: https://item.taobao.com/item.htm?spm=a1z10.1-c-s.w4004-18317433854.28.54b350e5gs9OBL&id=597494463834
