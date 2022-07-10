// all routes for our index 
const express = require('express')
const router = express.Router() // we just want the router portion of express

router.get('/', (req, res) => {
    res.render('index') // we are passing the name of the view we want to render
})

module.exports = router