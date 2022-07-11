const express = require('express')
const router = express.Router()
const connection = require('../sqlconnections')

router.get('/', (req, res) => { 
    res.send(connection.state)
})

module.exports = router