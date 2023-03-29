const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.send('oi')
})

// sub-routes
const shows = require('./shows');
router.use('/shows', shows);

module.exports = router;