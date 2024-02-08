const express = require('express')
const { createMessage, getMessages, deleteMessage } = require('../Controller/messageController')
const router = express.Router()


// create message
router.post('/create', createMessage)

// getMessages
router.get('/getmessage',getMessages)

// deletemessage
router.delete('/delete/:id',deleteMessage)

module.exports = router