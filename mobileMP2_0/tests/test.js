// import test from 'tape';
//
// // For each unit test you write,
// // answer these questions:
// test('What component aspect are you testing?', assert => {
//   const actual = 'What is the actual output?';
//   const expected = 'What is the expected output?';
//
//   assert.equal(actual, expected,
//     'What should the feature do?');
// 
//   assert.end();
// });


// Require the built in 'assertion' library
var assert = require('assert');
// Create a group of tests about Arrays
describe('Array', function() {
  // Within our Array group, Create a group of tests for indexOf
  describe('#indexOf()', function() {
    // A string explanation of what we're testing
    it('should return -1 when the value is not present', function(){
      // Our actual test: -1 should equal indexOf(...)
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});
