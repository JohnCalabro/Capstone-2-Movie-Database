const express = require("express");

const router = express.Router();

//GET requests
router.get('/', (req, res) => {
    res.json({msg : 'get all data'} )
})

router.get('/:id', (req, res) => {
    res.json({msg: 'getting a single piece of data'})
})

//POST
router.post('/', (req, res) => {
    res.json({msg: 'post a new piece of data'})
})

//DELETE
router.delete('/:id', (req, res) => {
    res.json({msg: 'delete a piece of data'})
})

//UPDATE
router.patch('/:id', (req, res) => {
    res.json({msg: 'update a piece of data'})
})

module.exports = router;