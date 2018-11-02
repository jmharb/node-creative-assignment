var express = require('express');
var router = express.Router();
const uuidV4 = require('uuid/v4');

const notes = [
  { id: '1', title: 'Sample notes', data: '# Markdown notes \n\n In order for state to persist across refresh.... Save the note' },
  { id: '2', title: 'Sample notes 2', data: '# Sample header 2' },
  { id: '3', title: 'Sample notes 3', data: '# Sample header 3' }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Node Creative Assignment' });
});

router.put('/notes', (req, res, next) => {
  const { title, data } = req.body;
  res.json({ title, data, id: uuidV4() });
});

router.get('/notes', (req, res, next) => {
  res.json(notes);
});

router.patch('/notes/:id', (req, res, next) => {
  const { id } = req.params;
  const elementPos = notes.map(x => x.id).indexOf(id);
  notes[elementPos] = req.body;
  res.json(notes[elementPos]);
});

module.exports = router;
