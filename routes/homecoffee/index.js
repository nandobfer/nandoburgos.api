const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.send('oi')
})

// sub-routes
const login = require('./login');
router.use('/login', login);

const products = require('./products');
router.use('/products', products);

module.exports = router;