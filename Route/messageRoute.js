const express = require('express')
const { createMessage, getMessages } = require('../Controller/messageController')
const router = express.Router()


// create message
router.post('/create', createMessage)

// getMessages
router.get('/getmessage',getMessages)

module.exports = router