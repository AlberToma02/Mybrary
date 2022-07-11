const express = require('express');
const router = express.Router();
const Author = require('../models/author')

// all routers route
router.get('/', (req, res) => {
    res.render('authors/index')
})

// new author router
router.get('/new', (req, res) => { 
    res.render('authors/new', {author: new Author() })
})

// create author route
router.post('/', (req,res) => { 
    const author = new Author({
        name: req.body.name
    })
    author.save((err, newAuthor) => { 
        if(err){
            res.render('authors/new', {
                author:author,
                errorMessage: 'error creating Author'
            })
        }
        // else res.redirect('authors/' + newAuthor.id)
        else res.redirect('authors/')
    })
})


module.exports = router