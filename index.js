/**
 * @author yhorie
 * @copyright 2016 yhorie. All rights reserved.
 */

'use strict'

module.exports = function gne() {

  const exec = require('child_process').exec;

  exec('git config -l', function(err, stdout, stderr){

    const name = stdout.match(/user.name=.+/i)[0].split('=')[1]
    const email = stdout.match(/user.email=.+/i)[0].split('=')[1]

    console.log( `current git user is '${name} <${email}>' `)

    if (err) {
      console.log(err);
    }
  });
}
