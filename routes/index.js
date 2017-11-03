var express = require('express');
var fs = require('fs');
var https = require('https');
var router = express.Router();
var request = require('request');
const googleTrends = require('google-trends-api');
 
/* GET home page. */
router.get('/', function(req, res, next) {
      res.sendFile('index.html', { root:  'public' });
});

router.get('/trends', function(req, res, next){
  var result = "";
  googleTrends.interestByRegion({keyword: req.query.q})
  .then(function(results){
    result += results;
    res.send(results);
  })
  .catch(function(err){
    console.error(err);
  });
 
});

module.exports = router;
