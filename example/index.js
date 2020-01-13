require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http');
const port = 3000;
const apiModule = require('../dist/index.js');
const API = apiModule.default;
const server = http.createServer(app);
apis = new API();
app.use(cors());
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.options('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, Content-Length, X-Requested-With'
  );
  res.send(200);
});

function applyRoutes(routes, app) {
  for (const route of routes) {
    const { method, path, handler } = route;
    app[method](path, handler);
  }
}
const routes = apis.routes();
applyRoutes(routes, app);

server.listen(port, async () => {
  routes.map(route =>
    console.log(`${route.method}: http://localhost:${port}${route.path}`)
  );
  console.log(`Example app listening on port ${port}!`);
});
