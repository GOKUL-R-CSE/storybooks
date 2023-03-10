const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middleware/auth')

const Story = require('../models/Story')

// login/landing page
router.get('/', ensureGuest, (req, res) => {
    res.render('login', {
        layout: 'login'
    })
})

// dashboard
router.get('/dashboard', ensureAuth, async (req, res) => {
    try {
        const stories = await Story.find({ user: req.user.id }).lean()
        res.render('dashboard', {
            name: req.user.firstName,
            stories
        })
    } catch (error) {
        console.log(error);
        res.render('errors/500')
    }
})


module.exports = router