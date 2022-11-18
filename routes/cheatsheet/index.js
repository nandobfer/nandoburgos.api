const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.send('oi')
})

// sub-routes
const get_sheet = require('./get_sheet');
router.use('/get_sheet', get_sheet);

const new_cheat = require('./new_cheat');
router.use('/new_cheat', new_cheat);

const delete_cheat = require('./delete_cheat');
router.use('/delete_cheat', delete_cheat);

const login = require('./login');
router.use('/login', login);

module.exports = router;