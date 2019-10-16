const express = require('express')
const app = express()
const port = 3000
const cars = require("./models/cars.js")
const methodOverride = require("method-override")
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride('_method'))

app.get('/cars', (req, res) => {
  res.render("index.ejs", {
    cars: cars
  })
})
//add new cars---------not finished yet
// app.get('/new', (req,res) => {
//   res.render('new.ejs')
// })
//delete cars
app.delete("/cars/:index", (req,res) => {
  cars.splice(req.params.index,1)
  res.redirect("/cars")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))