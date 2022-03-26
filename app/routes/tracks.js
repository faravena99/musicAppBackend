const express = require('express')
const router = express.Router()
const { getItems } = require('../controlles/tracks')


router.get('/', getItems) //TODO: http://localhost:3001/api/1.0/tracks 🔴🔴

module.exports = router