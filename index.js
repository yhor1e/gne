/**
 * @author yhorie
 * @copyright 2016 yhorie. All rights reserved.
 */

'use strict'

const exec = require('child_process').exec
const clc = require('cli-color')

module.exports = function gne() {

  function execPromise(cmd) {
    return new Promise(function(resolve, reject){
      exec(cmd, function(err, stdout, stderr){
        if(err){
          reject(stderr)
        }
        resolve(stdout)
      })
    })
  }

  Promise.all([
    execPromise('git config user.name'),
    execPromise('git config user.email')
  ]).then(
    function(stdouts){
      console.log(clc.red(stdouts[0].trim(), '<' + stdouts[1].trim() + '>'), 'is git user in current directory.')
    },
    function(stderr){
      console.error(stderr)
    }
  )
}
