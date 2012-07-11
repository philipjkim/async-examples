var async = require('async');

function mapIterator(call_order, x, callback) {
  setTimeout(function(){
    call_order.push(x);
    callback(null, x*2);
  }, x*25);
}

exports['map'] = function(test){
  var call_order = [];
  async.map([1,3,2], mapIterator.bind(this, call_order), function(err, results){
    test.same(call_order, [1,2,3]);
    test.same(results, [2,6,4]);
    test.done();
  });
};
