#!/usr/bin/env node

'use strict'

const fs = require('fs'),
      minimist = require('minimist'),
      p = require('./package.json'),
      gne = require('.')

let argv = minimist(process.argv.slice(2), {
  alias: {h: 'help', v: 'version' }
});
if (argv.help) {
  fs.createReadStream(__dirname + '/usage.txt').pipe(process.stdout)
  return
}
if (argv.version) {
  console.log(p.version)
  return
}

gne()
