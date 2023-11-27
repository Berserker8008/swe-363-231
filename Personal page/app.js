const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const fs = require('fs');

const routespath = path.join(__dirname,'src','routes');

app.use(express.static(path.join(__dirname,'public')));

fs.readdirSync(routespath).forEach(file => {
  const routePath = path.join(routespath, file);
  const route = require(routePath);
  app.use('/', route);
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});