#!/usr/bin/env node

'use strict'

const fs = require('fs'),
      minimist = require('minimist'),
      gne = require('.')

var argv = minimist(process.argv.slice(2), {
    alias: {h: 'help' }
});
if (argv.help) {
    fs.createReadStream(__dirname + '/usage.txt').pipe(process.stdout);
    return
}

gne()
