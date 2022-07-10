if(process.env.NODE_ENV !== 'production')
    require('dotenv').config()

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')

app.set('view engine', 'ejs') // setting the view engine
app.set('views', __dirname + '/views') // the views are inside ./views
app.set('layout', 'layouts/layout') // we set a layout ( no need to make headers and footers multiple times )
app.use(expressLayouts)
app.use(express.static('public')) // files like stylesheets, js, images

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('connected to Mongoose'))
app.use('/', indexRouter) // we are telling the server to redirect request to / to indexRouter

app.listen(process.env.PORT || 3000)