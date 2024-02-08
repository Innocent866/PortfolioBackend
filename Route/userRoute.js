const express = require('express')
const { create_user, login } = require('../Controller/userController')
const router = express.Router()

// create_user
router.post('/new-user', create_user)
router.post('/login', login)

module.exports = router