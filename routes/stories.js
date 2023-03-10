const express = require('express')
const router = express.Router()
const { ensureAuth } = require('../middleware/auth')

const Story = require('../models/Story')

// show add page
router.get('/add', ensureAuth, (req, res) => {
    res.render('./stories/add')
})

// process add form
router.post('/', ensureAuth, async (req, res) => {
    try {
        req.body.user = req.user.id
        await Story.create(req.body)
        res.redirect('/dashboard')
    } catch (error) {
        console.log(error);
        res.render('errors/500')
    }
})


module.exports = router