var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.send(JSON.stringify({status: "ok", value: "Welcome"}));
  return
});

router.post('/values', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  var val = req.body.value;

  if (val === undefined || val === "") {
    res.send(JSON.stringify({status: "error", value: "Value undefined"}));
    return
  }
});

module.exports = router;
