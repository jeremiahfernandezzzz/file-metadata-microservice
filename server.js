var express = require('express')
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

var app = express()

app.set('view engine', 'pug')

app.get('/', function (req,res){
  res.render('index')
})

app.post('/', upload.single('upload'), function (req, res) {
  res.send({filesize: req.file.size})
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
})

app.listen(process.env.PORT)