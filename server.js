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
// app.get('/cars/new', (req,res) => {
//   res.render('new.ejs')
// })
//delete cars
app.delete("/cars/:index", (req,res) => {
  cars.splice(req.params.index,1)
  res.redirect("/cars")
})
//edit page
app.get('/cars/:index/edit', (req, res) => {
  res.render('edit.ejs', {
    cars: cars[req.params.index],
    index: req.params.index,
  })
})

app.put('/cars/:index', (req,res) => {
  if(req.body.gas === 'on'){
    req.body.gas = true
  } else {
    req.body.gas = false;
  }
  cars[req.params.index] = req.body
  res.redirect('/cars')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))