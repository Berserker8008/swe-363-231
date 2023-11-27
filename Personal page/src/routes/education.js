const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/education', (req, res) => {
  res.sendFile(path.join(__dirname,'..','..','public','study.html'));
});

module.exports = router;