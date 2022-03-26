const express = require('express')
const router = express.Router()

const { loginCtrl } = require('../controlles/auth')

//TODO: Login !
router.post('/login', loginCtrl)



module.exports = router