const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/coaching/confirmation', (req, res) => {
  const username = req.body.username;
  res.send(`Thank you, ${username}, for submitting the form from middleware!`);
  console.log("submittion confirmed")
  res.sendFile(path.join(__dirname,'..','..','public','confirmation.html'));
});

module.exports = router;