const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/coaching', (req, res) => {
  res.sendFile(path.join(__dirname,'..','..','public','coaching.html'));
});

module.exports = router;