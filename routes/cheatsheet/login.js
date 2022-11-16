const express = require('express');
const router = express.Router();
const config = require('../../config.json')
const newMysql = require('../../src/database')


/* GET users listing. */
router.post('/', (request, response, next) => {    
	const data = request.body;

    console.log(data.password)

	if (data.password == 'mfux6xpj') {
        response.json({login: true})
    } else {
        response.json({login: false})
    }


});

module.exports = router;