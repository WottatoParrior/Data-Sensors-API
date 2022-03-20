const express = require('express');
const router = express.Router();
const io = require('../io');
/* GET home page. */

io.on('connection', (socket) => {
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

//DB Simulation
const dbTechnical = {
  1: 'Sound is not good.',
  2: 'Board is not visible.',
  3: 'Screen Sharing is not working.',
  4: 'Microphone is muted.',
};

const dbLecture = {
  1: 'Gradient Descent is not clear.',
  2: 'Too fast.',
  3: 'Too slow.',
};

//Tresholds setup by the teacher
const tresholdTechnical = {
  1: 2,
  2: 2,
  3: 4,
  4: 1,
};

const tresholdLecture = {
  1: 2,
  2: 2,
  3: 4,
};

//Count of issues currently being reported
let countTechnical = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
};
let countLecture = {
  1: 0,
  2: 0,
  3: 0,
};

// Clean the counts for the reported issues based on the timer set by the teacher
setInterval(() => {
  console.log('Technical Clear');
  countTechnical = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
  };
}, 30000);

setInterval(() => {
  console.log('Lecture Clear');

  countLecture = {
    1: 0,
    2: 0,
    3: 0,
  };
}, 300000);

router.post('/technical', function (req, res, next) {
  countTechnical[req.body.id] = countTechnical[req.body.id] + 1;

  if (countTechnical[req.body.id] > tresholdTechnical[req.body.id])
    io.emit('report_received', { body: dbTechnical[req.body.id] });
});

router.post('/lecture', function (req, res, next) {
  countLecture[req.body.id] = countcountLectureTechnical[req.body.id] + 1;

  if (countLecture[req.body.id] > tresholdLecture[req.body.id])
    io.emit('report_received', { body: dbLecture[req.body.id] });
});

router.get('/technical-schema', function (req, res, next) {
  res.send({
    btn: 'Sound is not good.',
    btn: 'Board is not visible.',
    btn: 'Screen Sharing is not working.',
    btn: 'Microphone is muted.',
  });
});

router.get('/lecture-schema', function (req, res, next) {
  res.send({
    btn: 'Gradient Descent is not clear.',
    btn: 'Too fast.',
    btn: 'Too slow.',
  });
});

router.get('/questions-comments-schema', function (req, res, next) {
  res.send({
    input: 'Question about a slide.',
    input: 'Comment about a topic.',
  });
});

module.exports = router;
