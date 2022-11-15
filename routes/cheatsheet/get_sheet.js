const express = require('express');
const router = express.Router();
const config = require('../../config.json')
const newMysql = require('../../src/database')


/* GET users listing. */
router.post('/', (request, response, next) => {    
	const data = request.body;

	const mysql = newMysql(config.app.database);
	mysql.connect();
	
	mysql.query({
		sql: `SELECT * FROM ${data.language} order by category ;`,
		timeout: 40000, // 40s
		values: [
            data.language,
        ]
	}, (error, results) => {
		if (error) console.error(error);
        console.log(results)
        response.json(results)
        mysql.end()
	});


});

module.exports = router;