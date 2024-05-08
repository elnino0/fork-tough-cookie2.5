var vows = require("vows");
var assert = require("assert");
var tough = require('../lib/cookie');
var CookieJar = tough.CookieJar;

vows
  .describe("pollution_test").addBatch({
    "assert cant pollution the prototype by add attribute ": function() {
        assert.ok(CookieJar)
         CookieJar.prototype.evil = "evil"//like this excersie 
         assert.equal(CookieJar.prototype.evil,undefined)
    }
  }).run();