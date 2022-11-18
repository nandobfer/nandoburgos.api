const express = require('express');
const router = express.Router();
const config = require('../../config.json')
const newMysql = require('../../src/database')


/* GET users listing. */
router.post('/', (request, response, next) => {    
	const data = request.body;
	const mysql = newMysql(config.app.database);
	mysql.connect();
    console.log(data)

	
	mysql.query({
		sql: `DELETE FROM ${data.language} WHERE id = ? ;`,
		timeout: 40000, // 40s
		values: [
            data.cheat.id
        ]
	}, (error, results) => {
		if (error) console.error(error);
        console.log('tirado')

        response.json({success: true})
	});


});

module.exports = router;