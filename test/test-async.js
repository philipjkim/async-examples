var async = require('async');

Function.prototype.bind = Function.prototype.bind || function (thisArg) {
  var args = Array.prototype.slice.call(arguments, 1);
  var self = this;
  return function() {
    var args2 = Array.prototype.slice.call(arguments || []);
    self.apply(thisArg, args.concat(args2));
  };
};

function forEachIterator(args, x, callback) {
  setTimeout(function(){
    args.push(x);
    callback();
  }, x*25);
}

function mapIterator(call_order, x, callback) {
  setTimeout(function(){
    call_order.push(x);
    callback(null, x*2);
  }, x*25);
}

exports.forEach = function(test){
  var args = [];
  async.forEach([1,3,2], forEachIterator.bind(this, args), function(err){
    test.same(args, [1,2,3]);
    test.done();
  });
};

exports.map = function(test){
  var call_order = [];
  async.map([1,3,2], mapIterator.bind(this, call_order), function(err, results){
    test.same(call_order, [1,2,3]);
    test.same(results, [2,6,4]);
    test.done();
  });
};
