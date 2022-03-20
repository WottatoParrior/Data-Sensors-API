var express = require('express');
var router = express.Router();

let count = 0;

router.get('/schema', function (req, res, next) {
  res.send({
    input: 'Question about a slide.',
    input: 'Comment about a topic.',
  });
});

router.post('/question', function (req, res, next) {
  res.send({
    input: 'Question about a slide.',
    input: 'Comment about a topic.',
  });
});

router.post('/comment', function (req, res, next) {
  res.send({
    input: 'Question about a slide.',
    input: 'Comment about a topic.',
  });
});

module.exports = router;
