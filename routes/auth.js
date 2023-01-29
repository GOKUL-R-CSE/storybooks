const express = require('express')
const router = express.Router()
const passport = require('passport')

// auth with googl:
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

// google auth callback
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        res.redirect('/dashboard')
    }
)


module.exports = router