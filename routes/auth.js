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

// logout
router.get('/logout', (req, res, next) => {
    req.logout((error) => {
        if (error) { return next(error) }
        res.redirect('/')
    })
})


module.exports = router