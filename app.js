const express = require('express')
const app = express()
const port = process.env.PORT || 3030;
const bodyParser = require('body-parser')
const ip = () => process.env.IP || '127.0.0.1'

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// ROUTES
const uploads = require('./routes/uploads')

// ALLOW CORS HEADERS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(uploads)

app.use((req, res, next) => {
  res.sendStatus(404)
})

console.log("server started");
app.use((err, req, res, next) => {
  // console.log(err, req, res);
  console.log(req);
  const status = err.status || 500
  res.status(status).send(err.message)
})

// app.listen(port, ip(), () => console.log(`Listening on ${ip}:${port}`))
app.listen(port, () => console.log(`Listening on:${port}`))

module.exports = app
