const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/powerlifting', (req, res) => {
  res.sendFile(path.join(__dirname,'..','..','public','power.html'));
});

module.exports = router;