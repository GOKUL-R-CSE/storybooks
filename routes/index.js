const express = require('express')
const router = express.Router()

// login/landing page
router.get('/', (req, res) => {
    res.render('login', {
        layout: 'login'
    })
})

// dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})


module.exports = router