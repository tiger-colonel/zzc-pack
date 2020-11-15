#! /usr/bin/env node

console.log('start11');
// 1. 需要找到当前执行名的路径， 拿到webpack.config.js
const path = require('path');

const config = require(path.resolve('webpack.config.js'));

const Complier = require('../lib/Complier');
const complier = new Complier(config);
// 运行编译
complier.run()
