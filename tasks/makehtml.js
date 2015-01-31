/*
 * makehtml
 * https://github.com/codetyphon/makehtml
 *
 * Copyright (c) 2015 codetyphon
 * Licensed under the MIT license.
 */
 fs = require('fs');
'use strict';
module.exports = function (grunt) {
  grunt.registerMultiTask('makehtml', 'makehtml', function () {
    var tasks=this.data.tasks;
    for(var i=0;i<tasks.length;i++){
      var task=tasks[i];
      var from=task.from;
      var to=task.to;
      var text='';

      for(var fromi=0;fromi<from.length;fromi++){
        text += fs.readFileSync(from[fromi],{encoding:'utf8'});
      }

      //
      try{
        var fd = fs.openSync(to, 'w');
        buffer = new Buffer('' + text, 'utf8');
        fs.writeSync(fd, buffer, 0, buffer.length, null);
        fs.closeSync(fd);
        console.log('ok:'+to);
      }catch(err){
        console.log(err)
      }
      //
      //console.dir(to);
    }
  });
};
