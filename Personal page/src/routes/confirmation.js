const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/confirmation', (req, res) => {
  res.sendFile(path.join(__dirname,'..','..','public','confirmation.html'));
});

module.exports = router;