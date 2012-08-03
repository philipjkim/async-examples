{exec} = require 'child_process'

task 'run', ->
  nodeunit = './node_modules/nodeunit/bin/nodeunit'
  exec "#{nodeunit} test", (err, stdout, stderr) ->
    console.log err if err
    console.log stdout
