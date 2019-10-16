const express = require('express')
const app = express()
const port = 3000
const cars = require("./models/cars.js")

app.get('/cars', (req, res) => {
  res.render("index.ejs", {
    cars: cars
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))